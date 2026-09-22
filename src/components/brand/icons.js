/**
 * Иконки GrabYou.
 *
 * Единая сетка 24×24, обводка 2, скруглённые концы — под геометрию логотипа.
 * Цвет наследуется через currentColor, размер задаётся пропом size.
 */

function Ico({size = 22, children, fill = false, ...rest}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? 'currentColor' : 'none'}
      stroke={fill ? 'none' : 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}>
      {children}
    </svg>
  );
}

export const IconPin = (p) => (
  <Ico {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="2.8" />
  </Ico>
);

export const IconCard = (p) => (
  <Ico {...p}>
    <rect x="2" y="5" width="20" height="14" rx="3" />
    <path d="M2 10h20" />
    <path d="M6 15h3" />
  </Ico>
);

export const IconZap = (p) => (
  <Ico {...p}>
    <path d="M13 2 4 13.5h6.5L10 22l9-11.5h-6.5L13 2Z" />
  </Ico>
);

export const IconLeaf = (p) => (
  <Ico {...p}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
    <path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12" />
  </Ico>
);

export const IconCheck = (p) => (
  <Ico {...p}>
    <path d="M21.5 11v1a9.5 9.5 0 1 1-5.6-8.7" />
    <path d="m21.5 4.5-9.5 9.5-2.8-2.8" />
  </Ico>
);

export const IconCoffee = (p) => (
  <Ico {...p}>
    <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z" />
    <path d="M6.5 2v2M10 2v2M13.5 2v2" />
  </Ico>
);

export const IconBread = (p) => (
  <Ico {...p}>
    <path d="M6 13.9A4 4 0 0 1 7.4 6a5 5 0 0 1 1-1.5 5 5 0 0 1 7.1 0A5 5 0 0 1 16.6 6 4 4 0 0 1 18 13.9V21H6Z" />
    <path d="M6 17h12" />
  </Ico>
);

export const IconFlower = (p) => (
  <Ico {...p}>
    <circle cx="12" cy="12" r="2.6" />
    <path d="M12 2.5a3.9 3.9 0 0 1 0 6.9 3.9 3.9 0 0 1 0-6.9Z" />
    <path d="M12 14.6a3.9 3.9 0 0 1 0 6.9 3.9 3.9 0 0 1 0-6.9Z" />
    <path d="M2.5 12a3.9 3.9 0 0 1 6.9 0 3.9 3.9 0 0 1-6.9 0Z" />
    <path d="M14.6 12a3.9 3.9 0 0 1 6.9 0 3.9 3.9 0 0 1-6.9 0Z" />
  </Ico>
);

export const IconFood = (p) => (
  <Ico {...p}>
    <path d="M3 11 21.5 2.5 13 21l-2-8-8-2Z" />
  </Ico>
);

export const IconStore = (p) => (
  <Ico {...p}>
    <path d="M3.5 9 5 4h14l1.5 5" />
    <path d="M3.5 9h17v11a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V9Z" />
    <path d="M9 21v-6h6v6" />
  </Ico>
);

export const IconClock = (p) => (
  <Ico {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 6.5V12l3.5 2" />
  </Ico>
);

export const IconRuble = (p) => (
  <Ico {...p}>
    <path d="M9 21V4h5.5a4.75 4.75 0 0 1 0 9.5H6" />
    <path d="M6 17.5h7.5" />
  </Ico>
);

export const IconUsers = (p) => (
  <Ico {...p}>
    <path d="M16.5 21v-2a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v2" />
    <circle cx="9.5" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
  </Ico>
);

export const IconShield = (p) => (
  <Ico {...p}>
    <path d="M12 21.5s7.5-3.8 7.5-9.5V5L12 2.2 4.5 5v7c0 5.7 7.5 9.5 7.5 9.5Z" />
    <path d="m8.8 11.8 2.2 2.2 4.2-4.2" />
  </Ico>
);

export const IconQr = (p) => (
  <Ico {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <path d="M14 14h3v3h-3zM20 14h1M14 20h3M20 17v4" />
  </Ico>
);

export const IconSparkle = (p) => (
  <Ico {...p}>
    <path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9l2-6.5Z" />
    <path d="M19 3v3M20.5 4.5h-3" />
  </Ico>
);

export const IconArrow = (p) => (
  <Ico {...p}>
    <path d="M4.5 12h15" />
    <path d="m13 5.5 6.5 6.5-6.5 6.5" />
  </Ico>
);

export const IconMail = (p) => (
  <Ico {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 9 6 9-6" />
  </Ico>
);

export const IconTelegram = ({size = 22, ...rest}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M23.1 3.5 19.6 20c-.3 1.2-1 1.5-2 .9l-5.5-4-2.7 2.6c-.3.3-.6.6-1.2.6l.4-5.5 10.2-9.2c.4-.4-.1-.6-.7-.2L5.6 12.1.2 10.4c-1.2-.4-1.2-1.2.2-1.7L21.6 2c1-.4 1.8.2 1.5 1.5Z" />
  </svg>
);

export const IconVK = ({size = 22, ...rest}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M13.2 17.1c-5.5 0-8.9-3.8-9-10h2.8c.1 4.6 2.2 6.5 3.8 6.9V7.1h2.6v3.9c1.6-.2 3.2-2 3.8-3.9h2.6a7.6 7.6 0 0 1-3.5 5c1.8.9 3 2.4 3.5 4.9h-2.9c-.4-1.5-1.5-2.7-3.5-3v3h-.2Z" />
  </svg>
);

export const IconRuStore = ({size = 34, ...rest}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true" {...rest}>
    <rect width="32" height="32" rx="9.5" fill="#0077FF" />
    <g transform="skewY(-13)">
      <rect x="6" y="13.4" width="6.4" height="14.6" rx="2.4" fill="#fff" />
      <rect x="13.1" y="13.4" width="6.4" height="13.2" rx="2.4" fill="#fff" />
      <rect x="20.2" y="13.4" width="6.4" height="11.8" rx="2.4" fill="#fff" />
    </g>
  </svg>
);

/** Булавка на карте — фирменная, с каплей и вырезом */
export function MapPin({size = 34, ...rest}) {
  return (
    <svg width={size} height={size * 1.32} viewBox="0 0 34 45" fill="none" aria-hidden="true" {...rest}>
      <path
        d="M17 44s15-14.2 15-27A15 15 0 0 0 2 17c0 12.8 15 27 15 27Z"
        fill="currentColor"
        stroke="var(--gy-ink-900)"
        strokeWidth="2.4"
      />
      <circle cx="17" cy="16.5" r="5.6" fill="var(--gy-paper)" stroke="var(--gy-ink-900)" strokeWidth="2.4" />
    </svg>
  );
}
