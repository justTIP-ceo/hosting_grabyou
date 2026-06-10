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
      title: 'Выгодные предложения рядом с вами',
      description:
        'Открываете приложение — и сразу видите, что сейчас продаётся со скидкой в вашем районе. Кофе, выпечка, еда, цветы — всё здесь и сейчас.',
      image: promotionsNearbyImg,
      imageAlt: 'Экран подборки локальных предложений GrabYou',
    },
    {
      title: 'Цены ниже — не потому что плохо, а потому что срочно',
      description:
        'Бизнес хочет продать сегодня, а не выбросить завтра. Поэтому вы получаете хорошее по честной цене — просто вовремя.',
      image: adDescriptionImg,
      imageAlt: 'Экран с описанием предложения GrabYou',
    },
    {
      title: 'Оплатили — и всё',
      description:
        'Никаких звонков, уточнений и ожиданий. Выбрали, оплатили, получили подтверждение — и просто идёте забирать.',
      image: paymentImg,
      imageAlt: 'Экран оплаты в GrabYou',
    },
    {
      title: 'Забрать — одно движение',
      description:
        'Показали QR-код на кассе — и готово. Никакой переписки, никакого «подождите, я уточню». Всё уже оплачено и ждёт вас.',
      image: qrScreenImg,
      imageAlt: 'Экран получения заказа по QR-коду',
    },
  ];

  const audienceList = [
    {
      title: 'Для вас — как покупателя',
      points: [
        'Экономите деньги на том, что и так купили бы',
        'Находите интересное рядом — без долгого поиска',
        'Платите один раз и просто идёте забирать',
        'Никакой переписки, очередей и звонков',
      ],
      image: profileImg,
      imageAlt: 'Экран профиля пользователя GrabYou',
    },
    {
      title: 'Для локального бизнеса',
      points: [
        'Продаёте то, что иначе ушло бы в списание',
        'Получаете живую выручку в тот же день',
        'Привлекаете новых клиентов из ближайшего окружения',
        'Публикуете предложение за пару минут',
      ],
      image: magazineProfileImg,
      imageAlt: 'Экран профиля магазина в GrabYou',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Нашли что-то интересное — открыли карточку',
      description:
        'Видите фото, цену, адрес и до какого времени действует предложение. Всё понятно с первого взгляда — никакого мелкого шрифта.',
      image: offerImg,
      imageAlt: 'Экран карточки предложения GrabYou',
    },
    {
      number: '02',
      title: 'Оплатили — за полминуты',
      description:
        'Нажали «Заказать», ввели карту или выбрали сохранённую. Деньги списываются только когда вы получаете заказ — до этого они в безопасном резерве.',
      image: paymentImg,
      imageAlt: 'Экран оплаты в GrabYou',
    },
    {
      number: '03',
      title: 'Пришли, показали QR — забрали',
      description:
        'Продавец сканирует ваш QR-код прямо в приложении. Секунда — и заказ у вас в руках. Никаких звонков, подтверждений и лишних слов.',
      image: qrScannerImg,
      imageAlt: 'Экран сканирования QR-кода в GrabYou',
    },
  ];

const gallery = [
  {
    title: 'Что сейчас рядом — сразу на экране',
    description: 'Открываете приложение и видите всё актуальное поблизости: с ценами, временем и адресом.',
    image: promotionsNearbyImg,
    imageAlt: 'Экран локальных акций GrabYou',
  },
  {
    title: 'Вся информация сразу — без вопросов',
    description: 'Фото, цена, описание, карта и время действия — в одной карточке. Решаете сразу.',
    image: adDescriptionImg,
    imageAlt: 'Экран описания предложения GrabYou',
  },
  {
    title: 'Все заказы — в одном месте',
    description: 'История покупок, QR-коды и статусы — всё хранится в приложении и доступно в любой момент.',
    image: myOrderImg,
    imageAlt: 'Экран моего заказа GrabYou',
  },
  {
    title: 'Для бизнеса: опубликовать за 2 минуты',
    description: 'Фото, цена, количество, срок — и предложение уже видят покупатели поблизости.',
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
                Выгодные предложения от местного бизнеса — прямо рядом с вами
              </div>

              <Heading as="h1" className={styles.heroTitle}>
                Хорошие вещи по честной цене — пока они ещё есть
              </Heading>

              <p className={styles.heroSubtitle}>
                Местные кофейни, пекарни, цветочные и другие магазины каждый день
                продают остатки дешевле — лишь бы не выбрасывать. GrabYou собирает
                такие предложения и показывает их вам раньше, чем они закончатся.
              </p>

              <ul className={styles.heroList}>
                <li>свежие предложения рядом — обновляются каждый день</li>
                <li>цены ниже обычного — без подвоха, просто срочно</li>
                <li>оплатили в приложении — пришли и забрали, всё</li>
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
              <div className={styles.eyebrow}>Почему это работает</div>
              <Heading as="h2" className={styles.problemTitle}>
                Каждый день хорошие товары выбрасывают — просто потому что не успели продать
              </Heading>
            </div>

            <div className={styles.problemText}>
              <p>
                Пекарня испекла лишние круассаны. Цветочный магазин не распродал
                букеты. Кафе приготовило больше готовых блюд, чем нужно. К концу
                дня всё это уходит в мусор — хотя вы бы с удовольствием взяли.
              </p>
              <p>
                GrabYou соединяет вас с такими предложениями в нужный момент.
                Бизнес получает реальные деньги вместо списания, а вы — качественный
                товар дешевле обычного. Просто и честно.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="Что вы получаете"
            title="Всё просто: нашли, оплатили, забрали"
            subtitle="Никаких сложных сценариев. GrabYou делает одно дело — помогает вам купить что-то выгодное рядом с вами, быстро и без лишних шагов."
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
            title="Три шага — и заказ у вас в руках"
            subtitle="Весь процесс занимает меньше минуты. Никаких регистраций на сторонних сайтах, никаких звонков менеджерам и никакого ожидания."
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
            eyebrow="Для кого"
            title="Выгодно для всех — и для вас, и для бизнеса рядом"
            subtitle="Покупатель экономит и получает удобство. Бизнес зарабатывает там, где раньше был только убыток. Все в плюсе."
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
            eyebrow="Приложение"
            title="Посмотрите, как это выглядит внутри"
            subtitle="Всё сделано так, чтобы вы разобрались с первого раза — без инструкций и подсказок."
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
              <div className={styles.eyebrow}>GrabAI — искусственный интеллект</div>
              <Heading as="h2" className={styles.aiTitle}>
                Просто напишите, что хотите — ИИ найдёт сам
              </Heading>
              <p className={styles.aiText}>
                Не знаете, как называется то, что ищёте? Не нужно. Напишите как
                есть: «хочу что-нибудь к чаю», «цветы на вечер», «обед рядом с
                работой» — и GrabAI сам подберёт подходящие предложения поблизости.
              </p>
              <ul className={styles.aiList}>
                <li>Понимает живой язык — без ключевых слов и точных запросов</li>
                <li>Ищет среди реальных предложений рядом с вами</li>
                <li>Работает на русском языке</li>
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
            <div className={styles.eyebrow}>Следите за нами</div>
            <Heading as="h2" className={styles.finalTitle}>
              GrabYou только запускается — присоединяйтесь первыми
            </Heading>
            <p className={styles.finalText}>
              Подпишитесь на наш Telegram-канал, чтобы узнать о запуске раньше
              всех, следить за новыми предложениями и видеть, как развивается
              продукт. Мы строим сервис, которым сами хотели бы пользоваться.
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