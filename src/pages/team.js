import React from 'react';
import Layout from '@theme/Layout';
import styles from './team.module.css';

const captain = {
  name: 'Донсков Владимир',
  role: 'Капитан команды & Backend Developer',
  image: '/img/team/donskov.jpg',
  description: 'Капитан команды GrabYou. Отвечаю за общую координацию проекта, разработку серверной части и техническую архитектуру. Специализируюсь на backend-разработке и управлении командой.',
  skills: ['Java', 'Javascript', 'PostgreSQL', 'Docker', 'Team Leadership'],
  github: 'https://github.com/VladimirDonskov',
  telegram: 'https://t.me/CipaVibe',
  email: 'donskov.vd@gmail.com',
};

const teamMembers = [
  {
    name: 'Артюшенко Артём',
    role: 'Технический лидер',
    image: '/img/team/artyushenko.jpg',
    description: 'Отвечаю за техническую экспертизу проекта, архитектурные решения и code review. Помогаю команде с решением сложных технических задач.',
    skills: ['Android Studio', 'Sql', 'GitHub actions', 'Docker', 'Mentoring'],
    github: 'https://github.com/artyushenko',
    telegram: 'https://t.me/xapow21',
  },
  {
    name: 'Кастерин Григорий',
    role: 'Frontend Developer',
    image: '/img/team/kasterin.jpg',
    description: 'Разрабатываю клиентскую часть приложения. Создаю современные интерфейсы с использованием React и TypeScript.',
    skills: ['React', 'TypeScript', 'SSR', 'Next.js', 'OpenGL'],
    github: 'https://github.com/kasterin',
    telegram: 'https://t.me/TIPycalm',
  },
  {
    name: 'Артемий Шидловский',
    role: 'Аналитик',
    image: '/img/team/shidlovsky.jpg',
    description: 'Провожу анализ данных, исследую потребности пользователей и помогаю принимать продуктовые решения на основе метрик.',
    skills: ['Data Analysis', 'Python', 'SQL', 'Product Metrics'],
    github: 'https://github.com/shidlovsky',
    telegram: 'https://t.me/art1st6',
  },
  {
    name: 'Кибанова Софья',
    role: 'Дизайнер',
    image: '/img/team/kibanova.jpg',
    imagePosition: 'top',
    description: 'Создаю дизайн интерфейсов и визуальную айдентику проекта. Работаю в Figma, занимаюсь UI/UX исследованиями.',
    skills: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research'],
    github: 'https://github.com/kibanova',
    telegram: 'https://t.me/sofkibanova',
  },
  {
    name: 'Мурата Саматова',
    role: 'Финансист',
    image: '/img/team/samatova.jpg',
    description: 'Управляю финансовой стороной проекта, планирую бюджет и анализирую экономическую эффективность решений.',
    skills: ['Financial Planning', 'Budgeting', 'Excel', 'Economic Analysis'],
    github: 'https://github.com/samatova',
    telegram: 'https://t.me/samatova_username',
  },
];

export default function Team() {
  return (
    <Layout
      title="Наша Команда"
      description="Команда разработчиков проекта GrabYou">
      <main className={styles.teamPage}>
        <div className="container">
          <header className={styles.header}>
            <h1>Наша Команда</h1>
            <p>Познакомьтесь с людьми, которые создают GrabYou</p>
          </header>

          {/* Карточка капитана */}
          <div className={styles.captainCard}>
            <div className={styles.captainImageWrap}>
              <img
                src={captain.image}
                alt={captain.name}
                className={styles.captainImage}
              />
            </div>
            <div className={styles.captainContent}>
              <div className={styles.captainBadge}>👑 Капитан команды</div>
              <h2 className={styles.captainName}>{captain.name}</h2>
              <p className={styles.captainRole}>{captain.role}</p>
              <p className={styles.captainDescription}>{captain.description}</p>
              
              <div className={styles.captainSkills}>
                <h4>Ключевые навыки:</h4>
                <div className={styles.skillTags}>
                  {captain.skills.map((skill, idx) => (
                    <span key={idx} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className={styles.captainSocials}>
                {captain.github && (
                  <a href={captain.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {captain.telegram && (
                  <a href={captain.telegram} target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                )}
                {captain.email && (
                  <a href={`mailto:${captain.email}`}>
                    Email
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Остальная команда */}
          <h2 className={styles.teamSectionTitle}>Команда разработки</h2>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member, idx) => (
              <div key={idx} className={styles.memberCard}>
                <div className={styles.memberImageWrap}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.memberImage}
                    style={member.imagePosition ? { objectPosition: member.imagePosition } : {}}
                  />
                </div>
                <div className={styles.memberContent}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberDescription}>{member.description}</p>
                  
                  {member.skills && (
                    <div className={styles.memberSkills}>
                      <div className={styles.skillTags}>
                        {member.skills.map((skill, skillIdx) => (
                          <span key={skillIdx} className={styles.skillTag}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={styles.memberSocials}>
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {member.telegram && (
                      <a href={member.telegram} target="_blank" rel="noopener noreferrer">
                        Telegram
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
