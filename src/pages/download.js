import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './download.module.css';

function IconTelegram() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.613c-.152.676-.548.84-1.112.522l-3.07-2.262-1.482 1.427c-.164.164-.302.302-.618.302l.22-3.12 5.676-5.127c.247-.22-.054-.342-.384-.122L7.26 14.663l-3.02-.944c-.657-.206-.67-.657.137-.973l11.804-4.552c.547-.2 1.026.122.88.973-.013.082-.044.17-.098.28l-.4-.199z"/>
    </svg>
  );
}
function IconVK() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.713-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.566c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.029 11.44 4.47 9.289 4.47 8.883c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V11.17c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.49-.085.745-.576.745z"/>
    </svg>
  );
}
function IconAPK() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}
function IconRuStore() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="rsGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7B6FFF"/>
          <stop offset="100%" stopColor="#4E43D6"/>
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#rsGrad)"/>
      <path d="M9 8h8.2C19.9 8 22 10.1 22 12.8c0 1.8-1 3.4-2.4 4.2l3 6H19l-2.7-5.5H12v5.5H9V8zm3 2.5v4.5h5c1.2 0 2.2-1 2.2-2.25S18.2 10.5 17 10.5H12z" fill="white"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

const universalOptions = [
  {
    Icon: IconTelegram,
    title: 'Telegram',
    sub: '@GrabYou_bot',
    desc: 'Открыть прямо в мессенджере',
    href: 'https://t.me/GrabYou_bot',
    color: 'telegram',
    external: true,
    badge: 'быстрее всего',
    arrow: '→',
  },
  {
    Icon: IconVK,
    title: 'VK Mini App',
    sub: 'ВКонтакте',
    desc: 'Запустить в социальной сети',
    href: 'https://vk.com/app54610417',
    color: 'vk',
    external: true,
    arrow: '→',
  },
];

const androidOptions = [
  {
    Icon: IconAPK,
    title: 'Скачать APK',
    sub: 'Android 6.0+',
    desc: 'Установить напрямую на телефон',
    href: '/files/GrabYou.apk',
    color: 'android',
    download: 'GrabYou.apk',
    arrow: '↓',
  },
  {
    Icon: IconRuStore,
    title: 'RuStore',
    sub: 'Магазин приложений',
    desc: 'Официальный российский магазин приложений',
    href: 'https://www.rustore.ru/catalog/app/com.grabyou.app',
    color: 'rustore',
    external: true,
  },
];

function OptionCard({ opt }) {
  const inner = (
    <>
      {opt.badge && <span className={styles.optBadge}>{opt.badge}</span>}
      <div className={styles.optWatermark} aria-hidden="true"><opt.Icon /></div>
      <div className={styles.optIcon} data-color={opt.color}>
        <opt.Icon />
      </div>
      <div className={styles.optBody}>
        <div className={styles.optTitle}>{opt.title}</div>
        <div className={styles.optSub}>{opt.sub}</div>
        <div className={styles.optDesc}>{opt.desc}</div>
      </div>
      {opt.soon
        ? <span className={styles.soonPill}>Скоро</span>
        : <span className={styles.optArrow}><IconArrow /></span>
      }
    </>
  );

  if (opt.soon) {
    return <div className={`${styles.optCard} ${styles.optCardDisabled}`}>{inner}</div>;
  }
  if (opt.download) {
    return <a href={opt.href} download={opt.download} className={styles.optCard}>{inner}</a>;
  }
  return (
    <Link href={opt.href} target="_blank" rel="noopener noreferrer" className={styles.optCard}>
      {inner}
    </Link>
  );
}

export default function DownloadPage() {
  const logoImg = useBaseUrl('/img/grabyouph.png');

  return (
    <Layout title="Скачать GrabYou" description="Скачай приложение GrabYou — доступно в Telegram, VK Mini Apps и как APK для Android">
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
              Работает на любом устройстве — без регистрации, без лишних шагов.
              Просто выбери удобный способ.
            </p>
            <div className={styles.heroPills}>
              <span className={styles.heroPill}><IconCheck /> iPhone</span>
              <span className={styles.heroPill}><IconCheck /> Android</span>
              <span className={styles.heroPill}><IconCheck /> Компьютер</span>
            </div>
          </div>

          {/* ─── УНИВЕРСАЛЬНЫЕ ─── */}
          <div className={styles.group}>
            <div className={styles.groupHeader}>
              <span className={styles.groupLabel}>Без установки</span>
              <span className={styles.groupSub}>Открывается прямо в приложении или браузере</span>
            </div>
            <div className={styles.optGrid}>
              {universalOptions.map(opt => <OptionCard key={opt.title} opt={opt} />)}
            </div>
          </div>

          {/* ─── ANDROID ─── */}
          <div className={styles.group}>
            <div className={styles.groupHeader}>
              <span className={styles.groupLabel} data-android>Нативное приложение · Android</span>
              <span className={styles.groupSub}>Полная версия с push-уведомлениями</span>
            </div>
            <div className={styles.optGrid}>
              {androidOptions.map(opt => <OptionCard key={opt.title} opt={opt} />)}
            </div>
          </div>

          {/* ─── APK HINT ─── */}
          <div className={styles.hint}>
            <span className={styles.hintIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </span>
            <span>
              <strong>Как установить APK:</strong> скачайте файл → откройте → в настройках разрешите установку из неизвестных источников → установите
            </span>
          </div>

          <div className={styles.back}>
            <Link to="/" className={styles.backLink}>← На главную</Link>
          </div>

        </div>
      </main>
    </Layout>
  );
}
