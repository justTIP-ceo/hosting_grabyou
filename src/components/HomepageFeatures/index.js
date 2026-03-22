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
      title: 'Локальные предложения поблизости',
      description:
        'Пользователь видит актуальные предложения рядом с собой и может быстро выбрать то, что удобно прямо сейчас.',
      image: promotionsNearbyImg,
      imageAlt: 'Экран подборки локальных предложений GrabYou',
    },
    {
      title: 'Специальные цены',
      description:
        'Товары с ограниченным окном продажи превращаются в выгодные предложения вместо списания.',
      image: adDescriptionImg,
      imageAlt: 'Экран с описанием предложения GrabYou',
    },
    {
      title: 'Быстрое бронирование и оплата',
      description:
        'Минимум шагов: выбрать предложение, оплатить, получить подтверждение и не тратить время на лишние действия.',
      image: paymentImg,
      imageAlt: 'Экран оплаты в GrabYou',
    },
    {
      title: 'Получение без переписки и звонков',
      description:
        'Всё максимально просто: пользователь приходит в точку и показывает подтверждение или QR-код.',
      image: qrScreenImg,
      imageAlt: 'Экран получения заказа по QR-коду',
    },
  ];

  const audienceList = [
    {
      title: 'Для пользователей',
      points: [
        'Покупать выгодно и рядом с собой',
        'Быстро находить интересные предложения поблизости',
        'Бронировать и оплачивать без лишних действий',
        'Получать заказ понятно и удобно',
      ],
      image: profileImg,
      imageAlt: 'Экран профиля пользователя GrabYou',
    },
    {
      title: 'Для бизнеса',
      points: [
        'Сокращать списания товаров',
        'Получать дополнительную выручку',
        'Привлекать новых клиентов рядом',
        'Быстро публиковать срочные предложения',
      ],
      image: magazineProfileImg,
      imageAlt: 'Экран профиля магазина в GrabYou',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Откройте предложение и изучите детали',
      description:
        'Пользователь переходит в карточку, смотрит описание, цену, условия получения и принимает решение о покупке.',
      image: offerImg,
      imageAlt: 'Экран карточки предложения GrabYou',
    },
    {
      number: '02',
      title: 'Оплатите за несколько шагов',
      description:
        'После выбора предложения пользователь быстро проходит оплату и сразу получает подтверждение заказа.',
      image: paymentImg,
      imageAlt: 'Экран оплаты в GrabYou',
    },
    {
      number: '03',
      title: 'Покажите QR и заберите заказ',
      description:
        'На точке выдачи достаточно показать QR-код или подтверждение — без переписки, звонков и долгого ожидания.',
      image: qrScannerImg,
      imageAlt: 'Экран сканирования QR-кода в GrabYou',
    },
  ];

const gallery = [
  {
    title: 'Подборка акций поблизости',
    description: 'Главный экран с актуальными предложениями рядом с пользователем.',
    image: promotionsNearbyImg,
    imageAlt: 'Экран локальных акций GrabYou',
  },
  {
    title: 'Детальное описание предложения',
    description: 'Понятная карточка с ценой, описанием и всей важной информацией.',
    image: adDescriptionImg,
    imageAlt: 'Экран описания предложения GrabYou',
  },
  {
    title: 'Мои заказы',
    description: 'Пользователь может отслеживать оформленные заказы в отдельном разделе.',
    image: myOrderImg,
    imageAlt: 'Экран моего заказа GrabYou',
  },
  {
    title: 'Создание нового объявления',
    description: 'Бизнес может быстро добавить новое срочное предложение в приложение.',
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
                Маркетплейс срочных предложений от локального бизнеса
              </div>

              <Heading as="h1" className={styles.heroTitle}>
                GrabYou помогает быстро находить выгодные предложения рядом с вами
              </Heading>

              <p className={styles.heroSubtitle}>
                Кофейни, пекарни, магазины готовой еды, цветочные точки и другие
                локальные бизнесы каждый день теряют выручку из-за товаров с
                ограниченным временем продажи. GrabYou превращает эти товары в
                доступные и понятные предложения для пользователей поблизости.
              </p>

              <ul className={styles.heroList}>
                <li>предложения рядом с пользователем</li>
                <li>специальные цены на товары с ограниченным окном покупки</li>
                <li>быстрое бронирование, оплата и получение</li>
              </ul>

              <div className={styles.heroButtons}>
                <Link className="button button--primary button--lg" to="#how-it-works">
                  Как это работает
                </Link>
                <Link className="button button--secondary button--lg" to="#for-whom">
                  Для кого это
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

      <section className={styles.section}>
        <div className="container">
          <div className={styles.problemCard}>
            <div>
              <div className={styles.eyebrow}>Зачем нужен GrabYou</div>
              <Heading as="h2" className={styles.problemTitle}>
                Хорошие товары не должны списываться только потому, что время их продажи ограничено
              </Heading>
            </div>

            <div className={styles.problemText}>
              <p>
                Каждый день локальный бизнес сталкивается с одной и той же
                проблемой: качественные товары остаются невостребованными просто
                потому, что у них короткое окно продажи.
              </p>
              <p>
                GrabYou решает это просто: превращает такие товары в срочные
                предложения рядом с пользователем, чтобы бизнес сокращал списания,
                а покупатель получал выгодную покупку быстро и удобно.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="Что будет в приложении"
            title="Одна понятная логика вместо сложного сценария покупки"
            subtitle="GrabYou объединяет выгодные локальные предложения, специальные цены, быстрое бронирование и удобное получение заказа в одном понятном приложении."
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
            title="Путь пользователя в трёх шагах"
            subtitle="Пользователь открывает карточку предложения, оплачивает его за несколько шагов и получает заказ на точке выдачи без лишней переписки и ожидания."
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

      <section className={styles.section} id="for-whom">
        <div className="container">
          <SectionHeading
            eyebrow="Для кого продукт"
            title="GrabYou полезен и пользователю, и локальному бизнесу"
            subtitle="Сервис помогает покупателям находить выгодные предложения поблизости, а бизнесу — сокращать списания, привлекать клиентов и получать дополнительную выручку."
            centered
          />

          <div className={styles.audienceGrid}>
            {audienceList.map((item) => (
              <div key={item.title} className={styles.infoCard}>
                <Heading as="h3" className={styles.cardTitle}>
                  {item.title}
                </Heading>

                <ul className={styles.pointList}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

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

      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="Интерфейс"
            title="Пользовательские и бизнес-сценарии в одном продукте"
            subtitle="В приложении есть как клиентский путь — от выбора предложения до заказа, так и инструменты для бизнеса: создание, публикация и управление срочными объявлениями."
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
          <div className={styles.finalCard}>
            <div className={styles.eyebrow}>Мы только начинаем</div>
            <Heading as="h2" className={styles.finalTitle}>
              Здесь мы будем рассказывать о запуске проекта, делиться новостями и
              показывать, как развивается продукт
            </Heading>
            <p className={styles.finalText}>
              GrabYou постепенно меняет подход к локальным покупкам: помогает
              бизнесу сокращать списания, а пользователям — покупать выгодно,
              быстро и рядом с собой.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}