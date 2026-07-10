import { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './partners.module.css';

/* ─── Иконки ─── */
function IconRuble() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21V4h6a4.5 4.5 0 0 1 0 9H6"/><line x1="6" y1="17" x2="13" y2="17"/>
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
function IconStore() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1.5-5h15L21 9"/><path d="M3 9h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z"/><path d="M8 21v-6h8v6"/>
    </svg>
  );
}
function IconCoffee() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>
    </svg>
  );
}
function IconBread() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/>
    </svg>
  );
}
function IconFlower() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" opacity=".4"/><path d="M12 14a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" opacity=".4"/><path d="M2 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z" opacity=".4"/><path d="M14 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z" opacity=".4"/>
    </svg>
  );
}
function IconFood() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>
  );
}
function IconTelegram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.613c-.152.676-.548.84-1.112.522l-3.07-2.262-1.482 1.427c-.164.164-.302.302-.618.302l.22-3.12 5.676-5.127c.247-.22-.054-.342-.384-.122L7.26 14.663l-3.02-.944c-.657-.206-.67-.657.137-.973l11.804-4.552c.547-.2 1.026.122.88.973-.013.082-.044.17-.098.28l-.4-.199z"/>
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

const benefits = [
  {
    Icon: IconRuble,
    color: 'green',
    title: 'Дополнительная выручка',
    text: 'Каждая позиция и каждый свободный час работают на кассу. Вечерняя выпечка, свободные окна записи, сезонные предложения — всё находит своего покупателя вовремя.',
    featured: true,
  },
  {
    Icon: IconUsers,
    color: 'teal',
    title: 'Новые клиенты рядом',
    text: 'Вас находят люди, которые живут и работают в вашем районе — и возвращаются уже за полной ценой.',
  },
  {
    Icon: IconShield,
    color: 'yellow',
    title: 'Оплата гарантирована',
    text: 'Клиент платит в приложении при бронировании. Деньги замораживаются в резерве — никаких «передумал и не пришёл» за ваш счёт.',
  },
  {
    Icon: IconClock,
    color: 'sage',
    title: 'Управление спросом',
    text: 'Сами решаете что, когда и по какой цене предложить. Заполняйте тихие часы и распродавайте к закрытию — без демпинга основного меню.',
  },
];

const steps = [
  { number: '01', title: 'Регистрируетесь', text: 'Создаёте профиль заведения: название, адрес, категория. Это бесплатно и занимает пару минут.' },
  { number: '02', title: 'Публикуете предложение', text: 'Фото, цена, количество и время выдачи. Предложение мгновенно видят пользователи рядом с вами.' },
  { number: '03', title: 'Клиент бронирует и платит', text: 'Оплата проходит в приложении и хранится в защищённом резерве до выдачи заказа.' },
  { number: '04', title: 'Сканируете QR — деньги ваши', text: 'Клиент приходит, вы сканируете его QR-код. Секунда — и заказ выдан, оплата зачислена.' },
];

const categories = [
  { Icon: IconCoffee, label: 'Кофейни' },
  { Icon: IconBread,  label: 'Пекарни' },
  { Icon: IconFood,   label: 'Кафе и рестораны' },
  { Icon: IconFlower, label: 'Цветочные' },
  { Icon: IconStore,  label: 'Магазины' },
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
function PartnerFormModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', address: '', phone: '', email: '' });
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) return;
    const subject = encodeURIComponent('Заявка на партнёрство GrabYou');
    const body = encodeURIComponent(
      `Название заведения: ${form.name}\n` +
      `Город / адрес: ${form.address}\n` +
      `Телефон: ${form.phone}\n` +
      `Email: ${form.email}`
    );
    window.location.href = `mailto:grabyou@mail.ru?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.modalClose} onClick={onClose} aria-label="Закрыть">×</button>

        {sent ? (
          <div className={styles.modalSuccess}>
            <Heading as="h3" className={styles.modalTitle}>Почти готово!</Heading>
            <p className={styles.modalSub}>
              Мы открыли письмо с вашей заявкой — просто нажмите «Отправить»
              в почтовом клиенте. Или напишите нам напрямую в{' '}
              <Link href="https://t.me/GrabYouOfficial" target="_blank" rel="noopener noreferrer">Telegram</Link>.
            </p>
            <button type="button" className={styles.modalSubmit} onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <Heading as="h3" className={styles.modalTitle}>Присоединяйтесь к нам сегодня!</Heading>
            <p className={styles.modalSub}>
              Оставьте заявку — мы свяжемся с вами и подробно расскажем
              про формат, условия и первые шаги.
            </p>

            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <label className={styles.modalLabel}>
                Название кафе / ресторана / магазина
                <input className={styles.modalInput} type="text" required value={form.name} onChange={set('name')} placeholder="Например, «Пекарня на Лиговском»" />
              </label>

              <label className={styles.modalLabel}>
                Город / адрес торговой точки
                <input className={styles.modalInput} type="text" required value={form.address} onChange={set('address')} placeholder="Санкт-Петербург, Лиговский пр., 30" />
              </label>

              <label className={styles.modalLabel}>
                Номер телефона
                <input className={styles.modalInput} type="tel" required value={form.phone} onChange={set('phone')} placeholder="+7 (900) 000-00-00" />
              </label>

              <label className={styles.modalLabel}>
                Email
                <input className={styles.modalInput} type="email" required value={form.email} onChange={set('email')} placeholder="you@example.com" />
              </label>

              <label className={styles.modalConsent}>
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
                <span>Даю согласие на обработку персональных данных</span>
              </label>

              <button type="submit" className={styles.modalSubmit} disabled={!consent}>
                Отправить заявку
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
  return (
    <Layout title="Партнёрам" description="Станьте партнёром GrabYou: превращайте свободные часы и горящие предложения в выручку и новых клиентов">
      <main className={styles.page}>
        <span className={styles.ghostWord} aria-hidden="true">ПАРТНЁРАМ</span>
        <div className={styles.bgTop} aria-hidden="true" />
        <div className={styles.bgBottom} aria-hidden="true" />

        <div className="container">

          {/* ─── HERO ─── */}
          <section className={styles.hero}>
            <div className={styles.heroBadge}>Для локального бизнеса</div>
            <Heading as="h1" className={styles.heroTitle}>
              Превращайте горящие предложения<br />
              в <span className={styles.heroAccent}>выручку</span>
            </Heading>
            <p className={styles.heroSub}>
              GrabYou приводит покупателей из вашего района на предложения,
              которые нужно продать именно сегодня. Без затрат на рекламу,
              без рисков, с оплатой вперёд.
            </p>
            <div className={styles.heroCtas}>
              <button type="button" className="button button--primary button--lg" onClick={() => setFormOpen(true)}>
                Стать партнёром
              </button>
              <Link className="button button--secondary button--lg" to="#how">
                Как это работает
              </Link>
            </div>
            <div className={styles.heroChips}>
              <span className={styles.heroChip}>0 ₽ за подключение</span>
              <span className={styles.heroChip}>оплата до выдачи</span>
              <span className={styles.heroChip}>клиенты из вашего района</span>
            </div>
          </section>

          {/* ─── ВЫГОДЫ ─── */}
          <section className={styles.section}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex} aria-hidden="true">01</span>
              <div className={styles.eyebrow}>Почему это выгодно</div>
              <Heading as="h2" className={styles.sectionTitle}>Бизнесу это приносит деньги</Heading>
            </div>
            <div className={styles.benefitsGrid}>
              {benefits.map((b) => (
                <div key={b.title} className={`${styles.benefitCard} ${b.featured ? styles.benefitFeatured : ''}`}>
                  <div className={styles.benefitWatermark} aria-hidden="true"><b.Icon /></div>
                  <div className={`${styles.benefitIcon} ${styles[`icon_${b.color}`]}`}><b.Icon /></div>
                  <Heading as="h3" className={styles.benefitTitle}>{b.title}</Heading>
                  <p className={styles.benefitText}>{b.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── КАК РАБОТАЕТ ─── */}
          <section className={styles.section} id="how">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex} aria-hidden="true">02</span>
              <div className={styles.eyebrow}>Как это работает</div>
              <Heading as="h2" className={styles.sectionTitle}>Четыре шага до первой продажи</Heading>
            </div>
            <div className={styles.stepsGrid}>
              {steps.map((s) => (
                <div key={s.number} className={styles.stepCard}>
                  <span className={styles.stepGhost} aria-hidden="true">{s.number}</span>
                  <Heading as="h3" className={styles.stepTitle}>{s.title}</Heading>
                  <p className={styles.stepText}>{s.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── КОМУ ПОДХОДИТ ─── */}
          <section className={styles.section}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex} aria-hidden="true">03</span>
              <div className={styles.eyebrow}>Кому подходит</div>
              <Heading as="h2" className={styles.sectionTitle}>Любой бизнес с «горящими» позициями</Heading>
            </div>
            <div className={styles.catRow}>
              {categories.map((c) => (
                <span key={c.label} className={styles.catChip}>
                  <c.Icon /> {c.label}
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
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIndex} aria-hidden="true">04</span>
              <div className={styles.eyebrow}>Вопросы и ответы</div>
              <Heading as="h2" className={styles.sectionTitle}>Коротко о главном</Heading>
            </div>
            <div className={styles.faqList}>
              {faq.map((f) => (
                <details key={f.q} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{f.q}</summary>
                  <p className={styles.faqA}>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ─── CTA ─── */}
          <section className={styles.section}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaGlow} aria-hidden="true" />
              <div className={styles.eyebrow}>Начнём?</div>
              <Heading as="h2" className={styles.ctaTitle}>
                Станьте партнёром GrabYou
              </Heading>
              <p className={styles.ctaText}>
                Напишите нам — расскажем условия, поможем с регистрацией
                и первым предложением. Это займёт один день.
              </p>
              <div className={styles.ctaButtons}>
                <button type="button" className={`button button--primary button--lg ${styles.ctaMainBtn}`} onClick={() => setFormOpen(true)}>
                  Оставить заявку
                </button>
                <Link className={styles.ctaLink} href="https://t.me/GrabYouOfficial" target="_blank" rel="noopener noreferrer">
                  <IconTelegram /> Написать в Telegram
                </Link>
                <Link className={styles.ctaLink} href="mailto:grabyou@mail.ru">
                  <IconMail /> grabyou@mail.ru
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
