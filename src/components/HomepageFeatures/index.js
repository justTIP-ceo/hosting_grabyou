import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function SectionHeading({eyebrow, title, subtitle, centered = false}) {
  return (
    <div className={centered ? styles.sectionHeadingCentered : styles.sectionHeading}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <Heading as="h2" className={styles.sectionTitle}>
        {title}
      </Heading>
      {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
    </div>
  );
}

export default function HomepageFeatures() {
  const aiPicImg = useBaseUrl('/img/grabyou/ai_pic.png');
  const adDescriptionImg = useBaseUrl('/img/grabyou/ad_description.png');
  const magazineProfileImg = useBaseUrl('/img/grabyou/magazine_profile.png');
  const myOrderImg = useBaseUrl('/img/grabyou/my_order.png');
  const newAdImg = useBaseUrl('/img/grabyou/new_ad.png');
  const offerImg = useBaseUrl('/img/grabyou/offer-screen.png');
  const ordersImg = useBaseUrl('/img/grabyou/orders-screen.png');
  const paymentImg = useBaseUrl('/img/grabyou/payment-screen.png');
  const postedAdImg = useBaseUrl('/img/grabyou/posted_ad.png');
  const profileImg = useBaseUrl('/img/grabyou/profile-screen.png');
  const promotionsNearbyImg = useBaseUrl('/img/grabyou/promotions_nearby.png');
  const qrScannerImg = useBaseUrl('/img/grabyou/qr_scanner.png');
  const qrScreenImg = useBaseUrl('/img/grabyou/qr-screen.png');

  const featureList = [
    {
      title: 'Открыл — и сразу видно, что рядом',
      description:
        'Никакого бесконечного скролла. Только живые предложения поблизости прямо сейчас: кофе, выпечка, еда, цветы — со скидкой до конца дня.',
      image: promotionsNearbyImg,
      imageAlt: 'Экран подборки локальных предложений GrabYou',
    },
    {
      title: 'Дешевле — не значит хуже',
      description:
        'Свежий круассан из пекарни за углом, букет от цветочного, десерт из кафе — просто их нужно продать сегодня. Ты выигрываешь оба раза: и по цене, и по качеству.',
      image: adDescriptionImg,
      imageAlt: 'Экран с описанием предложения GrabYou',
    },
    {
      title: 'Оплата — 20 секунд',
      description:
        'Нажал, оплатил, получил подтверждение. Деньги заморожены до момента получения — никакого риска. Карту можно сохранить, чтобы в следующий раз было ещё быстрее.',
      image: paymentImg,
      imageAlt: 'Экран оплаты в GrabYou',
    },
    {
      title: 'Пришёл, показал QR — ушёл с покупкой',
      description:
        'Никаких звонков продавцу, никакого «подождите секунду». Показал QR — продавец сканирует — забираешь. Весь процесс занимает меньше минуты.',
      image: qrScreenImg,
      imageAlt: 'Экран получения заказа по QR-коду',
    },
  ];

  const audienceList = [
    {
      title: 'Для тебя',
      points: [
        'Экономишь на том, что купил бы всё равно',
        'Находишь крутые предложения за 30 секунд',
        'Платишь картой — без наличных и сдачи',
        'Забираешь без очереди и лишних разговоров',
      ],
      image: profileImg,
      imageAlt: 'Экран профиля пользователя GrabYou',
    },
    {
      title: 'Для бизнеса рядом',
      points: [
        'Продаёт остатки — вместо того чтобы выбрасывать',
        'Получает живые деньги в тот же день',
        'Находит новых покупателей из соседних домов',
        'Публикует предложение за 2 минуты',
      ],
      image: magazineProfileImg,
      imageAlt: 'Экран профиля магазина в GrabYou',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Увидел — влюбился — открыл',
      description:
        'Лента показывает только живые предложения рядом. Фото, цена, сколько осталось штук и до которого часа. Никаких сюрпризов — всё честно с первого экрана.',
      image: offerImg,
      imageAlt: 'Экран карточки предложения GrabYou',
    },
    {
      number: '02',
      title: 'Нажал — оплатил — всё',
      description:
        'Буквально 20 секунд. Твои деньги заморожены — не у продавца, а в защищённом резерве. Спишутся только когда заберёшь. Риска ноль.',
      image: paymentImg,
      imageAlt: 'Экран оплаты в GrabYou',
    },
    {
      number: '03',
      title: 'Зашёл — показал QR — ушёл довольный',
      description:
        'Продавец сканирует твой QR прямо в своём приложении. Секунда — и покупка у тебя в руках. Никаких «одну минуту», никакой суеты.',
      image: qrScannerImg,
      imageAlt: 'Экран сканирования QR-кода в GrabYou',
    },
  ];

const gallery = [
  {
    title: 'Лента живых предложений рядом',
    description: 'Только актуальное — с ценой, временем действия и расстоянием. Устаревшее не показываем.',
    image: promotionsNearbyImg,
    imageAlt: 'Экран локальных акций GrabYou',
  },
  {
    title: 'Карточка — как меню в ресторане',
    description: 'Большое фото, цена, описание, адрес и карта. Всё что нужно чтобы решиться — уже здесь.',
    image: adDescriptionImg,
    imageAlt: 'Экран описания предложения GrabYou',
  },
  {
    title: 'Твои заказы всегда под рукой',
    description: 'Активные, полученные, история — и QR-код каждого заказа в одном касании.',
    image: myOrderImg,
    imageAlt: 'Экран моего заказа GrabYou',
  },
  {
    title: 'Бизнес публикует — ты находишь',
    description: 'Пока продавец создаёт объявление за 2 минуты — покупатели поблизости уже видят предложение.',
    image: newAdImg,
    imageAlt: 'Экран создания нового объявления GrabYou',
  },
];

  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                Живые предложения рядом с тобой — прямо сейчас
              </div>

              <Heading as="h1" className={styles.heroTitle}>
                Кофе, еда, цветы — дешевле. Здесь. Сейчас.
              </Heading>

              <p className={styles.heroSubtitle}>
                Местные кофейни, пекарни и магазины каждый день делают
                специальные предложения по сниженной цене — на ограниченное время.
                GrabYou собирает их в одном месте и показывает тебе прямо сейчас.
              </p>

              <ul className={styles.heroList}>
                <li>свежие предложения каждый день — всегда что-то интересное</li>
                <li>цена ниже — потому что предложение срочное и ограниченное</li>
                <li>оплатил — пришёл — забрал. Без звонков и очередей</li>
              </ul>

              <div className={styles.heroButtons}>
                <Link className="button button--primary button--lg" to="#how-it-works">
                  Как это работает
                </Link>
                <Link className="button button--secondary button--lg" to="#features">
                  Что внутри
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <img
                src={promotionsNearbyImg}
                alt="Главный экран с акциями поблизости GrabYou"
                className={styles.heroMainShot}
                loading="lazy"
              />
              <img
                src={offerImg}
                alt="Экран карточки предложения GrabYou"
                className={styles.heroFloatingTop}
                loading="lazy"
              />
              <img
                src={qrScannerImg}
                alt="Экран QR-сканера GrabYou"
                className={styles.heroFloatingBottom}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="features">
        <div className="container">
          <SectionHeading
            eyebrow="Почему GrabYou"
            title="Специальные предложения от магазинов рядом — только для тебя"
            subtitle="Локальный бизнес каждый день делает ограниченные предложения по особой цене. GrabYou собирает их все в одном приложении — так ты всегда в курсе, что интересного есть поблизости."
            centered
          />

          <div className={styles.featureGrid}>
            {featureList.map((item) => (
              <div key={item.title} className={styles.infoCard}>
                <Heading as="h3" className={styles.cardTitle}>
                  {item.title}
                </Heading>
                <p className={styles.cardText}>{item.description}</p>

                <div className={styles.stepImageWrap}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className={styles.stepImage}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="how-it-works">
        <div className="container">
          <SectionHeading
            eyebrow="Как это работает"
            title="Три шага. Меньше минуты. Покупка в руках."
            subtitle="Никаких лишних экранов, звонков менеджерам или ожидания подтверждений. Просто открыл, оплатил, забрал."
          />

          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <Heading as="h3" className={styles.cardTitle}>
                  {step.title}
                </Heading>
                <p className={styles.cardText}>{step.description}</p>
                <div className={styles.stepImageWrap}>
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className={styles.stepImage}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="Приложение"
            title="Выглядит просто — потому что так и задумано"
            subtitle="Никаких перегруженных меню и запутанных шагов. Всё интуитивно с первого взгляда."
          />

          <div className={styles.galleryGrid}>
            {gallery.map((item) => (
              <div key={item.title} className={styles.shotCard}>
                <div className={styles.shotText}>
                  <Heading as="h3" className={styles.cardTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.cardText}>{item.description}</p>
                </div>

                <div className={styles.shotImageWrap}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className={styles.shotImage}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.aiCard}>
            <div className={styles.aiContent}>
              <div className={styles.eyebrow}>GrabAI — встроенный ИИ-помощник</div>
              <Heading as="h2" className={styles.aiTitle}>
                Просто скажи что хочешь — ИИ найдёт за тебя
              </Heading>
              <p className={styles.aiText}>
                Не нужно листать категории и вводить точные запросы. Напиши как
                есть: «хочу что-нибудь к чаю», «что-то вкусное рядом с метро»,
                «букет подруге вечером» — GrabAI понимает живую речь и сам
                находит подходящее рядом с тобой.
              </p>
              <ul className={styles.aiList}>
                <li>Понимает как человек — без сухих поисковых запросов</li>
                <li>Ищет только среди реальных предложений поблизости</li>
                <li>Отвечает мгновенно — на русском языке</li>
              </ul>
            </div>
            <div className={styles.aiVisual}>
              <img
                src={aiPicImg}
                alt="GrabAI — искусственный интеллект GrabYou"
                className={styles.aiImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.finalCard}>
            <div className={styles.eyebrow}>Скоро запуск</div>
            <Heading as="h2" className={styles.finalTitle}>
              Будь первым, кто узнает — и первым, кто сохранит
            </Heading>
            <p className={styles.finalText}>
              GrabYou запускается. Подпишись на Telegram-канал — узнаешь о старте
              раньше всех, увидишь первые предложения в своём районе и поможешь
              сделать продукт лучше. Нас уже ждут.
            </p>
            <div className={styles.finalButtons}>
              <Link
                className="button button--primary button--lg"
                href="https://t.me/GrabYouOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram-канал GrabYou
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}