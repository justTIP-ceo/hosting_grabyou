#!/usr/bin/env bash
# Выкладывает собранный сайт (build/) в бакет Yandex Object Storage.
# Нужны переменные: BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY.
# Запускается из GitHub Actions (.github/workflows/deploy-yandex.yml).
set -euo pipefail

SRC="${1:-build}"
: "${BUCKET:?Не задан BUCKET}"
S3="${S3:-https://storage.yandexcloud.net}"

NOCACHE="public, max-age=0, must-revalidate"
IMMUTABLE="public, max-age=31536000, immutable"

s3() { aws s3 "$@" --endpoint-url "$S3" --only-show-errors; }

# 1. Ассеты с хэшем в имени — первыми и надолго в кэш:
#    новый HTML не должен сослаться на файл, которого ещё нет в бакете.
s3 sync "$SRC/assets" "s3://$BUCKET/assets" --cache-control "$IMMUTABLE"

# 2. Всё остальное (HTML, картинки, файлы) — пока без удаления старого.
s3 sync "$SRC" "s3://$BUCKET" --exclude "assets/*" --cache-control "$NOCACHE"

# 3. «Чистые» адреса. Docusaurus ссылается на /partners, а файл лежит
#    в partners/index.html. Кладём копию под ключом без расширения —
#    тогда открываются и /partners, и /partners/.
clean=()
while IFS= read -r f; do
  key="${f#"$SRC"/}"
  key="${key%/index.html}"
  clean+=("$key")
  s3 cp "$f" "s3://$BUCKET/$key" \
    --content-type "text/html; charset=utf-8" --cache-control "$NOCACHE"
done < <(find "$SRC" -mindepth 2 -name index.html | sort)

# 4. Удаляем из бакета то, чего больше нет в сборке (кроме копий из шага 3).
excl=()
for k in "${clean[@]}"; do excl+=(--exclude "$k"); done
s3 sync "$SRC" "s3://$BUCKET" --delete "${excl[@]}" --cache-control "$NOCACHE"

echo "Готово: $(find "$SRC" -type f | wc -l) файлов, чистых адресов: ${#clean[@]} (${clean[*]})"
