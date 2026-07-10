import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './download.module.css';

function IconTelegram() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.613c-.152.676-.548.84-1.112.522l-3.07-2.262-1.482 1.427c-.164.164-.302.302-.618.302l.22-3.12 5.676-5.127c.247-.22-.054-.342-.384-.122L7.26 14.663l-3.02-.944c-.657-.206-.67-.657.137-.973l11.804-4.552c.547-.2 1.026.122.88.973-.013.082-.044.17-.098.28l-.4-.199z"/>
    </svg>
  );
}
function IconVK() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.713-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.566c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.029 11.44 4.47 9.289 4.47 8.883c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V11.17c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.745-.576.745z"/>
    </svg>
  );
}
function IconRuStore({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="rsGrad2" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8A94FF"/>
          <stop offset="55%" stopColor="#5E5CE6"/>
          <stop offset="100%" stopColor="#4636C7"/>
        </linearGradient>
        <linearGradient id="rsShine" x1="0" y1="0" x2="32" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9.5" fill="url(#rsGrad2)"/>
      <rect width="32" height="16" rx="9.5" fill="url(#rsShine)"/>
      <path
        d="M11.4 23.5V10.8a2.3 2.3 0 0 1 2.3-2.3h3.1a5.2 5.2 0 0 1 1.6 10.15L21.9 23.5"
        stroke="#ffffff"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export default function DownloadPage() {
  const logoImg = useBaseUrl('/img/grabyouph.png');

  return (
    <Layout title="Скачать GrabYou" description="Скачай приложение GrabYou — доступно в Telegram, VK Mini Apps, RuStore и как APK для Android">
      <main className={styles.page}>

        <div className={styles.bgTop} aria-hidden="true" />
        <div className={styles.bgBottom} aria-hidden="true" />
        <span className={styles.ghostWord} aria-hidden="true">GRAB</span>

        <div className={styles.inner}>

          {/* ─── HERO ─── */}
          <div className={styles.hero}>
            <div className={styles.logoWrap}>
              <img src={logoImg} alt="GrabYou" className={styles.logo} />
              <div className={styles.logoGlow} aria-hidden="true" />
            </div>
            <Heading as="h1" className={styles.title}>
              Открой GrabYou
            </Heading>
            <p className={styles.subtitle}>
              Работает на любом устройстве — без регистрации и лишних шагов.
              Просто выбери удобный способ.
            </p>
            <div className={styles.heroPills}>
              <span className={styles.heroPill}><IconCheck /> iPhone</span>
              <span className={styles.heroPill}><IconCheck /> Android</span>
              <span className={styles.heroPill}><IconCheck /> Компьютер</span>
            </div>
          </div>

          {/* ─── БЕНТО ─── */}
          <div className={styles.bento}>

            {/* RuStore — главная карточка */}
            <Link
              href="https://www.rustore.ru/catalog/app/com.grabyou.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${styles.cardHero}`}
              data-color="rustore"
            >
              <span className={styles.cardBadge}>рекомендуем</span>
              <div className={styles.cardWatermark} aria-hidden="true"><IconRuStore size={170} /></div>
              <div className={styles.cardHeroLeft}>
                <div className={styles.cardIcon} data-color="rustore"><IconRuStore size={62} /></div>
                <div>
                  <div className={styles.cardKicker}>RuStore · Android</div>
                  <div className={styles.cardHeroTitle}>Установи из RuStore</div>
                  <div className={styles.cardDesc}>
                    Официальный магазин приложений. Полная версия GrabYou
                    с push-уведомлениями и автообновлениями.
                  </div>
                </div>
              </div>
              <span className={styles.cardCta}>
                Открыть в RuStore <IconArrow />
              </span>
            </Link>

            {/* Telegram */}
            <Link
              href="https://t.me/GrabYou_bot"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              data-color="telegram"
            >
              <div className={styles.cardWatermark} aria-hidden="true"><IconTelegram /></div>
              <div className={styles.cardIcon} data-color="telegram"><IconTelegram /></div>
              <div className={styles.cardBody}>
                <div className={styles.cardKicker}>Без установки</div>
                <div className={styles.cardTitle}>Telegram</div>
                <div className={styles.cardDesc}>@GrabYou_bot — прямо в мессенджере, на любом устройстве</div>
              </div>
              <span className={styles.cardArrow}><IconArrow /></span>
            </Link>

            {/* VK */}
            <Link
              href="https://vk.com/app54610417"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              data-color="vk"
            >
              <div className={styles.cardWatermark} aria-hidden="true"><IconVK /></div>
              <div className={styles.cardIcon} data-color="vk"><IconVK /></div>
              <div className={styles.cardBody}>
                <div className={styles.cardKicker}>VK Mini App</div>
                <div className={styles.cardTitle}>ВКонтакте</div>
                <div className={styles.cardDesc}>Запусти в соцсети — ничего не устанавливая</div>
              </div>
              <span className={styles.cardArrow}><IconArrow /></span>
            </Link>

          </div>

          <div className={styles.back}>
            <Link to="/" className={styles.backLink}>← На главную</Link>
          </div>

        </div>
      </main>
    </Layout>
  );
}
