import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const moments = [
  {
    time: '17:45',
    emoji: '☕',
    text: 'Идёшь домой. Кофейня за углом продаёт последние напитки дня по особой цене. Через час закроется.',
    tag: 'кофе и выпечка',
  },
  {
    time: '13:10',
    emoji: '🍱',
    text: 'Обед в офисе. В 3 минутах ходьбы — кафе с горячим бизнес-ланчем дешевле, чем обычно.',
    tag: 'еда рядом',
  },
  {
    time: '19:00',
    emoji: '💐',
    text: 'Вспомнил про день рождения. В соседнем доме — цветочная с букетами по специальной цене.',
    tag: 'цветы',
  },
  {
    time: '10:30',
    emoji: '🥐',
    text: 'Заходишь в приложение по дороге на работу. Пекарня рядом с метро — свежая выпечка утром.',
    tag: 'утренние предложения',
  },
];

const steps = [
  {
    number: '01',
    title: 'Открыл — сразу видно что рядом',
    description:
      'Лента показывает живые предложения поблизости прямо сейчас. Фото, цена, адрес и сколько времени осталось.',
    emoji: '📍',
  },
  {
    number: '02',
    title: 'Нажал — оплатил — готово',
    description:
      'Буквально 20 секунд. Деньги замораживаются в защищённом резерве и спишутся только когда заберёшь. Риска ноль.',
    emoji: '💳',
  },
  {
    number: '03',
    title: 'Пришёл — показал QR — ушёл',
    description:
      'Продавец сканирует твой QR за секунду. Никаких звонков, «подождите минуту» и лишних слов.',
    emoji: '✅',
  },
];

export default function HomepageFeatures() {
  const aiPicImg = useBaseUrl('/img/grabyou/ai_pic.png');
  const offerImg = useBaseUrl('/img/grabyou/offer-screen.png');
  const paymentImg = useBaseUrl('/img/grabyou/payment-screen.png');
  const promotionsNearbyImg = useBaseUrl('/img/grabyou/promotions_nearby.png');
  const qrScannerImg = useBaseUrl('/img/grabyou/qr_scanner.png');

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

      {/* ─── МОМЕНТЫ ─── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.momentsHeading}>
            <div className={styles.eyebrow}>Узнаёшь себя?</div>
            <Heading as="h2" className={styles.sectionTitle}>
              GrabYou — это про обычные моменты,<br/>в которых можно сэкономить
            </Heading>
          </div>

          <div className={styles.momentsGrid}>
            {moments.map((m) => (
              <div key={m.time} className={styles.momentCard}>
                <div className={styles.momentTop}>
                  <span className={styles.momentEmoji}>{m.emoji}</span>
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
                  <div className={styles.stepEmoji}>{step.emoji}</div>
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
                <div className={styles.aiExample}><span>«</span>хочу что-нибудь к чаю<span>»</span></div>
                <div className={styles.aiExample}><span>«</span>что-то вкусное рядом с метро<span>»</span></div>
                <div className={styles.aiExample}><span>«</span>букет подруге вечером<span>»</span></div>
                <div className={styles.aiExample}><span>«</span>обед до 200 рублей<span>»</span></div>
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
