import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './download.module.css';

function IconTelegram() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.613c-.152.676-.548.84-1.112.522l-3.07-2.262-1.482 1.427c-.164.164-.302.302-.618.302l.22-3.12 5.676-5.127c.247-.22-.054-.342-.384-.122L7.26 14.663l-3.02-.944c-.657-.206-.67-.657.137-.973l11.804-4.552c.547-.2 1.026.122.88.973-.013.082-.044.17-.098.28l-.4-.199z"/>
    </svg>
  );
}
function IconVK() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.713-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.566c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.029 11.44 4.47 9.289 4.47 8.883c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V11.17c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.745-.576.745z"/>
    </svg>
  );
}
function IconAndroid() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.341a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-9.046 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM2.877 8.004C3.67 4.02 7.51 1 12 1s8.33 3.02 9.123 7.004L22 8v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8l.877.004zM14.5 2.5l1.5 2.5M9.5 2.5 8 5"/>
    </svg>
  );
}
function IconDownload() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}
function IconSoon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

export default function DownloadPage() {
  const logoImg = useBaseUrl('/img/grabyouph.png');

  return (
    <Layout
      title="Скачать GrabYou"
      description="Скачай приложение GrabYou — доступно в Telegram, VK Mini Apps и как APK для Android"
    >
      <main className={styles.page}>

        <div className={styles.bgGlow} aria-hidden="true" />

        <div className="container">
          <div className={styles.hero}>
            <img src={logoImg} alt="GrabYou" className={styles.logo} />
            <Heading as="h1" className={styles.title}>
              Открой GrabYou<br />прямо сейчас
            </Heading>
            <p className={styles.subtitle}>
              Работает на любом устройстве — iPhone, Android, компьютер.
              Выбери удобный способ.
            </p>
          </div>

          {/* Универсальные */}
          <div className={styles.sectionLabel}>
            <span className={styles.sectionBadge}>iPhone · Android · Компьютер</span>
            <p className={styles.sectionDesc}>Открывается в браузере или мессенджере — без установки</p>
          </div>

          <div className={styles.cardsGrid}>
            <Link
              href="https://t.me/GrabYou_bot"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardIcon} data-color="telegram">
                <IconTelegram />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>Telegram</div>
                <div className={styles.cardSub}>@GrabYou_bot — открыть в Telegram</div>
              </div>
              <div className={styles.cardArrow}>→</div>
            </Link>

            <Link
              href="https://vk.com/app54610417"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardIcon} data-color="vk">
                <IconVK />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>VK Mini App</div>
                <div className={styles.cardSub}>Открыть в ВКонтакте</div>
              </div>
              <div className={styles.cardArrow}>→</div>
            </Link>
          </div>

          {/* Android APK */}
          <div className={styles.sectionLabel} style={{ marginTop: '2.5rem' }}>
            <span className={styles.sectionBadge} data-platform="android">Только Android</span>
            <p className={styles.sectionDesc}>Установи нативное приложение прямо на телефон</p>
          </div>

          <div className={styles.cardsGrid}>
            <a
              href="/files/GrabYou.apk"
              download="GrabYou.apk"
              className={styles.card}
            >
              <div className={styles.cardIcon} data-color="android">
                <IconDownload />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>Скачать APK</div>
                <div className={styles.cardSub}>Установить напрямую на Android</div>
              </div>
              <div className={styles.cardArrow}>↓</div>
            </a>

            <div className={`${styles.card} ${styles.cardDisabled}`}>
              <div className={styles.cardIcon} data-color="rustore">
                <IconSoon />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>RuStore</div>
                <div className={styles.cardSub}>Скоро появится в магазине</div>
              </div>
              <span className={styles.soonBadge}>Скоро</span>
            </div>
          </div>

          {/* Подсказка APK */}
          <div className={styles.apkHint}>
            <strong>Как установить APK:</strong> скачайте файл → откройте → разрешите установку из неизвестных источников в настройках → установите
          </div>

          <div className={styles.footer}>
            <Link to="/" className={styles.backLink}>← Вернуться на главную</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
