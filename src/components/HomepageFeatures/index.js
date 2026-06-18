import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/* ─── SVG иконки ─── */
function IconCoffee() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>
    </svg>
  );
}
function IconFood() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>
  );
}
function IconFlower() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" opacity=".4"/><path d="M12 14a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" opacity=".4"/><path d="M2 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z" opacity=".4"/><path d="M14 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z" opacity=".4"/>
    </svg>
  );
}
function IconBread() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/>
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function IconCard() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}

const tickerItems = [
  'ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ РЯДОМ',
  'GRABYOU',
  'КОФЕ · ЕДА · ЦВЕТЫ · ВЫПЕЧКА',
  'ГРАББИРУЙ ЛУЧШЕЕ',
  'СРОЧНЫЕ ПРЕДЛОЖЕНИЯ',
  'ОПЛАТА ЗА 20 СЕКУНД',
  'БЕРИ ПОКА ЕСТЬ',
  'GRABYOU',
  'ЛОКАЛЬНЫЙ БИЗНЕС РЯДОМ',
  'СПЕЦИАЛЬНАЯ ЦЕНА',
];

const moments = [
  {
    time: '17:45',
    Icon: IconCoffee,
    text: 'Идёшь домой. Кофейня за углом — последние напитки дня по особой цене. Через час закроется.',
    tag: 'кофе и выпечка',
  },
  {
    time: '13:10',
    Icon: IconFood,
    text: 'Обед в офисе. В 3 минутах ходьбы — кафе с горячим бизнес-ланчем дешевле, чем обычно.',
    tag: 'еда рядом',
  },
  {
    time: '19:00',
    Icon: IconFlower,
    text: 'Вспомнил про день рождения. В соседнем доме — цветочная с букетами по специальной цене.',
    tag: 'цветы',
  },
  {
    time: '10:30',
    Icon: IconBread,
    text: 'По дороге на работу. Пекарня рядом с метро — свежая выпечка прямо с утра.',
    tag: 'утренние предложения',
  },
];

const steps = [
  {
    number: '01',
    Icon: IconPin,
    title: 'Открыл — сразу видно что рядом',
    description:
      'Лента показывает живые предложения поблизости прямо сейчас. Фото, цена, адрес и сколько времени осталось.',
  },
  {
    number: '02',
    Icon: IconCard,
    title: 'Нажал — оплатил — готово',
    description:
      'Буквально 20 секунд. Деньги замораживаются в защищённом резерве и спишутся только когда заберёшь. Риска ноль.',
  },
  {
    number: '03',
    Icon: IconCheck,
    title: 'Пришёл — показал QR — ушёл',
    description:
      'Продавец сканирует твой QR за секунду. Никаких звонков, «подождите минуту» и лишних слов.',
  },
];

export default function HomepageFeatures() {
  const aiPicImg = useBaseUrl('/img/grabyou/ai_pic.png');
  const offerImg = useBaseUrl('/img/grabyou/offer-screen.png');
  const paymentImg = useBaseUrl('/img/grabyou/payment-screen.png');
  const promotionsNearbyImg = useBaseUrl('/img/grabyou/promotions_nearby.png');
  const qrScannerImg = useBaseUrl('/img/grabyou/qr_scanner.png');

  const repeated = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className={styles.page}>

      {/* ─── HERO ─── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                Срочные предложения от бизнеса рядом
              </div>

              <Heading as="h1" className={styles.heroTitle}>
                Выгодные находки в твоём районе — прямо сейчас
              </Heading>

              <p className={styles.heroSubtitle}>
                Кофейни, пекарни, цветочные и другие местные магазины каждый
                день делают специальные предложения на ограниченное время.
                GrabYou показывает их тебе — до того, как они закончатся.
              </p>

              <ul className={styles.heroList}>
                <li>предложения рядом — видно расстояние и время до конца</li>
                <li>цена ниже — потому что предложение срочное</li>
                <li>оплатил в приложении — пришёл и забрал</li>
              </ul>

              <div className={styles.heroButtons}>
                <Link className="button button--primary button--lg" to="#how-it-works">
                  Как это работает
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  href="https://t.me/GrabYouOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Следить за запуском
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <img
                src={promotionsNearbyImg}
                alt="Главный экран GrabYou"
                className={styles.heroMainShot}
                loading="lazy"
              />
              <img
                src={offerImg}
                alt="Карточка предложения GrabYou"
                className={styles.heroFloatingTop}
                loading="lazy"
              />
              <img
                src={qrScannerImg}
                alt="QR-сканер GrabYou"
                className={styles.heroFloatingBottom}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {repeated.map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              {item}
              <span className={styles.tickerDot} />
            </span>
          ))}
        </div>
      </div>

      {/* ─── МОМЕНТЫ ─── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.momentsHeading}>
            <div className={styles.eyebrow}>Узнаёшь себя?</div>
            <Heading as="h2" className={styles.sectionTitle}>
              GrabYou — это про обычные моменты,<br />в которых можно сэкономить
            </Heading>
          </div>

          <div className={styles.momentsGrid}>
            {moments.map((m) => (
              <div key={m.time} className={styles.momentCard}>
                <div className={styles.momentTop}>
                  <div className={styles.momentIcon}><m.Icon /></div>
                  <span className={styles.momentTime}>{m.time}</span>
                </div>
                <p className={styles.momentText}>{m.text}</p>
                <span className={styles.momentTag}>{m.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── КАК РАБОТАЕТ ─── */}
      <section className={styles.section} id="how-it-works">
        <div className="container">
          <div className={styles.sectionHeading}>
            <div className={styles.eyebrow}>Как это работает</div>
            <Heading as="h2" className={styles.sectionTitle}>
              Три шага. Меньше минуты.
            </Heading>
            <p className={styles.sectionSubtitle}>
              Никаких звонков менеджерам, подтверждений по почте и ожидания ответа.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepTop}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepIconWrap}><step.Icon /></div>
                </div>
                <Heading as="h3" className={styles.cardTitle}>
                  {step.title}
                </Heading>
                <p className={styles.cardText}>{step.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.stepsScreenshots}>
            <div className={styles.screenshotItem}>
              <img src={offerImg} alt="Карточка предложения" className={styles.screenshotImg} loading="lazy" />
            </div>
            <div className={styles.screenshotItem}>
              <img src={paymentImg} alt="Оплата" className={styles.screenshotImg} loading="lazy" />
            </div>
            <div className={styles.screenshotItem}>
              <img src={qrScannerImg} alt="QR-получение" className={styles.screenshotImg} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── GRABAI ─── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.aiCard}>
            <div className={styles.aiContent}>
              <div className={styles.eyebrow}>GrabAI — встроенный ИИ</div>
              <Heading as="h2" className={styles.aiTitle}>
                Не знаешь что хочешь? Просто напиши — ИИ разберётся
              </Heading>
              <p className={styles.aiText}>
                Не нужно листать категории и придумывать точный запрос. Напиши
                как есть — GrabAI понимает живую речь и сам находит подходящее рядом.
              </p>
              <div className={styles.aiExamples}>
                <div className={styles.aiExample}>«хочу что-нибудь к чаю»</div>
                <div className={styles.aiExample}>«что-то вкусное рядом с метро»</div>
                <div className={styles.aiExample}>«букет подруге вечером»</div>
                <div className={styles.aiExample}>«обед до 200 рублей»</div>
              </div>
            </div>
            <div className={styles.aiVisual}>
              <img
                src={aiPicImg}
                alt="GrabAI"
                className={styles.aiImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.finalCard}>
            <div className={styles.eyebrow}>Скоро запуск</div>
            <Heading as="h2" className={styles.finalTitle}>
              Будь первым — узнай о старте раньше всех
            </Heading>
            <p className={styles.finalText}>
              Подпишись на Telegram-канал GrabYou. Узнаешь когда запустимся,
              увидишь первые предложения в своём районе и получишь доступ
              раньше остальных.
            </p>
            <div className={styles.finalButtons}>
              <Link
                className="button button--primary button--lg"
                href="https://t.me/GrabYouOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Подписаться в Telegram
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
