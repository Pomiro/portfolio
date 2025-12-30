import React from 'react';
import Section from './Section';

const About = () => {
  return (
    <Section id="about" title="О себе">
      <div className="text-slate-400 leading-relaxed">
        <p className="mb-4">
          Моя экспертиза лежит на стыке 
          <span className="font-medium text-slate-200"> прикладного ИИ и бизнес-аналитики. </span> 
          Я помогаю компаниям внедрять LLM не просто как тренд, а как мощный инструмент для автоматизации сложных рабочих процессов.
          Моя любимая часть работы — это пересечение быстрого прототипирования и инженерии, где я превращаю начальные 
          <span className="font-medium text-slate-200"> MVP </span> 
          в надежные, <span className="font-medium text-slate-200">готовые к продакшену системы</span>.
        </p>

        <p className="mb-4">
          В данный момент я сосредоточен на архитектуре 
          <span className="font-medium text-slate-200"> движка речевой аналитики </span> 
          для отделов продаж. Я специализируюсь на проектировании 
          <span className="font-medium text-slate-200"> конвейеров на базе LLM</span>, которые извлекают полезные инсайты из разговоров, помогая командам оптимизировать работу и автоматизировать принятие решений.
        </p>

        <p>
          В свободное от создания продуктов время я активно участвую в 
          <span className="font-medium text-slate-200"> соревнованиях по машинному обучению</span>. 
          Мне нравится азарт решения задач в различных областях, что позволяет мне постоянно расширять границы возможного, используя последние достижения в сфере ИИ.
        </p>
      </div>
    </Section>
  );
};

export default About;
