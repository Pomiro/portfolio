import React from 'react';
import Section from './Section';
import { ArrowUpRight, Trophy } from './Icons';

const projects = [
  {
    title: "Human-centered AI Assistant",
    badge: "Top 2",
    description: "Это соревнование в рамках AI Journey Contest 2025 посвящено созданию «человекоцентричного» ИИ-ассистента для сферы электронной коммерции, способного понимать глубокие мотивы и долгосрочные цели пользователей. Участникам требовалось разработать автономного агента, который на основе анализа «цифровых следов» имитирует поведение реального человека и формирует персонализированные рекомендации, опираясь на контекст и жизненные задачи клиента.",
    tech: ["Python", "GigaChat"],
    github: "#",
    external: "https://dsworks.ru/champ/aij25-recsys",
    image: "/1_AIJ_contest.jpg" 
  },
  {
    title: "AI for Finance Hack",
    badge: "Top 15",
    description: "Этот хакатон посвящен внедрению генеративного ИИ в банковские процессы для автоматизации консультаций и повышения точности ответов на сложные запросы клиентов. Участникам требовалось разработать интеллектуального ассистента на базе RAG-пайплайна (LLM + внешняя база знаний), который способен профессионально отвечать на вопросы пользователей о кредитах, инвестициях и страховании, опираясь на реальные финансовые статьи.",
    tech: ["Python", "OpenAI API"],
    github: "#",
    external: "https://boosters.pro/championship/ai_for_finance/overview",
    image: "/ai_finance.png"
  },
  {
    title: "Поиск дублей | Avito ML cup 2025",
    badge: "Top 7",
    description: "Это соревнование от AvitoTech посвящено борьбе с повторным размещением одинаковых товаров, что мешает честной конкуренции и затрудняет поиск для покупателей. Участникам требовалось разработать мультимодальный алгоритм, который на основе анализа текстов, изображений и метаданных находит дубликаты объявлений в огромном массиве данных платформы.",
    tech: ["Python", "CatBoost"],
    github: "#",
    external: "https://ods.ai/competitions/avitotechmlchallenge2025_2/",
    image: "/avito_ml_2.png"
  },
  {
    title: "MTS ML CUP",
    badge: "Top 7",
    description: "Это соревнование от МТС Digital посвящено задаче профилирования пользователей в сфере интернет-рекламы на основе их обезличенной сетевой активности. Участникам требовалось разработать алгоритм, который по «цифровым следам» (истории посещенных сайтов и техническим параметрам сессий) наиболее точно определит пол и возрастную категорию владельца cookie-файлов",
    tech: ["Python", "CatBoost"],
    github: "#",
    external: "https://ods.ai/competitions/mtsmlcup",
    image: "/mts.png"
  }
];

const Work = () => {
  return (
    <Section id="projects" title="Проекты">
      <ol className="group/list">
        {projects.map((project, i) => (
          <li key={i} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              
              <div className="z-10 sm:order-2 sm:col-span-6">
                {project.badge && (
                  <div className="flex items-center gap-2 mb-1.5">
                    <Trophy className={`w-4 h-4 ${project.badge.includes('Top 2') ? 'text-slate-300' : 'text-green'}`} />
                    <span className={`font-mono text-xs font-bold tracking-widest uppercase ${project.badge.includes('Top 2') ? 'text-slate-300' : 'text-green'}`}>{project.badge}</span>
                  </div>
                )}
                <h3>
                  <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green focus-visible:text-green group/link text-base" href={project.external} target="_blank" rel="noreferrer" aria-label={project.title}>
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {project.title}
                      <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  {project.description}
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {project.tech.map((t, idx) => (
                    <li key={idx} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-green-tint/10 px-3 py-1 text-xs font-medium leading-5 text-green">
                        {t}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="z-10 sm:order-1 sm:col-span-2">
                <div className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:translate-y-1 bg-slate-700/50 aspect-video flex items-center justify-center text-[10px] text-slate-500 font-mono overflow-hidden">
                   {project.image ? (
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                   ) : (
                     "PROJECT IMAGE"
                   )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Work;