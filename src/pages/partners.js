import {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  IconBread,
  IconClock,
  IconCoffee,
  IconFlower,
  IconFood,
  IconMail,
  IconRuble,
  IconShield,
  IconStore,
  IconTelegram,
  IconUsers,
} from '@site/src/components/brand/icons';
import styles from './partners.module.css';

const benefits = [
  {
    Icon: IconRuble,
    tone: 'lime',
    title: 'Дополнительная выручка',
    text: 'Каждая позиция и каждый свободный час работают на кассу. Вечерняя выпечка, свободные окна записи, сезонные предложения — всё находит своего покупателя вовремя.',
    featured: true,
  },
  {
    Icon: IconUsers,
    tone: 'green',
    title: 'Новые клиенты рядом',
    text: 'Вас находят люди, которые живут и работают в вашем районе — и возвращаются уже за полной ценой.',
  },
  {
    Icon: IconShield,
    tone: 'forest',
    title: 'Оплата гарантирована',
    text: 'Клиент платит в приложении при бронировании. Деньги замораживаются в резерве — никаких «передумал и не пришёл» за ваш счёт.',
  },
  {
    Icon: IconClock,
    tone: 'mint',
    title: 'Управление спросом',
    text: 'Сами решаете что, когда и по какой цене предложить. Заполняйте тихие часы и распродавайте к закрытию — без демпинга основного меню.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Регистрируетесь',
    text: 'Создаёте профиль заведения: название, адрес, категория. Это бесплатно и занимает пару минут.',
  },
  {
    number: '02',
    title: 'Публикуете предложение',
    text: 'Фото, цена, количество и время выдачи. Предложение мгновенно видят пользователи рядом с вами.',
  },
  {
    number: '03',
    title: 'Клиент бронирует и платит',
    text: 'Оплата проходит в приложении и хранится в защищённом резерве до выдачи заказа.',
  },
  {
    number: '04',
    title: 'Сканируете QR — деньги ваши',
    text: 'Клиент приходит, вы сканируете его QR-код. Секунда — и заказ выдан, оплата зачислена.',
  },
];

const categories = [
  {Icon: IconCoffee, label: 'Кофейни'},
  {Icon: IconBread, label: 'Пекарни'},
  {Icon: IconFood, label: 'Кафе и рестораны'},
  {Icon: IconFlower, label: 'Цветочные'},
  {Icon: IconStore, label: 'Магазины'},
];

const faq = [
  {
    q: 'Сколько стоит подключение?',
    a: 'Подключение и размещение предложений бесплатны. Мы зарабатываем только тогда, когда зарабатываете вы — небольшая комиссия с успешно выданных заказов.',
  },
  {
    q: 'Что если клиент не придёт за заказом?',
    a: 'Деньги уже заморожены в резерве при бронировании, поэтому вы ничего не теряете. Правила выплат по невыкупленным заказам фиксируются в договоре.',
  },
  {
    q: 'Не обесценит ли это моё основное меню?',
    a: 'Нет. Вы предлагаете ограниченное количество позиций в конкретные часы — например, к закрытию. Это инструмент точечных предложений, а не постоянная скидка.',
  },
  {
    q: 'Какое оборудование нужно?',
    a: 'Только смартфон. Публикация предложений и сканирование QR-кодов работают из приложения партнёра.',
  },
];

/* ─── Модалка-анкета ─── */
function PartnerFormModal({open, onClose}) {
  const {siteConfig} = useDocusaurusContext();
  const [form, setForm] = useState({name: '', address: '', phone: '', email: ''});
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const set = (key) => (e) => setForm({...form, [key]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(siteConfig.customFields.partnerApiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      });
      const json = await res.json().catch(() => ({}));
      setStatus(res.ok && json.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.modalClose} onClick={onClose} aria-label="Закрыть">
          ×
        </button>

        {status === 'success' ? (
          <div>
            <Heading as="h3" className={styles.modalTitle}>
              Заявка отправлена!
            </Heading>
            <p className={styles.modalSub}>
              Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время.
              Если хотите ускорить — напишите нам в{' '}
              <Link href="https://t.me/GrabYouOfficial" target="_blank" rel="noopener noreferrer">
                Telegram
              </Link>
              .
            </p>
            <button type="button" className={styles.submit} onClick={onClose}>
              Отлично
            </button>
          </div>
        ) : (
          <>
            <Heading as="h3" className={styles.modalTitle}>
              Присоединяйтесь к нам сегодня!
            </Heading>
            <p className={styles.modalSub}>
              Оставьте заявку — мы свяжемся с вами и подробно расскажем про формат,
              условия и первые шаги.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                Название кафе / ресторана / магазина
                <input
                  className={styles.input}
                  type="text"
                  required
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Например, «Пекарня на Лиговском»"
                />
              </label>

              <label className={styles.label}>
                Город / адрес торговой точки
                <input
                  className={styles.input}
                  type="text"
                  required
                  value={form.address}
                  onChange={set('address')}
                  placeholder="Санкт-Петербург, Лиговский пр., 30"
                />
              </label>

              <label className={styles.label}>
                Номер телефона
                <input
                  className={styles.input}
                  type="tel"
                  required
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="+7 (900) 000-00-00"
                />
              </label>

              <label className={styles.label}>
                Email
                <input
                  className={styles.input}
                  type="email"
                  required
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@example.com"
                />
              </label>

              <label className={styles.consent}>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                <span>Даю согласие на обработку персональных данных</span>
              </label>

              {status === 'error' && (
                <p className={styles.error}>
                  Не получилось отправить. Попробуйте ещё раз или напишите нам в{' '}
                  <Link href="https://t.me/GrabYouOfficial" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </Link>{' '}
                  /{' '}
                  <Link href="mailto:grabyou@mail.ru">на почту</Link>.
                </p>
              )}

              <button type="submit" className={styles.submit} disabled={!consent || status === 'sending'}>
                {status === 'sending' ? 'Отправляем…' : 'Отправить заявку'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function PartnersPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <Layout
      title="Партнёрам"
      description="Станьте партнёром GrabYou: превращайте свободные часы и горящие предложения в выручку и новых клиентов">
      <main className={styles.page}>
        <div className="container">
          {/* ─── HERO ─── */}
          <section className={styles.hero}>
            <div className={styles.heroCard}>
              <span className={styles.heroBadge}>Для локального бизнеса</span>
              <Heading as="h1" className={styles.heroTitle}>
                Превращайте горящие предложения в{' '}
                <span className={styles.heroMark}>выручку</span>
              </Heading>
              <p className={styles.heroSub}>
                GrabYou приводит покупателей из вашего района на предложения,
                которые нужно продать именно сегодня. Без затрат на рекламу,
                без рисков, с оплатой вперёд.
              </p>
              <div className={styles.heroCtas}>
                <button
                  type="button"
                  className="button button--primary button--lg"
                  onClick={() => setFormOpen(true)}>
                  Стать партнёром
                </button>
                <Link className="button button--secondary button--lg" to="#how">
                  Как это работает
                </Link>
              </div>
              <div className={styles.chips}>
                <span className={styles.chip}>0 ₽ за подключение</span>
                <span className={styles.chip}>оплата до выдачи</span>
                <span className={styles.chip}>клиенты из вашего района</span>
              </div>
            </div>
          </section>

          {/* ─── ВЫГОДЫ ─── */}
          <section className={styles.section}>
            <header className={styles.sectionHead}>
              <span className={styles.sectionIndex}>01</span>
              <div className={styles.eyebrow}>Почему это выгодно</div>
              <Heading as="h2" className={styles.sectionTitle}>
                Бизнесу это приносит деньги
              </Heading>
            </header>
            <div className={styles.benefitsGrid}>
              {benefits.map((b) => (
                <article
                  key={b.title}
                  className={`${styles.card} ${b.featured ? styles.cardFeatured : ''}`}
                  data-tone={b.tone}>
                  <span className={styles.cardIcon}>
                    <b.Icon size={24} />
                  </span>
                  <Heading as="h3" className={styles.cardTitle}>
                    {b.title}
                  </Heading>
                  <p className={styles.cardText}>{b.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ─── КАК РАБОТАЕТ ─── */}
          <section className={styles.section} id="how">
            <header className={styles.sectionHead}>
              <span className={styles.sectionIndex}>02</span>
              <div className={styles.eyebrow}>Как это работает</div>
              <Heading as="h2" className={styles.sectionTitle}>
                Четыре шага до первой продажи
              </Heading>
            </header>
            <ol className={styles.stepsGrid}>
              {steps.map((s) => (
                <li key={s.number} className={styles.stepCard}>
                  <span className={styles.stepNum}>{s.number}</span>
                  <Heading as="h3" className={styles.cardTitle}>
                    {s.title}
                  </Heading>
                  <p className={styles.cardText}>{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ─── КОМУ ПОДХОДИТ ─── */}
          <section className={styles.section}>
            <header className={styles.sectionHead}>
              <span className={styles.sectionIndex}>03</span>
              <div className={styles.eyebrow}>Кому подходит</div>
              <Heading as="h2" className={styles.sectionTitle}>
                Любой бизнес с «горящими» позициями
              </Heading>
            </header>
            <div className={styles.catRow}>
              {categories.map((c) => (
                <span key={c.label} className={styles.catChip}>
                  <c.Icon size={18} /> {c.label}
                </span>
              ))}
            </div>
            <p className={styles.catNote}>
              Свежая выпечка к вечеру, букеты дня, свободные окна записи,
              бизнес-ланчи в тихие часы — если у вас бывает то, что нужно продать
              сегодня, GrabYou найдёт на это покупателя.
            </p>
          </section>

          {/* ─── FAQ ─── */}
          <section className={styles.section}>
            <header className={styles.sectionHead}>
              <span className={styles.sectionIndex}>04</span>
              <div className={styles.eyebrow}>Вопросы и ответы</div>
              <Heading as="h2" className={styles.sectionTitle}>
                Коротко о главном
              </Heading>
            </header>
            <div className={styles.faqList}>
              {faq.map((f, i) => (
                <div key={f.q} className={`${styles.faqItem} ${faqOpen === i ? styles.faqOpen : ''}`}>
                  <button
                    type="button"
                    className={styles.faqQ}
                    aria-expanded={faqOpen === i}
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                    {f.q}
                    <span className={styles.faqPlus} aria-hidden="true" />
                  </button>
                  <div className={styles.faqAWrap}>
                    <p className={styles.faqA}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── CTA ─── */}
          <section className={`${styles.section} ${styles.sectionLast}`}>
            <div className={styles.ctaCard}>
              <div className={styles.eyebrow}>Начнём?</div>
              <Heading as="h2" className={styles.ctaTitle}>
                Станьте партнёром GrabYou
              </Heading>
              <p className={styles.ctaText}>
                Напишите нам — расскажем условия, поможем с регистрацией
                и первым предложением. Это займёт один день.
              </p>
              <div className={styles.ctaButtons}>
                <button
                  type="button"
                  className="button button--primary button--lg"
                  onClick={() => setFormOpen(true)}>
                  Оставить заявку
                </button>
                <Link
                  className={styles.ctaLink}
                  href="https://t.me/GrabYouOfficial"
                  target="_blank"
                  rel="noopener noreferrer">
                  <IconTelegram size={18} /> Написать в Telegram
                </Link>
                <Link className={styles.ctaLink} href="mailto:grabyou@mail.ru">
                  <IconMail size={18} /> grabyou@mail.ru
                </Link>
              </div>
            </div>
          </section>
        </div>

        <PartnerFormModal open={formOpen} onClose={() => setFormOpen(false)} />
      </main>
    </Layout>
  );
}
