import React from 'react';
import Section from './Section';
import { ArrowUpRight } from './Icons';

const jobs = [
  {
    date: "Январь 2025 — Сейчас",
    title: "AI Engineer",
    company: "Неолитика",
    url: "https://templab.ru/home",
    description: "Создаю надежную архитектуру и эффективные сервисы на языке Python, фокусируясь на стабильности и поддерживаемости кода. Имею глубокий опыт работы с Flask, Docker и развертыванием решений в Yandex Cloud. Ключевая экспертиза — разработка сервисов речевой аналитики с использованием OpenAI API, которые помогают отделам продаж оптимизировать процессы. Моя сильная сторона — умение слышать бизнес, переводить сложные требования на технический язык и координировать команду разработки для достижения финального результата",
    tech: ["Python", "OpenAI API", "Flask", "Docker", "Yandex Cloud"]
  },
  {
    date: "Январь 2023 — Январь 2025",
    title: "Аналитик клиентопотока",
    company: "ПСК Дом девелопмент",
    url: "https://72dom.com/",
    description: "Специализируюсь на построении глубокой аналитики клиентопотока и создании комплексной отчетности в Power BI. Реализовал архитектуру сквозной аналитики — от первого касания в рекламном канале до финальной сделки. Обладаю опытом ретроспективного анализа работы отделов продаж за многолетние периоды, включая сегментацию данных по кластерам. Разработал и внедрил логику полуавтоматического распределения лидов, основанную на сопоставлении профиля клиента с эффективностью конкретных групп менеджеров, что позволило оптимизировать конверсию",
    tech: ["Python", "Power BI"]
  }
];

const Experience = () => {
  return (
    <Section id="experience" title="Опыт">
      <ol className="group/list">
        {jobs.map((job, i) => (
          <li key={i} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={job.date}>
                {job.date}
              </header>
              
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green focus-visible:text-green group/link text-base" href={job.url} target="_blank" rel="noreferrer" aria-label={`${job.title} at ${job.company}`}>
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {job.title} · <span className="inline-block">{job.company} 
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  {job.description}
                </p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {job.tech.map((t, idx) => (
                    <li key={idx} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-green-tint/10 px-3 py-1 text-xs font-medium leading-5 text-green">
                        {t}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;