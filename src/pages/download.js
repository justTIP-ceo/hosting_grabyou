import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SpbMap from '@site/src/components/brand/SpbMap';
import {
  IconArrow,
  IconCheck,
  IconRuStore,
  IconTelegram,
  IconVK,
} from '@site/src/components/brand/icons';
import styles from './download.module.css';

const channels = [
  {
    key: 'rustore',
    href: 'https://www.rustore.ru/catalog/app/com.grabyou.app',
    kicker: 'RuStore · Android',
    title: 'Установи из RuStore',
    desc: 'Официальный магазин приложений. Полная версия GrabYou с push-уведомлениями и автообновлениями.',
    cta: 'Открыть в RuStore',
    badge: 'рекомендуем',
    Icon: IconRuStore,
    featured: true,
  },
  {
    key: 'telegram',
    href: 'https://t.me/GrabYou_bot',
    kicker: 'Без установки',
    title: 'Telegram',
    desc: '@GrabYou_bot — прямо в мессенджере, на любом устройстве',
    Icon: IconTelegram,
  },
  {
    key: 'vk',
    href: 'https://vk.com/app54610417',
    kicker: 'VK Mini App',
    title: 'ВКонтакте',
    desc: 'Запусти в соцсети — ничего не устанавливая',
    Icon: IconVK,
  },
];

export default function DownloadPage() {
  return (
    <Layout
      title="Скачать GrabYou"
      description="Скачай приложение GrabYou — доступно в RuStore, Telegram и VK Mini Apps">
      <main className={styles.page}>
        <div className={styles.map} aria-hidden="true">
          <SpbMap className={styles.mapSvg} />
        </div>
        <div className={styles.fade} aria-hidden="true" />

        <div className="container">
          <section className={styles.hero}>
            <img src={useBaseUrl('/img/brand/logo-icon.svg')} alt="" className={styles.mark} width="88" height="88" />
            <Heading as="h1" className={styles.title}>
              Открой GrabYou
            </Heading>
            <p className={styles.subtitle}>
              Работает на любом устройстве — без регистрации и лишних шагов.
              Просто выбери удобный способ.
            </p>
            <div className={styles.pills}>
              <span className={styles.pill}>
                <IconCheck size={15} /> iPhone
              </span>
              <span className={styles.pill}>
                <IconCheck size={15} /> Android
              </span>
              <span className={styles.pill}>
                <IconCheck size={15} /> Компьютер
              </span>
            </div>
          </section>

          <section className={styles.grid}>
            {channels.map(({key, href, kicker, title, desc, cta, badge, Icon, featured}) => (
              <Link
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}
                data-channel={key}>
                {badge && <span className={styles.badge}>{badge}</span>}
                <span className={styles.cardIcon}>
                  <Icon size={featured ? 44 : 30} />
                </span>
                <span className={styles.cardBody}>
                  <span className={styles.kicker}>{kicker}</span>
                  <span className={styles.cardTitle}>{title}</span>
                  <span className={styles.cardDesc}>{desc}</span>
                </span>
                <span className={styles.cardCta}>
                  {cta || 'Открыть'} <IconArrow size={18} />
                </span>
              </Link>
            ))}
          </section>

          <p className={styles.back}>
            <Link to="/" className={styles.backLink}>
              ← На главную
            </Link>
          </p>
        </div>
      </main>
    </Layout>
  );
}
