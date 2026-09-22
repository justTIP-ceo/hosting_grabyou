import {useEffect, useRef, useState} from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SpbMap from '@site/src/components/brand/SpbMap';
import {
  IconBread,
  IconCard,
  IconCheck,
  IconClock,
  IconCoffee,
  IconFlower,
  IconFood,
  IconLeaf,
  IconMail,
  IconPin,
  IconQr,
  IconSparkle,
  IconStore,
  IconTelegram,
  IconZap,
} from '@site/src/components/brand/icons';
import styles from './styles.module.css';

/* ─── Появление блоков при скролле ─── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.revealed);
          obs.unobserve(el);
        }
      },
      {threshold: 0.12},
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({children, delay = 0, className = '', as: Tag = 'div'}) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`${styles.reveal} ${className}`} style={{transitionDelay: `${delay}ms`}}>
      {children}
    </Tag>
  );
}

/* ─── Полоса прогресса чтения ─── */
function ScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <div className={styles.progress} aria-hidden="true">
      <div ref={barRef} className={styles.progressBar} />
    </div>
  );
}

/* ─── Счётчик ─── */
function CountUp({to, prefix = '', suffix = '', duration = 1300}) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          setVal(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      {threshold: 0.4},
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/* ─── Данные ─── */
const tickerItems = [
  'СРОЧНЫЕ ПРЕДЛОЖЕНИЯ',
  'РЯДОМ С ВАМИ',
  'ВЫГОДНО',
  'БОГАТЫЙ АССОРТИМЕНТ',
  'БЫСТРО И ПРОСТО',
  'ЗАБРАЛ ЗА 20 СЕКУНД',
];

const stats = [
  {to: 40, prefix: '−', suffix: '%', label: 'средняя выгода'},
  {to: 10, suffix: ' км', label: 'радиус поиска'},
  {to: 20, suffix: ' сек', label: 'на бронирование'},
  {to: 5, suffix: '+', label: 'категорий рядом'},
];

const values = [
  {
    Icon: IconCard,
    tone: 'lime',
    title: 'Выгода',
    text: 'Помогаем экономить деньги — без компромиссов по качеству товаров и услуг.',
  },
  {
    Icon: IconPin,
    tone: 'green',
    title: 'Близость',
    text: 'Все предложения — рядом с вами. Покупка занимает минуты, а не часы.',
  },
  {
    Icon: IconZap,
    tone: 'forest',
    title: 'Скорость',
    text: 'Найти, оплатить и забрать — всего за несколько минут. Никаких лишних шагов.',
  },
  {
    Icon: IconLeaf,
    tone: 'mint',
    title: 'Разумное потребление',
    text: 'Хорошие товары находят покупателя вовремя. GrabYou делает потребление осознанным и выгодным для всех.',
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
    Icon: IconQr,
    title: 'Пришёл — показал QR — ушёл',
    description:
      'Продавец сканирует твой QR за секунду. Никаких звонков, «подождите минуту» и лишних слов.',
  },
];

const categories = [
  {Icon: IconCoffee, label: 'Кофейни'},
  {Icon: IconBread, label: 'Пекарни'},
  {Icon: IconFood, label: 'Кафе и рестораны'},
  {Icon: IconFlower, label: 'Цветочные'},
  {Icon: IconStore, label: 'Магазины'},
];

/* Булавки: x/y — проценты по viewBox карты.
   Места подобраны по карте расстояний до воды и улиц: каждая точка стоит
   на свободном месте, карточки между собой не пересекаются. */
const mapPins = [
  {x: 45, y: 30, tone: 'urgent', title: 'Кофейня', deal: '−30%', meta: 'до 21:00 · 350 м'},
  {x: 20, y: 34, tone: 'lime', title: 'Пекарня', deal: '−45%', meta: 'круассаны · 600 м'},
  {x: 82, y: 36, tone: 'green', title: 'Кондитерская', deal: '−50%', meta: 'эклеры · 450 м'},
  {x: 20, y: 54, tone: 'route', title: 'Цветочный магазин', deal: '−40%', meta: 'букет дня · 1,2 км'},
  {x: 80, y: 54, tone: 'urgent', title: 'Кафе', deal: '−35%', meta: 'бизнес-ланч · 900 м'},
  {x: 78, y: 77, tone: 'lime', title: 'Суши-бар', deal: '−35%', meta: 'сеты · 1,1 км'},
  {x: 57, y: 87, tone: 'green', title: 'Магазин у дома', deal: '−20%', meta: 'готовая еда · 250 м'},
  {x: 30, y: 80, tone: 'route', title: 'Пиццерия', deal: '−25%', meta: 'до 22:00 · 700 м'},
];

export default function HomepageFeatures() {
  const promotionsImg = useBaseUrl('/img/grabyou/promotions_nearby.png');
  const myOrderImg = useBaseUrl('/img/grabyou/my_order.png');
  const qrScannerImg = useBaseUrl('/img/grabyou/qr_scanner.png');
  const offerImg = useBaseUrl('/img/grabyou/offer-screen.png');
  const paymentImg = useBaseUrl('/img/grabyou/payment-screen.png');
  const aiPicImg = useBaseUrl('/img/grabyou/ai_pic.png');

  const ticker = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className={styles.page}>
      <ScrollProgress />

      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroMap} aria-hidden="true">
          <SpbMap className={styles.heroMapSvg} />
        </div>
        <div className={styles.heroFade} aria-hidden="true" />

        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCard}>
              <span className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} aria-hidden="true" />
                Сервис срочных предложений рядом
              </span>
              <Heading as="h1" className={styles.heroTitle}>
                Хватай
                <br />
                <span className={styles.heroTitleMark}>выгоду,</span>
                <br />
                пока горячо
              </Heading>
              <p className={styles.heroText}>
                GrabYou показывает, что прямо сейчас продаётся дешевле рядом с вами.
                Кофейни, пекарни, цветочные, кафе — предложения, которые нужно
                забрать сегодня.
              </p>
              <ul className={styles.heroList}>
                <li>видно расстояние и сколько времени осталось</li>
                <li>цена ниже — потому что предложение срочное</li>
                <li>оплатил в приложении — пришёл и забрал</li>
              </ul>
              <div className={styles.heroButtons}>
                <Link className="button button--primary button--lg" to="/download">
                  Скачать приложение
                </Link>
                <Link className="button button--secondary button--lg" to="#how-it-works">
                  Как это работает
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.phone}>
                <img src={promotionsImg} alt="Лента предложений рядом в GrabYou" loading="eager" />
              </div>
              <div className={`${styles.phone} ${styles.phoneSmall}`}>
                <img src={qrScannerImg} alt="Выдача заказа по QR-коду" loading="lazy" />
              </div>

              <span className={`${styles.tag} ${styles.tagA}`}>−40%</span>
              <span className={`${styles.tag} ${styles.tagB}`}>350 м от вас</span>
              <span className={`${styles.tag} ${styles.tagC}`}>осталось 2 шт.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЕГУЩАЯ СТРОКА ═══ */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {ticker.map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              {item}
              <span className={styles.tickerDot} />
            </span>
          ))}
        </div>
      </div>

      {/* ═══ ЦИФРЫ ═══ */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsRow}>
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className={styles.statItem}>
                  <div className={styles.statNum}>
                    <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ЦЕННОСТИ ═══ */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <header className={styles.sectionHead}>
              <span className={styles.sectionIndex}>01</span>
              <div className={styles.eyebrow}>Наши ценности</div>
              <Heading as="h2" className={styles.sectionTitle}>
                В основе GrabYou
              </Heading>
            </header>
          </Reveal>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <article className={styles.valueCard} data-tone={v.tone}>
                  <span className={styles.valueIcon}>
                    <v.Icon size={24} />
                  </span>
                  <Heading as="h3" className={styles.cardTitle}>
                    {v.title}
                  </Heading>
                  <p className={styles.cardText}>{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ КАК ЭТО РАБОТАЕТ ═══ */}
      <section className={styles.section} id="how-it-works">
        <div className="container">
          <Reveal>
            <header className={styles.sectionHead}>
              <span className={styles.sectionIndex}>02</span>
              <div className={styles.eyebrow}>Как это работает</div>
              <Heading as="h2" className={styles.sectionTitle}>
                Три шага. Меньше минуты.
              </Heading>
              <p className={styles.sectionSub}>
                Никаких звонков менеджерам, подтверждений по почте и ожидания ответа.
              </p>
            </header>
          </Reveal>

          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <article className={styles.stepCard}>
                  <span className={styles.stepNum}>{step.number}</span>
                  <span className={styles.stepIcon}>
                    <step.Icon size={24} />
                  </span>
                  <Heading as="h3" className={styles.cardTitle}>
                    {step.title}
                  </Heading>
                  <p className={styles.cardText}>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className={styles.shots}>
            {[
              [offerImg, 'Карточка предложения'],
              [paymentImg, 'Оплата в приложении'],
              [myOrderImg, 'Мой заказ и QR-код'],
            ].map(([src, alt], i) => (
              <Reveal key={alt} delay={i * 100}>
                <figure className={styles.shot}>
                  <span className={styles.shotNum}>0{i + 1}</span>
                  <img src={src} alt={alt} loading="lazy" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ КАРТА — фирменный блок ═══ */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <header className={styles.sectionHead}>
              <span className={styles.sectionIndex}>03</span>
              <div className={styles.eyebrow}>Рядом с вами</div>
              <Heading as="h2" className={styles.sectionTitle}>
                Начинаем с Петербурга
              </Heading>
              <p className={styles.sectionSub}>
                Предложения привязаны к району, а не к городу. Видно, сколько идти
                и сколько осталось времени.
              </p>
            </header>
          </Reveal>

          <Reveal delay={80}>
            <div className={styles.mapCard}>
              <SpbMap className={styles.mapSvg} />
              <div className={styles.mapPins}>
                {mapPins.map((pin) => (
                  <div
                    key={pin.title}
                    className={styles.mapPin}
                    data-tone={pin.tone}
                    style={{left: `${pin.x}%`, top: `${pin.y}%`}}>
                    <span className={styles.mapPinDot} aria-hidden="true" />
                    <div className={styles.mapPinCard}>
                      <span className={styles.mapPinDeal}>{pin.deal}</span>
                      <span className={styles.mapPinTitle}>{pin.title}</span>
                      <span className={styles.mapPinMeta}>{pin.meta}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.mapLegend}>
                <span className={styles.mapLegendCity}>Санкт-Петербург</span>
                <span className={styles.mapLegendNote}>дальше — другие города</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className={styles.catRow}>
              {categories.map((c) => (
                <span key={c.label} className={styles.catChip}>
                  <c.Icon size={18} /> {c.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ GRABAI ═══ */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <div className={styles.aiCard}>
              <div className={styles.aiContent}>
                <div className={styles.eyebrow}>
                  <IconSparkle size={16} /> GrabAI — встроенный ИИ
                </div>
                <Heading as="h2" className={styles.aiTitle}>
                  Не знаешь что хочешь?
                  <br />
                  Просто напиши
                </Heading>
                <p className={styles.cardText}>
                  Не нужно листать категории. Напиши текстом что ищешь — GrabAI
                  разберёт запрос и найдёт подходящие предложения рядом с тобой.
                </p>
                <div className={styles.aiChat}>
                  <div className={`${styles.bubble} ${styles.bubbleUser}`}>хочу что-нибудь к чаю</div>
                  <div className={styles.bubble}>
                    Нашёл 6 предложений рядом: эклеры −35% в 400 м, круассаны −40% у метро…
                  </div>
                  <div className={`${styles.bubble} ${styles.bubbleUser}`}>
                    букет подруге вечером до 1000 ₽
                  </div>
                  <div className={`${styles.bubble} ${styles.bubbleTyping}`}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className={styles.aiVisual}>
                <img src={aiPicImg} alt="GrabAI" loading="lazy" />
                <span className={`${styles.tag} ${styles.aiTagA}`}>нашёл 6 рядом</span>
                <span className={`${styles.tag} ${styles.aiTagB}`}>−35%</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <div className={styles.ctaCard}>
              <div className={styles.eyebrow}>
                <IconClock size={16} /> Скоро запуск
              </div>
              <Heading as="h2" className={styles.ctaTitle}>
                Будь первым — узнай о старте раньше всех
              </Heading>
              <p className={styles.ctaText}>
                Подпишись на Telegram-канал GrabYou. Узнаешь когда запустимся,
                увидишь первые предложения в своём районе и получишь доступ
                раньше остальных.
              </p>
              <div className={styles.ctaButtons}>
                <Link className="button button--primary button--lg" to="/download">
                  Скачать / открыть приложение
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  href="https://t.me/GrabYouOfficial"
                  target="_blank"
                  rel="noopener noreferrer">
                  Telegram-канал
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ ПОМОЩЬ ═══ */}
      <section className={`${styles.section} ${styles.sectionLast}`}>
        <div className="container">
          <Reveal>
            <div className={styles.helpCard}>
              <div>
                <div className={styles.eyebrow}>Остались вопросы?</div>
                <Heading as="h2" className={styles.helpTitle}>
                  Не нашли то, что нужно?
                  <br />
                  Мы вам поможем
                </Heading>
                <p className={styles.cardText}>
                  Ответим на любые вопросы, расскажем подробнее о сервисе
                  и отправим всё необходимое. Обычно отвечаем быстро.
                </p>
              </div>
              <div className={styles.helpLinks}>
                <Link
                  href="https://t.me/GrabYouOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.helpLink}>
                  <IconTelegram size={20} />
                  Telegram-канал
                </Link>
                <Link href="mailto:grabyou@mail.ru" className={styles.helpLink}>
                  <IconMail size={20} />
                  grabyou@mail.ru
                </Link>
                <Link to="/partners" className={styles.helpLink}>
                  <IconCheck size={20} />
                  Стать партнёром
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
