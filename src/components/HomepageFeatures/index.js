import { useEffect, useRef, useState } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/* ─── Хук cursor spotlight ─── */
function useCursorGlow() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty('--cx', e.clientX + 'px');
      document.documentElement.style.setProperty('--cy', e.clientY + 'px');
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);
}

/* ─── Хук 3D-наклона за курсором ─── */
function useTilt(maxDeg = 7) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return; // тач-устройства — без наклона
    let raf = 0;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(1100px) rotateY(${px * maxDeg}deg) rotateX(${-py * maxDeg}deg)`;
      });
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = 'perspective(1100px) rotateY(0deg) rotateX(0deg)';
    };
    el.addEventListener('mousemove', move, { passive: true });
    el.addEventListener('mouseleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, [maxDeg]);
  return ref;
}

/* ─── Хук для анимации появления ─── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add(styles.revealed); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Частицы (фиксированные для SSR) ─── */
const heroParticles = [
  { x: 8,  y: 18, s: 3, d: 0,   dur: 9  },
  { x: 91, y: 9,  s: 2, d: 1.4, dur: 11 },
  { x: 74, y: 38, s: 4, d: 2.8, dur: 8  },
  { x: 17, y: 71, s: 2, d: 0.6, dur: 12 },
  { x: 53, y: 24, s: 3, d: 3.5, dur: 10 },
  { x: 88, y: 62, s: 2, d: 1.9, dur: 9  },
  { x: 31, y: 85, s: 3, d: 4.4, dur: 11 },
  { x: 63, y: 76, s: 2, d: 0.3, dur: 8  },
  { x: 41, y: 52, s: 2, d: 2.2, dur: 13 },
  { x: 11, y: 44, s: 3, d: 1.1, dur: 10 },
  { x: 77, y: 91, s: 2, d: 3.7, dur: 9  },
  { x: 94, y: 47, s: 3, d: 0.8, dur: 12 },
  { x: 26, y: 33, s: 2, d: 5.1, dur: 8  },
  { x: 58, y: 14, s: 3, d: 2.0, dur: 11 },
  { x: 47, y: 67, s: 2, d: 4.8, dur: 10 },
];

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
function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}
function IconZap() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

const values = [
  { Icon: IconCard,  color: 'green',  title: 'Выгода',                   text: 'Помогаем экономить деньги — без компромиссов по качеству товаров и услуг.' },
  { Icon: IconPin,   color: 'teal',   title: 'Близость',                  text: 'Все предложения — рядом с вами. Покупка занимает минуты, а не часы.' },
  { Icon: IconZap,   color: 'yellow', title: 'Скорость',                  text: 'Найти, оплатить и забрать — всего за несколько минут. Никаких лишних шагов.' },
  { Icon: IconLeaf,  color: 'sage',   title: 'Разумное потребление',      text: 'Хорошие товары находят покупателя вовремя. GrabYou делает потребление осознанным и выгодным для всех.' },
];

const tickerItems = [
  'СРОЧНЫЕ ПРЕДЛОЖЕНИЯ',
  'МНОГО КАТЕГОРИЙ',
  'ВЫГОДНО',
  'БОГАТЫЙ АССОРТИМЕНТ',
  'БЫСТРО И ПРОСТО',
];

const moments = [
  { Icon: IconCard,   title: 'Когда хочется купить выгоднее',          text: 'Смотреть предложения от местных продавцов рядом с домом, работой или учёбой и бронировать то, что актуально сейчас.' },
  { Icon: IconPin,    title: 'Когда нужно здесь и сейчас',              text: 'Быстро найти рядом еду, товар или услугу, которые доступны сегодня, а не когда‑нибудь потом.' },
  { Icon: IconCoffee, title: 'Рядом с работой или учёбой',              text: 'Еда, товары и услуги поблизости, которые доступны здесь и сейчас.' },
  { Icon: IconCheck,  title: 'Без звонков и долгих уточнений',          text: 'Видеть актуальные предложения рядом, бронировать в приложении и забирать самостоятельно — без переписок, ожидания ответа и лишних действий.' },
];

const steps = [
  { number: '01', Icon: IconPin,   title: 'Открыл — сразу видно что рядом',    description: 'Лента показывает живые предложения поблизости прямо сейчас. Фото, цена, адрес и сколько времени осталось.' },
  { number: '02', Icon: IconCard,  title: 'Нажал — оплатил — готово',           description: 'Буквально 20 секунд. Деньги замораживаются в защищённом резерве и спишутся только когда заберёшь. Риска ноль.' },
  { number: '03', Icon: IconCheck, title: 'Пришёл — показал QR — ушёл',         description: 'Продавец сканирует твой QR за секунду. Никаких звонков, «подождите минуту» и лишних слов.' },
];

/* ─── Полоса прогресса скролла ─── */
function ScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
        if (barRef.current) barRef.current.style.width = p + '%';
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); };
  }, []);
  return <div className={styles.scrollProgress}><div ref={barRef} className={styles.scrollProgressBar} /></div>;
}

/* ─── Счётчик с анимацией набора ─── */
function CountUp({ to, suffix = '', prefix = '', duration = 1400 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setVal(Math.round(to * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

const stats = [
  { to: 40, prefix: '−', suffix: '%', label: 'средняя выгода' },
  { to: 10, suffix: ' км', label: 'радиус поиска' },
  { to: 20, suffix: ' сек', label: 'на бронирование' },
  { to: 5,  suffix: '+', label: 'категорий рядом' },
];

function RevealBlock({ children, delay = 0, className = '' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`${styles.revealBlock} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function HomepageFeatures() {
  useCursorGlow();
  const tiltRef = useTilt(7);
  const aiPicImg        = useBaseUrl('/img/grabyou/ai_pic.png');
  const myOrderImg      = useBaseUrl('/img/grabyou/my_order.png');
  const offerImg        = useBaseUrl('/img/grabyou/offer-screen.png');
  const paymentImg      = useBaseUrl('/img/grabyou/payment-screen.png');
  const promotionsImg   = useBaseUrl('/img/grabyou/promotions_nearby.png');
  const qrScannerImg    = useBaseUrl('/img/grabyou/qr_scanner.png');

  const repeated = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className={styles.page}>
      <ScrollProgress />
      <div className={styles.cursorGlow} aria-hidden="true" />

      {/* Аврора-фон на всю страницу */}
      <div className={styles.aurora} aria-hidden="true">
        <div className={`${styles.auroraBlob} ${styles.auroraA}`} />
        <div className={`${styles.auroraBlob} ${styles.auroraB}`} />
        <div className={`${styles.auroraBlob} ${styles.auroraC}`} />
      </div>

      {/* ─── HERO ─── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgGlow} aria-hidden="true" />
        <div className={styles.heroParticles} aria-hidden="true">
          {heroParticles.map((p, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.s}px`,
                height: `${p.s}px`,
                animationDelay: `${p.d}s`,
                animationDuration: `${p.dur}s`,
              }}
            />
          ))}
        </div>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroBadge} ${styles.heroAnimate}`}>
                Сервис срочных предложений от локального бизнеса
              </div>
              <Heading as="h1" className={`${styles.heroTitle} ${styles.heroAnimate} ${styles.heroAnimateDelay1}`}>
                Хватай{' '}
                <span className={styles.heroTitleWord}>
                  <span className={styles.heroTitleGradient}>выгоду,</span>
                  <svg className={styles.heroUnderline} viewBox="0 0 220 14" fill="none" aria-hidden="true" preserveAspectRatio="none">
                    <path d="M3 10C40 3.5 120 2 217 7.5" stroke="url(#uGrad)" strokeWidth="5" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="uGrad" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22c55e" />
                        <stop offset="1" stopColor="#22c7d6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />пока горячо
              </Heading>
              <p className={`${styles.heroSubtitle} ${styles.heroAnimate} ${styles.heroAnimateDelay2}`}>
                GrabYou помогает покупателям получать товары и услуги по
                выгодным предложениям от местного бизнеса. Кофейни, пекарни,
                цветочные, кафе — находи лучшее рядом с собой прямо сейчас.
              </p>
              <ul className={`${styles.heroList} ${styles.heroAnimate} ${styles.heroAnimateDelay3}`}>
                <li>предложения рядом — видно расстояние и время до конца</li>
                <li>цена ниже — потому что предложение срочное</li>
                <li>оплатил в приложении — пришёл и забрал</li>
              </ul>
              <div className={`${styles.heroButtons} ${styles.heroAnimate} ${styles.heroAnimateDelay4}`}>
                <Link className="button button--primary button--lg" to="#how-it-works">
                  Как это работает
                </Link>
                <Link className="button button--secondary button--lg" to="/download">
                  Скачать приложение
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual} ref={tiltRef}>
              <img src={promotionsImg}  alt="Главный экран GrabYou"       className={`${styles.heroMainShot} ${styles.heroFloatMain}`} loading="lazy" />
              <img src={myOrderImg}     alt="Мой заказ GrabYou"            className={`${styles.heroFloatingTop} ${styles.heroFloatA}`} loading="lazy" />
              <img src={qrScannerImg}   alt="QR-сканер GrabYou"            className={`${styles.heroFloatingBottom} ${styles.heroFloatB}`} loading="lazy" />
              <span className={`${styles.sticker} ${styles.stickerA}`} aria-hidden="true">−40%</span>
              <span className={`${styles.sticker} ${styles.stickerB}`} aria-hidden="true">350 м от вас</span>
              <span className={`${styles.sticker} ${styles.stickerC}`} aria-hidden="true">забрать за 20 сек</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {repeated.map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              {item}<span className={styles.tickerDot} />
            </span>
          ))}
        </div>
      </div>

      {/* ─── СТАТИСТИКА ─── */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsRow}>
            {stats.map((s, i) => (
              <RevealBlock key={s.label} delay={i * 100}>
                <div className={styles.statItem}>
                  <div className={styles.statNum}>
                    <CountUp to={s.to} prefix={s.prefix || ''} suffix={s.suffix || ''} />
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ЦЕННОСТИ (перенесено сюда) ─── */}
      <section className={styles.section}>
        <div className="container">
          <RevealBlock>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex} aria-hidden="true">01</span>
              <div className={styles.eyebrow}>Наши ценности</div>
              <Heading as="h2" className={styles.sectionTitle}>В основе GrabYou</Heading>
            </div>
          </RevealBlock>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <RevealBlock key={v.title} delay={i * 90} className={i === 0 ? styles.valueFeatured : ''}>
                <div className={`${styles.valueCard} ${styles[`valueCard_${v.color}`]}`}>
                  <div className={styles.valueWatermark} aria-hidden="true"><v.Icon /></div>
                  <div className={`${styles.valueIcon} ${styles[`valueIcon_${v.color}`]}`}><v.Icon /></div>
                  <Heading as="h3" className={styles.cardTitle}>{v.title}</Heading>
                  <p className={styles.cardText}>{v.text}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* ─── КАК РАБОТАЕТ ─── */}
      <section className={styles.section} id="how-it-works">
        <div className="container">
          <RevealBlock>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex} aria-hidden="true">02</span>
              <div className={styles.eyebrow}>Как это работает</div>
              <Heading as="h2" className={styles.sectionTitle}>Три шага. Меньше минуты.</Heading>
              <p className={styles.sectionSubtitle}>Никаких звонков менеджерам, подтверждений по почте и ожидания ответа.</p>
            </div>
          </RevealBlock>
          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <RevealBlock key={step.number} delay={i * 110}>
                <div className={styles.stepCard}>
                  <span className={styles.stepGhost} aria-hidden="true">{step.number}</span>
                  <div className={styles.stepIconWrap}><step.Icon /></div>
                  <Heading as="h3" className={styles.cardTitle}>{step.title}</Heading>
                  <p className={styles.cardText}>{step.description}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
          <div className={styles.stepsScreenshots}>
            <div className={styles.shotsGlow} aria-hidden="true" />
            {[offerImg, paymentImg, qrScannerImg].map((src, i) => (
              <RevealBlock key={i} delay={i * 120}>
                <div className={`${styles.screenshotItem} ${styles[`shot${i}`]}`}>
                  <span className={styles.shotNum} aria-hidden="true">0{i + 1}</span>
                  <img src={src} alt="" className={styles.screenshotImg} loading="lazy" />
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GRABAI ─── */}
      <section className={styles.section}>
        <div className="container">
          <RevealBlock>
            <div className={styles.aiRow}>
            <div className={styles.aiCard}>
              <div className={styles.aiContent}>
                <div className={styles.eyebrow}>GrabAI — встроенный ИИ</div>
                <Heading as="h2" className={styles.aiTitle}>
                  Не знаешь что хочешь?<br />Просто напиши — ИИ разберётся
                </Heading>
                <p className={styles.aiText}>
                  Не нужно листать категории. Напиши текстом что ищешь —
                  GrabAI разберёт запрос и найдёт подходящие предложения рядом с тобой.
                </p>
                <div className={styles.aiChat}>
                  <div className={`${styles.aiBubble} ${styles.aiBubbleUser}`}>хочу что-нибудь к чаю</div>
                  <div className={`${styles.aiBubble} ${styles.aiBubbleBot}`}>Нашёл 6 предложений рядом: эклеры −35% в 400 м, круассаны −40% у метро…</div>
                  <div className={`${styles.aiBubble} ${styles.aiBubbleUser}`}>букет подруге вечером до 1000 ₽</div>
                  <div className={`${styles.aiBubble} ${styles.aiBubbleBot} ${styles.aiTyping}`}>
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.aiVisual}>
              <div className={styles.aiImageWrap}>
                <div className={styles.aiRing} aria-hidden="true" />
                <img src={aiPicImg} alt="GrabAI" className={styles.aiImage} loading="lazy" />
                <span className={`${styles.aiChip} ${styles.aiChipA}`} aria-hidden="true">нашёл 6 рядом</span>
                <span className={`${styles.aiChip} ${styles.aiChipB}`} aria-hidden="true">−35%</span>
              </div>
            </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={styles.section}>
        <div className="container">
          <RevealBlock>
            <div className={styles.finalCard}>
              <div className={styles.eyebrow}>Скоро запуск</div>
              <Heading as="h2" className={styles.finalTitle}>
                Будь первым — узнай о старте раньше всех
              </Heading>
              <p className={styles.finalText}>
                Подпишись на Telegram-канал GrabYou. Узнаешь когда запустимся,
                увидишь первые предложения в своём районе и получишь доступ раньше остальных.
              </p>
              <div className={styles.finalButtons}>
                <Link className="button button--primary button--lg" to="/download">
                  Скачать / Открыть приложение
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  href="https://t.me/GrabYouOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram-канал
                </Link>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* ─── ПОМОЩЬ ─── */}
      <section className={styles.section}>
        <div className="container">
          <RevealBlock>
            <div className={styles.helpCard}>
              <div className={styles.helpGlow} aria-hidden="true" />
              <div className={styles.helpContent}>
                <div className={styles.eyebrow}>Остались вопросы?</div>
                <Heading as="h2" className={styles.helpTitle}>
                  Не нашли то, что нужно?<br />Мы вам поможем
                </Heading>
                <p className={styles.helpText}>
                  Ответим на любые вопросы, расскажем подробнее о сервисе и
                  отправим всё необходимое. Напишите нам — обычно отвечаем быстро.
                </p>
                <div className={styles.helpContacts}>
                  <Link
                    href="https://t.me/GrabYouOfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.helpLink}
                  >
                    <span className={styles.helpLinkIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.613c-.152.676-.548.84-1.112.522l-3.07-2.262-1.482 1.427c-.164.164-.302.302-.618.302l.22-3.12 5.676-5.127c.247-.22-.054-.342-.384-.122L7.26 14.663l-3.02-.944c-.657-.206-.67-.657.137-.973l11.804-4.552c.547-.2 1.026.122.88.973-.013.082-.044.17-.098.28l-.4-.199z"/></svg>
                    </span>
                    Telegram-канал
                  </Link>
                  <Link
                    href="mailto:grabyou@mail.ru"
                    className={styles.helpLink}
                  >
                    <span className={styles.helpLinkIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    grabyou@mail.ru
                  </Link>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

    </div>
  );
}
