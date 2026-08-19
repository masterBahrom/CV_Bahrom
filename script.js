const header = document.querySelector(".header");
const revealItems = document.querySelectorAll(".reveal");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

function handleHeader() {
  if (!header) return;
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

handleHeader();
window.addEventListener("scroll", handleHeader, { passive: true });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.08,
  }
);

revealItems.forEach((item) => observer.observe(item));

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".timeline-item").forEach((item) => {
  const syncAria = () => {
    item.setAttribute(
      "aria-expanded",
      item.classList.contains("expanded") ? "true" : "false"
    );
  };

  item.addEventListener("click", () => {
    item.classList.toggle("expanded");
    syncAria();
  });

  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      item.classList.toggle("expanded");
      syncAria();
    }
  });
});

// -------------------------
// Localization (EN / RU)
// -------------------------
const CV_BY_LANG = {
  en: "Bahrom.pdf",
  ru: "Bahrom_ru.pdf",
};

const I18N = {
  en: {
    title: "Bahrom Muhamedzhanov — Product Lead · Senior Product Manager",
    metaDescription:
      "Product Lead and Senior Product Manager with senior corporate product experience across fintech, platforms, regulated journeys, and 0→1 product systems. Based in Dubai.",
    nav: {
      summary: "Summary",
      impact: "Impact",
      cases: "Selected work",
      capabilities: "Capabilities",
      experience: "Experience",
      expertise: "Expertise",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Product Leadership · Fintech · Platforms · 0→1 Systems",
      titleLine: "Product Lead · Senior Product Manager",
      lead1:
        "I lead product strategy and execution across complex fintech, platform, and regulated journeys—turning ambiguous problems into clear product decisions and measurable outcomes.",
      lead2:
        "I bring both corporate-scale product leadership and hands-on 0→1 ownership, from discovery and product rules to delivery and iteration.",
      proof1:
        '<span class="hero-proof-num">+34%</span> delivery speed — speed followed from portfolio discipline and clearer trade-offs.',
      proof2:
        '<span class="hero-proof-num">−63%</span> active backlog — roadmap reflected strategy, not noise.',
      proof3:
        '<span class="hero-proof-num">111</span> stores + HQ · <span class="hero-proof-num">~1.1–1.4k</span> users — owned HR tech products where consistency, scale, and business trade-offs had to hold everywhere.',
      proof4:
        '<span class="hero-proof-num">+60k</span> applications (first month) — owned the mortgage growth initiative where funnel, integrations, and ops had to hold together under volume.',
      ctaCases: "View selected work",
      ctaContact: "Contact",
      ctaCv: "Download CV",
    },
    exec: {
      kicker: "At a glance",
      role: "Product Leader",
      org: "Fintech · Platforms · 0→1 product systems",
      blurb:
        "I connect product judgment with delivery depth: defining the right problems, shaping workable product systems, and aligning product, engineering, analytics, and business around outcomes.",
      focusLabel: "Focus",
      focusValue:
        "Product strategy, discovery, prioritization, product rules, and outcome-focused delivery",
      domainsLabel: "Domains",
      domainsValue:
        "Fintech, digital banking, HR tech at scale, partner platforms, community sports",
      scaleLabel: "Scale",
      scaleValue: "Corporate-scale platforms plus live 0→1 product ownership in Dubai",
    },
    summary: {
      tag: "Executive summary",
      h2: "Who I am as a product leader",
      p: "I unite <strong>product strategy, discovery, and execution</strong>: I define what matters, make trade-offs explicit, then shape the product system and cross-functional alignment so teams ship <strong>measurable business outcomes</strong>. I’ve done it across <strong>digital banking</strong>, <strong>retail-scale HR tech</strong>, <strong>partner and rewards platforms</strong>, and <strong>high-volume mortgage and acquisition</strong>—and through <strong>Plai Arena</strong>, a live 0→1 community sports product I founded and build in Dubai.",
    },
    impact: {
      tag: "Evidence",
      h2: "Key impact",
      lead: "What moved—and why it mattered to the business.",
      items: [
        {
          metric: '+34% <span class="impact-label">delivery speed</span>',
          copy:
            "Reset how work entered delivery and how releases were coordinated—so the same teams shipped more predictably; speed stuck because the operating model changed, not because people worked longer hours.",
        },
        {
          metric:
            "−63% <span class=\"impact-label\">active backlog</span>",
          copy:
            "Tightened intake rules and prioritization discipline—shrinking noise freed capacity for strategic bets and made stakeholder trade-offs explicit.",
        },
        {
          metric:
            "−92% <span class=\"impact-label\">operating cost</span>",
          copy:
            "Replaced a manual, call-heavy path with automation at the point of scale—cost dropped where headcount could no longer absorb volume.",
        },
        {
          metric:
            "+30% <span class=\"impact-label\">candidate inflow</span>",
          copy:
            "Launched and owned referral as a growth lever—measured end-to-end so acquisition improved without proportionally increasing acquisition spend.",
        },
        {
          metric:
            "+2 <span class=\"impact-label\">Candidate NPS</span>",
          copy:
            "Moved experience and process on a product people use daily—NPS shifted because the workflow got simpler, not because of a one-off campaign.",
        },
        {
          metric: "111 + ~1.1–1.4k",
          copy:
            "Owned product decisions and prioritization for HR platforms across stores and HQ—reliability and consistency became leadership problems, not ticket volume.",
        },
        {
          metric:
            "+300 <span class=\"impact-label\">partners</span>",
          copy:
            "Scaled partner onboarding and self-serve flows—network growth decoupled from linear support hiring.",
        },
        {
          metric:
            "+60k <span class=\"impact-label\">applications</span>",
          copy:
            "Drove a mortgage push where volume, funnel, and ops had to hold together—first-month numbers reflected coordinated execution, not a single feature launch.",
        },
      ],
    },
    cases: {
      tag: "Depth",
      h2: "Selected Product Work",
      lead:
        "A cross-section of product leadership: scale, complex systems, fintech platforms, and 0→1 ownership.",
      items: [
        {
          meta: "Digital banking · Renmoney",
          title: "Delivery transformation",
          context:
            "Digital banking delivery lacked predictability, backlog kept growing, and priorities were misaligned.",
          outcome:
            "<strong>+34% delivery speed · −63% active backlog · stronger execution predictability.</strong>",
        },
        {
          meta: "HR tech · Leroy Merlin",
          title: "HRTech platform at scale",
          context:
            "Recruitment and HR workflows had to work consistently across 111 stores and headquarters.",
          outcome:
            "<strong>+30% candidate inflow · −92% operating cost · +2 Candidate NPS.</strong>",
        },
        {
          meta: "Fintech · Tinkoff Bank",
          title: "Partner platform growth",
          context:
            "Partner growth was constrained by manual onboarding and operational bottlenecks.",
          outcome:
            "<strong>+300 partners · 80% less manual effort · 2× faster operations.</strong>",
        },
        {
          meta: "0→1 Product · B2C + B2B2C · Live",
          title: "Plai Arena",
          context:
            "Building a product system for community sports organizers and players, starting with badminton in Dubai—replacing fragmented chat-based operations with structured sessions, participation, matchmaking, results, and tournament workflows.",
          outcome:
            "<strong>Role:</strong> Founder / Product Owner · <strong>Focus:</strong> Discovery · Product strategy · UX · Product rules · Mobile + Web",
          details: [
            {
              title: "Problem",
              body:
                "Sports communities often run through chats and spreadsheets, making capacity, cancellations, attendance, waitlists, courts, results, and tournaments hard to manage reliably.",
            },
            {
              title: "Discovery",
              body:
                "Direct conversations with organizers and players, plus firsthand experience running recurring badminton sessions, shape product rules and workflow decisions.",
            },
            {
              title: "Product system",
              body:
                "Session discovery → joining → attendance → matchmaking → play → results → progress → return, supported by organizer/admin tooling.",
            },
            {
              title: "Product decision",
              body:
                "FIFO waitlist with automatic promotion and explicit eligibility rules, so replacement logic is predictable instead of negotiated manually in chat.",
            },
            {
              title: "Execution",
              body:
                "Own product strategy, flows, requirements, delivery decisions, testing, feedback loops, and iteration across mobile and web.",
            },
            {
              title: "Current validation",
              body:
                "Live early-stage product in Dubai, with real usage, organizer feedback, and continuous validation. No product-market-fit or scale claims.",
            },
          ],
          chips: [
            "Registration",
            "Capacity",
            "Waitlists",
            "Matchmaking",
            "Ratings",
            "Tournaments",
            "Admin tooling",
          ],
          ctas: ["View product", "View case study"],
        },
      ],
    },
    capabilities: {
      tag: "Leadership",
      h2: "What I bring as a product leader",
      cards: [
        {
          title: "Product direction",
          p: "Translate company strategy and user evidence into sequenced product bets with clear owners, constraints, and success metrics tied to revenue, risk, and time-to-impact.",
        },
        {
          title: "Discovery to delivery",
          p: "Connect discovery, prioritization, planning, and release discipline so the right decisions become shipped product—not just cleaner process artifacts.",
        },
        {
          title: "Judgement &amp; trade-offs",
          p: "Surface business trade-offs early—what we defer, what we cut, what we sequence—so leadership and teams share one set of constraints and aligned success metrics.",
        },
        {
          title: "Cross-functional leadership",
          p: "Align product, engineering, analytics, QA, and business on direction, evidence, product rules, and release quality—from strategic bets to customer-facing outcomes.",
        },
      ],
    },
    experience: {
      tag: "Track record",
      h2: "Experience",
      lead: "Where I owned product direction—and what the evidence shows.",
      items: [
        {
          date: "Feb 2025 — Present",
          company: "Renmoney",
          role: "Product leadership · Digital banking",
          summary:
            "<strong>Own</strong> portfolio direction and prioritization model for digital transformation: operating rhythm and alignment across business, engineering, analytics, and QA—<strong>+34% delivery speed</strong>, <strong>−63% active backlog</strong>.",
          details: [
            "Drove execution of digital transformation initiatives across business, engineering, and integration stakeholders",
            "Owned backlog management and prioritization by business impact, delivery constraints, and technical complexity",
            "Improved engineering delivery across backend, analytics, and QA; transitioned backend team to Kanban",
            "Redesigned Jira workflows, task structures, and backlog organization; introduced RFC process",
            "Built collaboration model across analysts, developers, and QA; standardized delivery processes across teams",
            "Unified API requirements and integration specifications; bridged business and technical teams",
          ],
          outcome:
            "<strong>Outcome:</strong> <strong>+34% delivery speed</strong>, <strong>−63% active backlog</strong>",
        },
        {
          date: "Jul 2024 — Feb 2025",
          company: "Megapolis Real Estate",
          role: "Senior Product Manager",
          summary:
            "<strong>Led</strong> end-to-end corporate website relaunch—owned acquisition funnel, experimentation (A/B testing), and prioritization under revenue pressure; <strong>+18% website traffic</strong> and improved conversion funnel.",
          details: [
            "Led end-to-end relaunch of corporate website; coordinated business, design, development, and analytics",
            "Reprioritized backlog and delivery scope; analyzed user behavior, bottlenecks, and A/B tests",
            "Focused on lead generation and acquisition efficiency; improved conversion funnel",
            "Increased website traffic by <strong>18%</strong>",
          ],
          outcome: null,
        },
        {
          date: "Mar 2021 — Nov 2024",
          company: "Leroy Merlin",
          role: "Senior Product Manager · HR tech",
          summary:
            "<strong>Led</strong> HRTech products and internal platforms for <strong>111 stores + HQ</strong> (~<strong>1,100–1,400</strong> users)—balanced business goals, efficiency, and user needs; <strong>+30%</strong> free candidate inflow, <strong>−92%</strong> operational cost, <strong>+2</strong> Candidate NPS.",
          details: [
            "Owned recruitment systems, workflows, requirements, and integrations; standardized processes across stores and HQ",
            "Launched “Call a Friend” referral system—<strong>+30%</strong> free candidate inflow",
            "Replaced call-center workflows with chatbot-based system—<strong>−92%</strong> operational cost",
            "Improved candidate journey, internal hiring workflows, and Candidate NPS (<strong>+2</strong>)",
            "Defined internal and external integrations; built large-scale data layer",
          ],
          outcome: null,
        },
        {
          date: "Nov 2020 — Feb 2021",
          company: "DOM RF Bank",
          role: "Product Manager · Mortgage",
          summary:
            "In a <strong>regulated banking environment</strong>, <strong>designed and delivered</strong> a <strong>one-click mortgage approval</strong> journey—where compliance, integrations, and time-to-approval defined business viability.",
          details: [
            "Designed and delivered one-click mortgage approval; simplified customer journey in a regulated banking environment",
            "Defined integration requirements for Rosreestr and credit bureaus",
            "Coordinated cross-functional delivery across business and technical teams",
            "Supported launch readiness and compliance",
          ],
          outcome: null,
        },
        {
          date: "Jan 2017 — Nov 2020",
          company: "Tinkoff Bank",
          role: "Product Manager",
          summary:
            "<strong>Shaped</strong> product across mortgage, real estate, partner platform, rewards, and B2B growth. <strong>Highlights:</strong> <strong>+300</strong> partners, <strong>80%</strong> less manager effort, <strong>2×</strong> document speed, <strong>73%</strong> automation via bot; mortgage initiative <strong>60k</strong> applications (first month), <strong>+1.79%</strong> end-to-end conversion, <strong>+0.7</strong> app NPS; contributed to <strong>Global Finance</strong>–recognized experience.",
          details: [
            "<strong>Rewards / partner platform:</strong> led delivery; built self-service partner area; <strong>+300</strong> new partners; <strong>80%</strong> reduction in manager effort",
            "Replaced paper workflows with electronic document flow; <strong>2×</strong> document processing speed; <strong>73%</strong> of requests automated via bot support",
            "Improved app experience (<strong>+0.7 NPS</strong>); delivered new manager workspace; owned analytics and integrations",
            "<strong>Mortgage &amp; real estate:</strong> end-to-end delivery from MVP to scale; real estate sales MVP in <strong>1.5 months</strong>",
            "<strong>60,000</strong> applications in first month through free channels; <strong>+1.79%</strong> end-to-end conversion; personal account and app for real estate agents",
            "Led analytics and integrations with banks, developers, and ecosystem; contributed to UX behind Global Finance recognition",
            "<strong>Mortgage product:</strong> integrations with partner banks and real estate developers; improved customer account UX",
          ],
          outcome: null,
        },
      ],
    },
    approach: {
      tag: "How I lead",
      h2: "Leadership approach",
      p: "I anchor on <strong>decisions</strong>: what problem we are solving, which bets define the roadmap, what we stop, and how success is measured. Strong product work lives in the details—states, permissions, edge cases, user feedback, and trade-offs teams can actually execute.",
      flow: "Discovery → trade-offs → product rules → delivery → measurable outcomes",
    },
    fit: {
      tag: "Fit",
      h2: "Who I’m a fit for",
      companiesTitle: "Companies",
      companies: [
        "Fintech and digital banks scaling product leadership, discovery quality, and prioritization discipline",
        "Platforms and marketplaces where partners, internal tools, or regulated journeys are the product",
        "Organizations where product judgement and execution quality—not idea volume—set the growth ceiling",
      ],
      situationsTitle: "Situations",
      situations: [
        "You are hiring a Senior Product Manager, Lead Product Manager, or Product Lead with evidence at scale",
        "You need stronger product judgment, clearer priorities, operating cadence, or cross-functional alignment",
        "Regulated or integration-heavy domains where the leader owns direction, sequencing, risk, and outcomes",
      ],
    },
    credibility: {
      credibilityTitle: "Credibility",
      p1: "Mortgage product work tied to Global Finance recognition. Led systems at scale across distributed teams.",
      p2: "Strong technical foundation—Master of Software Engineering—ensuring product decisions and trade-offs with engineering remain substantive.",
      educationTitle: "Education",
      education:
        "Bauman Moscow State Technical University · Master of Software Engineering · 2009—2015",
    },
    expertise: {
      tag: "Breadth",
      h2: "Expertise & Leadership",
      lead: "Depth across product, domain, and craft—plus how I invest in the next generation.",
      card1Title: "Expertise",
      card1: [
        "<strong>Product leadership</strong>—strategy, discovery, prioritization, and operating model: how ambiguous problems become focused product bets and a cadence teams can run.",
        "<strong>Domains</strong>—fintech, HR tech, platforms, and growth in complex, high-stakes environments.",
        "<strong>Technical depth</strong> where it counts—APIs, integrations, analytics, states, rules, and edge cases—so decisions with engineering stay grounded and fast.",
        "<strong>AI-assisted product workflow</strong>—using AI for discovery synthesis, hypothesis challenging, edge-case analysis, requirements, prototyping, and implementation review while keeping final decisions grounded in users, business priorities, and system constraints.",
      ],
      card2Title: "Leadership & mentoring",
      card2: [
        "Mentor at <strong>Tinkoff Fintech School</strong>—cohorts where outcomes spoke: <strong>8 of 9</strong> participants received offers.",
        "<strong>Five years</strong> teaching at Bauman University—lecturing, supervising projects, and shepherding work that included <strong>grant-winning</strong> outcomes.",
      ],
    },
    contact: {
      tag: "Contact",
      h2: "Let’s talk",
      p1: "I’m targeting Senior Product Manager, Lead Product Manager, and Product Lead roles in fintech, digital banking, platform products, and other complex environments. Based in Dubai; open to international teams and selected advisory or expert engagements.",
      p2: "I focus on mandates where I can own product direction, discovery, trade-offs, and outcomes end-to-end—if that’s what you’re building, I’d like to hear from you.",
      cvLabel: "Download CV (PDF)",
    },
    footerBack: "Back to top",
  },

  ru: {
    title: "Bahrom Muhamedzhanov — Product Lead · Senior Product Manager",
    metaDescription:
      "Product Lead и Senior Product Manager с опытом в финтехе, платформах, регулируемых продуктах и 0→1 продуктовых системах. Базируется в Дубае.",
    nav: {
      summary: "Резюме",
      impact: "Результаты",
      cases: "Работы",
      capabilities: "Компетенции",
      experience: "Опыт",
      expertise: "Экспертиза",
      contact: "Контакты",
    },
    hero: {
      eyebrow: "Продуктовое лидерство · Финтех · Платформы · 0→1 системы",
      titleLine: "Product Lead · Senior Product Manager",
      lead1:
        "Я веду продуктовую стратегию и реализацию в сложных финтех-, платформенных и регулируемых продуктах — превращаю неопределённые задачи в ясные продуктовые решения и измеримый результат.",
      lead2:
        "Сочетаю корпоративный опыт в продуктах на масштабе с практическим 0→1 владением: от discovery и продуктовых правил до реализации и итераций.",
      proof1:
        '<span class="hero-proof-num">+34%</span> скорость доставки — рост появился благодаря дисциплине портфеля и более чётким компромиссам.',
      proof2:
        '<span class="hero-proof-num">−63%</span> активный бэклог — дорожная карта отражала стратегию, а не шум.',
      proof3:
        '<span class="hero-proof-num">111</span> магазинов + головной офис · <span class="hero-proof-num">~1,1–1,4 тыс.</span> пользователей — отвечал за кадровые технологии, где везде должны были выдерживаться стандарты, масштаб и бизнес‑компромиссы.',
      proof4:
        '<span class="hero-proof-num">+60k</span> заявок (первый месяц) — отвечал за ипотечную инициативу роста, где вместе должны были сойтись воронка, интеграции и операции под нагрузкой.',
      ctaCases: "Смотреть работы",
      ctaContact: "Контакты",
      ctaCv: "Скачать резюме",
    },
    exec: {
      kicker: "Коротко о главном",
      role: "Product Leader",
      org: "Финтех · Платформы · 0→1 продуктовые системы",
      blurb:
        "Соединяю продуктовый judgement и глубину реализации: определяю правильные проблемы, формирую рабочие продуктовые системы и синхронизирую продукт, разработку, аналитику и бизнес вокруг результата.",
      focusLabel: "Фокус",
      focusValue:
        "Продуктовая стратегия, discovery, приоритизация, продуктовые правила и delivery, ориентированное на результат",
      domainsLabel: "Домены",
      domainsValue:
        "Финтех, цифровой банкинг, HR tech на масштабе, партнёрские платформы, community sports",
      scaleLabel: "Масштаб",
      scaleValue:
        "Корпоративные платформы на масштабе плюс live 0→1 продукт в Дубае",
    },
    summary: {
      tag: "Кратко",
      h2: "Кто я как продуктовый лидер",
      p: "Объединяю <strong>продуктовую стратегию, discovery и реализацию</strong>: определяю, что важно, делаю компромиссы явными, затем формирую продуктовую систему и кросс‑функциональное взаимодействие, чтобы команды давали <strong>измеримый бизнес‑результат</strong>. Делал это в <strong>цифровом банкинге</strong>, <strong>HR tech на масштабе ритейла</strong>, <strong>партнёрских и бонусных платформах</strong>, <strong>ипотеке и acquisition на больших объёмах</strong> — а также через <strong>Plai Arena</strong>, live 0→1 продукт для спортивных сообществ, который я основал и развиваю в Дубае.",
    },
    impact: {
      tag: "Результаты",
      h2: "Ключевой эффект",
      lead: "Что изменилось — и почему это важно бизнесу.",
      items: [
        {
          metric:
            "+34% <span class=\"impact-label\">скорость доставки</span>",
          copy:
            "Перестроил то, как работа входит в поставку, и как согласуются релизы — поэтому те же команды стали поставлять предсказуемее. Скорость закрепилась, потому что изменилась операционная модель, а не потому, что люди работали дольше.",
        },
        {
          metric:
            "−63% <span class=\"impact-label\">активный бэклог</span>",
          copy:
            "Укрепил правила поступления задач и дисциплину приоритизации: стало меньше шума, освободилась ёмкость под продуктовые инициативы, компромиссы для заинтересованных сторон стали явными.",
        },
        {
          metric:
            "−92% <span class=\"impact-label\">операционные затраты</span>",
          copy:
            "Заменил ручной, телефоноёмкий маршрут на автоматизацию в точке масштаба — затраты снизились там, где численность уже не могла поглощать объём.",
        },
        {
          metric:
            "+30% <span class=\"impact-label\">привлечение кандидатов</span>",
          copy:
            "Запустил и вёл реферальную программу как рычаг роста — измерял цепочку целиком, чтобы привлечение улучшалось без пропорционального роста затрат на маркетинг.",
        },
        {
          metric:
            "+2 <span class=\"impact-label\">лояльность кандидатов</span>",
          copy:
            "Упростил опыт и процесс в продукте, которым пользуются каждый день. Оценка лояльности выросла за счёт более простого сценария работы, а не разовой кампании.",
        },
        {
          metric: "111 + ~1,1–1,4 тыс.",
          copy:
            "Отвечал за продуктовые решения и приоритизацию кадровых платформ по магазинам и головному офису — надёжность и единообразие стали вопросами лидерства, а не объёма задач.",
        },
        {
          metric:
            "+300 <span class=\"impact-label\">партнеров</span>",
          copy:
            "Масштабировал подключение партнёров и самообслуживание — рост сети перестал зависеть от линейного найма поддержки.",
        },
        {
          metric: "+60k <span class=\"impact-label\">заявок</span>",
          copy:
            "Вёл ипотечную инициативу, где объём, воронка и операции должны были держаться вместе. Цифры за первый месяц отражают согласованную работу, а не запуск одной функции.",
        },
      ],
    },
    cases: {
      tag: "Глубина",
      h2: "Избранные продуктовые работы",
      lead:
        "Срез продуктового опыта: масштаб, сложные системы, финтех-платформы и 0→1 владение продуктом.",
      items: [
        {
          meta: "цифровые банковские сервисы · Renmoney",
          title: "Трансформация поставок",
          context:
            "Поставка в цифровых банковских сервисах была непредсказуемой: бэклог рос, приоритеты расходились.",
          outcome:
            "<strong>+34% скорость доставки · −63% активный бэклог · выше предсказуемость поставок.</strong>",
        },
        {
          meta: "кадровые технологии · Леруа Мерлен",
          title: "Кадровая платформа в масштабе",
          context:
            "Рекрутинг и кадровые процессы должны работать стабильно в 111 магазинах и головном офисе.",
          outcome:
            "<strong>+30% привлечения кандидатов · −92% операционные затраты · +2 лояльность кандидатов.</strong>",
        },
        {
          meta: "финансовые технологии · Тинькофф Банк",
          title: "Рост партнёрской платформы",
          context:
            "Рост партнёров упирался в ручное подключение и операционные узкие места.",
          outcome:
            "<strong>+300 партнёров · на 80% меньше ручных усилий · операции в 2× быстрее.</strong>",
        },
        {
          meta: "0→1 продукт · B2C + B2B2C · Live",
          title: "Plai Arena",
          context:
            "Строю продуктовую систему для организаторов и игроков в community sports, начиная с бадминтона в Дубае: заменяю разрозненные операции в чатах на структурированные сессии, участие, matchmaking, результаты и турнирные сценарии.",
          outcome:
            "<strong>Роль:</strong> Founder / Product Owner · <strong>Фокус:</strong> Discovery · продуктовая стратегия · UX · продуктовые правила · Mobile + Web",
          details: [
            {
              title: "Проблема",
              body:
                "Спортивные сообщества часто живут в чатах и таблицах, из-за чего capacity, отмены, attendance, waitlists, корты, результаты и турниры сложно вести надёжно.",
            },
            {
              title: "Discovery",
              body:
                "Прямые разговоры с организаторами и игроками, а также личный опыт регулярных бадминтон-сессий формируют продуктовые правила и решения по workflow.",
            },
            {
              title: "Продуктовая система",
              body:
                "Discovery сессии → joining → attendance → matchmaking → play → results → progress → return, с organizer/admin tooling вокруг этого цикла.",
            },
            {
              title: "Продуктовое решение",
              body:
                "FIFO waitlist с автоматическим продвижением и явными eligibility rules, чтобы замена игроков была предсказуемой, а не решалась вручную в чате.",
            },
            {
              title: "Реализация",
              body:
                "Отвечаю за стратегию, flows, требования, delivery decisions, тестирование, feedback loops и итерации на mobile и web.",
            },
            {
              title: "Текущая валидация",
              body:
                "Live early-stage продукт в Дубае: реальное использование, обратная связь организаторов и постоянная валидация. Без заявлений о PMF или масштабе.",
            },
          ],
          chips: [
            "Registration",
            "Capacity",
            "Waitlists",
            "Matchmaking",
            "Ratings",
            "Tournaments",
            "Admin tooling",
          ],
          ctas: ["Смотреть продукт", "Смотреть кейс"],
        },
      ],
    },
    capabilities: {
      tag: "Лидерство",
      h2: "Что я приношу как продуктовый лидер",
      cards: [
        {
          title: "Продуктовое направление",
          p: "Перевожу стратегию компании и пользовательские сигналы в последовательные продуктовые инициативы с владельцами, ограничениями и метриками успеха, связанными с выручкой, риском и временем до эффекта.",
        },
        {
          title: "От discovery до delivery",
          p: "Связываю discovery, приоритизацию, планирование и релизную дисциплину так, чтобы правильные решения становились продуктом, а не только более аккуратными процессами.",
        },
        {
          title: "Решения и компромиссы",
          p: "Рано выявляю бизнес‑компромиссы: что переносим, что сокращаем, что ставим в очередь — чтобы руководство и команды разделяли один набор ограничений и согласованные метрики успеха.",
        },
        {
          title: "Кросс‑функциональное лидерство",
          p: "Выстраиваю единую линию продукта, разработки, аналитики, контроля качества и бизнеса по направлению, evidence, продуктовым правилам и качеству релизов — от стратегических инициатив до клиентского результата.",
        },
      ],
    },
    experience: {
      tag: "Подтверждённый опыт",
      h2: "Опыт",
      lead: "Где отвечал за продуктовые решения — и какие есть подтверждения.",
      items: [
        {
          date: "фев 2025 — настоящее время",
          company: "Renmoney",
          role: "Продуктовое лидерство · цифровые банковские сервисы",
          summary:
            "<strong>Отвечал</strong> за направление и модель приоритизации портфеля для цифровой трансформации: операционный ритм и согласование между бизнесом, разработкой, аналитикой и контролем качества — <strong>+34% скорость доставки</strong>, <strong>−63% активный бэклог</strong>.",
          details: [
            "Вёл исполнение инициатив цифровой трансформации совместно с бизнесом, разработкой и интеграционными сторонами",
            "Управлял бэклогом и приоритизацией по бизнес‑эффекту, ограничениям поставки и технической сложности",
            "Улучшил поставку изменений в серверной части, аналитике и контроле качества; перевёл серверную команду на канбан",
            "Перестроил процессы в системе управления задачами, структуры задач и организацию бэклога; внедрил процесс согласования технических инициатив",
            "Собрал модель взаимодействия между аналитиками, разработчиками и контролем качества; стандартизировал поставку между командами",
            "Унифицировал требования к программным интерфейсам и спецификации интеграций; связал бизнес и технические команды",
          ],
          outcome:
            "<strong>Итог:</strong> <strong>+34% скорость доставки</strong>, <strong>−63% активный бэклог</strong>",
        },
        {
          date: "июл 2024 — фев 2025",
          company: "Мегаполис Недвижимость",
          role: "Старший продуктовый менеджер",
          summary:
            "<strong>Вёл</strong> сквозной перезапуск корпоративного сайта — отвечал за воронку привлечения, сравнительные эксперименты и приоритизацию в условиях давления по выручке; <strong>+18% трафика сайта</strong> и улучшение конверсионной воронки.",
          details: [
            "Вёл сквозной перезапуск корпоративного сайта; координировал бизнес, дизайн, разработку и аналитику",
            "Переприоритизировал бэклог и рамки поставки; анализировал поведение пользователей, узкие места и результаты сравнительных экспериментов",
            "Фокусировался на привлечении лидов и эффективности воронки; улучшил конверсионную воронку",
            "Увеличил трафик сайта на <strong>18%</strong>",
          ],
          outcome: null,
        },
        {
          date: "март 2021 — ноя 2024",
          company: "Леруа Мерлен",
          role: "Старший продуктовый менеджер · кадровые технологии",
          summary:
            "<strong>Вёл</strong> кадровые технологии и внутренние платформы для <strong>111 магазинов + головной офис</strong> (~<strong>1 100–1 400</strong> пользователей), балансируя бизнес‑цели, эффективность и потребности пользователей; <strong>+30%</strong> бесплатного притока кандидатов, <strong>−92%</strong> операционных затрат, <strong>+2</strong> лояльность кандидатов.",
          details: [
            "Отвечал за системы рекрутинга, процессы, требования и интеграции; стандартизировал работу в магазинах и головном офисе",
            "Запустил реферальную программу «Позови друга» — <strong>+30%</strong> бесплатного притока кандидатов",
            "Заменил сценарии колл‑центра на систему на базе чатбота — <strong>−92%</strong> операционных затрат",
            "Улучшил путь кандидата, внутренние процессы найма и оценку лояльности кандидатов (<strong>+2</strong>)",
            "Определил внутренние и внешние интеграции; построил масштабируемый слой данных",
          ],
          outcome: null,
        },
        {
          date: "ноя 2020 — фев 2021",
          company: "Банк ДОМ.РФ",
          role: "Продуктовый менеджер · Ипотека",
          summary:
            "В регулируемой банковской среде <strong>спроектировал и реализовал</strong> маршрут одобрения ипотеки в один клик — где соответствие требованиям, интеграции и скорость одобрения определяли жизнеспособность для бизнеса.",
          details: [
            "Спроектировал и реализовал одобрение ипотеки в один клик; упростил клиентский путь в регулируемой банковской среде",
            "Определил требования к интеграциям с Росреестром и кредитными бюро",
            "Координировал кросс‑функциональную поставку между бизнесом и техническими командами",
            "Поддержал готовность к запуску и соблюдение требований регулятора",
          ],
          outcome: null,
        },
        {
          date: "янв 2017 — ноя 2020",
          company: "Тинькофф Банк",
          role: "Продуктовый менеджер",
          summary:
            "<strong>Вёл</strong> продукт в нескольких направлениях — ипотека, недвижимость, партнёрская платформа, программы лояльности и рост в корпоративном сегменте. <strong>Ключевые результаты:</strong> <strong>+300</strong> партнёров, <strong>80%</strong> меньше усилий менеджеров, <strong>2×</strong> скорость документов, <strong>73%</strong> автоматизация через бота; ипотечная инициатива <strong>60k</strong> заявок (первый месяц), <strong>+1.79%</strong> сквозная конверсия, <strong>+0.7</strong> к оценке лояльности в приложении; вклад в клиентский опыт, отмеченный <strong>международной финансовой премией</strong>.",
          details: [
            "<strong>Программы лояльности и партнёрская платформа:</strong> вёл поставку; построил зону самообслуживания для партнёров; <strong>+300</strong> новых партнёров; <strong>80%</strong> снижение усилий менеджеров",
            "Заменил бумажные процессы на электронный документооборот; <strong>2×</strong> скорость обработки документов; <strong>73%</strong> обращений автоматизировались через поддержку бота",
            "Улучшил опыт в приложении (<strong>+0.7</strong> к оценке лояльности); вывел новое рабочее место менеджера; отвечал за аналитику и интеграции",
            "<strong>Ипотека и недвижимость:</strong> вёл поставку от минимально жизнеспособной версии до масштабирования; первую версию продаж недвижимости вывел за <strong>1.5 месяца</strong>",
            "<strong>60,000</strong> заявок в первый месяц через бесплатные каналы; <strong>+1.79%</strong> сквозная конверсия; личный кабинет и приложение для агентов по недвижимости",
            "Вёл аналитику и интеграции с банками, застройщиками и экосистемой; обеспечивал качество клиентского опыта на уровне международной финансовой премии",
            "<strong>Продукт по ипотеке:</strong> интеграции с партнёрскими банками и застройщиками недвижимости; улучшил опыт личного кабинета клиента",
          ],
          outcome: null,
        },
      ],
    },
    approach: {
      tag: "Как я веду",
      h2: "Подход к лидерству",
      p: "Опираюсь на <strong>решения</strong>: какую проблему решаем, какие инициативы определяют roadmap, что прекращаем и как измеряем успех. Сильная продуктовая работа живёт в деталях: states, permissions, edge cases, обратная связь пользователей и компромиссы, которые команда может реально выполнить.",
      flow: "Discovery → компромиссы → продуктовые правила → delivery → измеримые результаты",
    },
    fit: {
      tag: "Кому подойдёт",
      h2: "Кому я подхожу",
      companiesTitle: "Компании",
      companies: [
        "Компании в финтехе и цифровом банкинге, которые усиливают продуктовое лидерство, качество discovery и дисциплину приоритизации",
        "Платформы и маркетплейсы, где продуктом становятся партнёры, внутренние инструменты или регулируемые сценарии",
        "Организации, где рост упирается не в количество идей, а в продуктовые решения и качество реализации",
      ],
      situationsTitle: "Ситуации",
      situations: [
        "Вы нанимаете Senior Product Manager, Lead Product Manager или Product Lead с доказанным результатом на масштабе",
        "Вам нужны более сильный product judgement, ясные приоритеты, операционный ритм или кросс‑функциональное согласование",
        "Регулируемые домены или среды с тяжелыми интеграциями, где лидер отвечает за направление, последовательность, риски и результаты",
      ],
    },
    credibility: {
      credibilityTitle: "Компетенции",
      p1: "Работа над ипотечным продуктом, отмеченная международной финансовой премией. Веду системы в масштабе и в распределённых командах.",
      p2: "Сильная техническая база — степень магистра по программной инженерии — чтобы продуктовые решения и компромиссы с разработкой оставались предметными.",
      educationTitle: "Образование",
      education:
        "Московский государственный технический университет им. Н. Э. Баумана · магистр по направлению «Программная инженерия» · 2009—2015",
    },
    expertise: {
      tag: "Экспертиза",
      h2: "Экспертиза и лидерство",
      lead: "Глубина в продукте, доменах и ремесле — и как я вкладываюсь в следующее поколение.",
      card1Title: "Экспертиза",
      card1: [
        "<strong>Продуктовое лидерство</strong> — стратегия, discovery, приоритизация и операционная модель: как неопределённые задачи превращаются в сфокусированные продуктовые инициативы и ритм, который команды могут выдерживать.",
        "<strong>Домены</strong> — финансовые технологии, кадровые технологии, платформы и рост в сложных и чувствительных контекстах.",
        "<strong>Техническая глубина</strong> там, где она нужна: API, интеграции, аналитика, states, rules и edge cases — чтобы решения с разработкой оставались обоснованными и быстрыми.",
        "<strong>AI-assisted product workflow</strong> — использую AI для синтеза discovery, проверки гипотез, анализа edge cases, требований, прототипирования и implementation review, оставляя финальные решения за пользователями, бизнес‑приоритетами и системными ограничениями.",
      ],
      card2Title: "Лидерство и наставничество",
      card2: [
        "Наставник в <strong>школе финансовых технологий Тинькофф</strong> — потоки, где результаты говорят сами: <strong>8 из 9</strong> участников получили предложения о работе.",
        "<strong>Пять лет</strong> преподавал в МГТУ им. Баумана: вёл лекции, сопровождал проекты и курировал работы, в том числе с грантовой поддержкой.",
      ],
    },
    contact: {
      tag: "Контакты",
      h2: "Давайте обсудим",
      p1: "Рассматриваю роли Senior Product Manager, Lead Product Manager и Product Lead в финтехе, цифровом банкинге, платформенных продуктах и других сложных средах. Базируюсь в Дубае; открыт к международным командам и отдельным advisory / expert engagements.",
      p2: "Фокус на мандатах, где я отвечаю за продуктовое направление, discovery, компромиссы и сквозной результат. Если вы строите именно это — буду рад обсудить.",
      cvLabel: "Скачать резюме",
    },
    footerBack: "Наверх",
  },
};

function setText(el, value) {
  if (!el) return;
  el.textContent = value;
}

function setHTML(el, value) {
  if (!el) return;
  el.innerHTML = value;
}

function applyLanguage(lang) {
  const langSafe = lang === "ru" ? "ru" : "en";
  const dict = I18N[langSafe];

  document.documentElement.lang = langSafe;
  document.title = dict.title;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict.metaDescription);

  // Toggle highlight
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === langSafe;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  // Header nav
  setText(document.querySelector('a[href="#summary"]'), dict.nav.summary);
  setText(document.querySelector('a[href="#impact"]'), dict.nav.impact);
  setText(document.querySelector('a[href="#cases"]'), dict.nav.cases);
  setText(
    document.querySelector('a[href="#head-of-product"]'),
    dict.nav.capabilities
  );
  setText(
    document.querySelector('a[href="#experience"]'),
    dict.nav.experience
  );
  setText(
    document.querySelector('a[href="#expertise"]'),
    dict.nav.expertise
  );
  setText(document.querySelector('a[href="#contact"]'), dict.nav.contact);

  // Hero
  setText(document.querySelector(".hero .eyebrow"), dict.hero.eyebrow);
  setText(document.querySelector(".hero .hero-title-line"), dict.hero.titleLine);
  const heroLeads = document.querySelectorAll(".hero .hero-lead");
  if (heroLeads[0]) setText(heroLeads[0], dict.hero.lead1);
  if (heroLeads[1]) setText(heroLeads[1], dict.hero.lead2);

  const heroProof = document.querySelectorAll(".hero-proof li");
  if (heroProof[0]) setHTML(heroProof[0], dict.hero.proof1);
  if (heroProof[1]) setHTML(heroProof[1], dict.hero.proof2);
  if (heroProof[2]) setHTML(heroProof[2], dict.hero.proof3);
  if (heroProof[3]) setHTML(heroProof[3], dict.hero.proof4);

  setText(
    document.querySelector('.hero-actions a[href="#cases"]'),
    dict.hero.ctaCases
  );
  setText(
    document.querySelector('.hero-actions a[href="#contact"]'),
    dict.hero.ctaContact
  );

  // CV links
  const heroCv = document.querySelector(".cv-hero-download");
  if (heroCv) {
    heroCv.href = CV_BY_LANG[langSafe];
    setText(heroCv, dict.hero.ctaCv);
  }
  const contactCv = document.querySelector(".cv-contact-download");
  if (contactCv) {
    contactCv.href = CV_BY_LANG[langSafe];
    setText(contactCv, dict.contact.cvLabel);
  }

  // Executive card
  setText(document.querySelector(".exec-kicker"), dict.exec.kicker);
  setText(document.querySelector(".exec-role"), dict.exec.role);
  setText(document.querySelector(".exec-org"), dict.exec.org);
  setText(document.querySelector(".exec-blurb"), dict.exec.blurb);

  const execFactDivs = document.querySelectorAll(".exec-facts div");
  if (execFactDivs.length >= 3) {
    // Each div contains dt + dd
    const dts = execFactDivs[0].querySelectorAll("dt");
    const dds = execFactDivs[0].querySelectorAll("dd");
    if (dts[0]) setText(dts[0], dict.exec.focusLabel);
    if (dds[0]) setText(dds[0], dict.exec.focusValue);

    const dts1 = execFactDivs[1].querySelectorAll("dt");
    const dds1 = execFactDivs[1].querySelectorAll("dd");
    if (dts1[0]) setText(dts1[0], dict.exec.domainsLabel);
    if (dds1[0]) setText(dds1[0], dict.exec.domainsValue);

    const dts2 = execFactDivs[2].querySelectorAll("dt");
    const dds2 = execFactDivs[2].querySelectorAll("dd");
    if (dts2[0]) setText(dts2[0], dict.exec.scaleLabel);
    if (dds2[0]) setText(dds2[0], dict.exec.scaleValue);
  }

  // Executive summary
  setText(
    document.querySelector("#summary .section-tag"),
    dict.summary.tag
  );
  setText(document.querySelector("#summary h2"), dict.summary.h2);
  setHTML(document.querySelector("#summary .prose-card p"), dict.summary.p);

  // Key impact
  setText(document.querySelector("#impact .section-tag"), dict.impact.tag);
  setText(document.querySelector("#impact h2"), dict.impact.h2);
  setText(document.querySelector("#impact .section-lead"), dict.impact.lead);

  const impactItems = document.querySelectorAll(
    "#impact .impact-grid article.impact-item"
  );
  impactItems.forEach((article, idx) => {
    const item = dict.impact.items[idx];
    if (!item) return;
    const metric = article.querySelector(".impact-metric");
    const copy = article.querySelector(".impact-copy");
    if (metric) setHTML(metric, item.metric);
    if (copy) setText(copy, item.copy);
  });

  // Selected product work
  setText(document.querySelector("#cases .section-tag"), dict.cases.tag);
  setText(document.querySelector("#cases h2"), dict.cases.h2);
  setText(document.querySelector("#cases .section-lead"), dict.cases.lead);

  const caseItems = document.querySelectorAll("#cases article.case-study");
  caseItems.forEach((article, idx) => {
    const item = dict.cases.items[idx];
    if (!item) return;
    const tag = article.querySelector(".case-study-tag");
    const title = article.querySelector(".case-study-title");
    const bodyPs = article.querySelectorAll(".case-study-body p");
    if (tag) setText(tag, item.meta);
    if (title) setText(title, item.title);
    if (bodyPs[0]) setText(bodyPs[0], item.context);
    if (bodyPs[1]) setHTML(bodyPs[1], item.outcome);
  });

  const plaiItem = dict.cases.items[3];
  const plaiCase = document.querySelector(".case-study-plai");
  if (plaiCase && plaiItem) {
    const detailBlocks = plaiCase.querySelectorAll(".case-detail-grid > div");
    detailBlocks.forEach((block, idx) => {
      const detail = plaiItem.details?.[idx];
      if (!detail) return;
      setText(block.querySelector("h4"), detail.title);
      setText(block.querySelector("p"), detail.body);
    });

    const chips = plaiCase.querySelectorAll(".case-chips span");
    plaiItem.chips?.forEach((chip, idx) => {
      if (chips[idx]) setText(chips[idx], chip);
    });

    const actions = plaiCase.querySelectorAll(".case-actions a");
    plaiItem.ctas?.forEach((label, idx) => {
      if (actions[idx]) setText(actions[idx], label);
    });
  }

  // Capabilities
  setText(
    document.querySelector("#head-of-product .section-tag"),
    dict.capabilities.tag
  );
  setText(document.querySelector("#head-of-product h2"), dict.capabilities.h2);

  const capCards = document.querySelectorAll(
    "#head-of-product .cards-grid article.info-card"
  );
  capCards.forEach((card, idx) => {
    const c = dict.capabilities.cards[idx];
    if (!c) return;
    const h3 = card.querySelector("h3");
    const p = card.querySelector("p");
    if (h3) setText(h3, c.title);
    if (p) setText(p, c.p);
  });

  // Experience
  setText(document.querySelector("#experience .section-tag"), dict.experience.tag);
  setText(document.querySelector("#experience h2"), dict.experience.h2);
  setText(document.querySelector("#experience .section-lead"), dict.experience.lead);

  const expItems = document.querySelectorAll(
    "#experience .timeline article.timeline-item"
  );
  expItems.forEach((item, idx) => {
    const data = dict.experience.items[idx];
    if (!data) return;

    const metaSpan = item.querySelector(".timeline-meta span");
    const metaStrong = item.querySelector(".timeline-meta strong");
    const roleH3 = item.querySelector(".timeline-content h3");
    const summaryP = item.querySelector(".timeline-summary");
    if (metaSpan) setText(metaSpan, data.date);
    if (metaStrong) setText(metaStrong, data.company);
    if (roleH3) setText(roleH3, data.role);
    if (summaryP) setHTML(summaryP, data.summary);

    const detailLis = item.querySelectorAll(".experience-list li");
    data.details.forEach((txt, liIdx) => {
      if (!detailLis[liIdx]) return;
      // Some details contain <strong> metrics.
      const isHTML = txt.includes("<strong>");
      if (isHTML) setHTML(detailLis[liIdx], txt);
      else setText(detailLis[liIdx], txt);
    });

    const outcomeP = item.querySelector(".experience-outcome");
    if (outcomeP) {
      if (data.outcome) setHTML(outcomeP, data.outcome);
    }
  });

  // Leadership approach
  setText(document.querySelector("#approach .section-tag"), dict.approach.tag);
  setText(document.querySelector("#approach h2"), dict.approach.h2);

  const approachPs = document.querySelectorAll("#approach .prose-card p");
  if (approachPs[0]) setHTML(approachPs[0], dict.approach.p);
  if (approachPs[1]) setText(approachPs[1], dict.approach.flow);

  // Fit
  setText(document.querySelector("#fit .section-tag"), dict.fit.tag);
  setText(document.querySelector("#fit h2"), dict.fit.h2);
  const fitCards = document.querySelectorAll("#fit .fit-card");
  if (fitCards[0]) {
    setText(fitCards[0].querySelector("h3"), dict.fit.companiesTitle);
    const lis = fitCards[0].querySelectorAll("li");
    dict.fit.companies.forEach((t, i) => {
      if (lis[i]) setText(lis[i], t);
    });
  }
  if (fitCards[1]) {
    setText(fitCards[1].querySelector("h3"), dict.fit.situationsTitle);
    const lis = fitCards[1].querySelectorAll("li");
    dict.fit.situations.forEach((t, i) => {
      if (lis[i]) setText(lis[i], t);
    });
  }

  // Credibility
  const credBlocks = document.querySelectorAll("#credibility .credibility-block");
  if (credBlocks[0]) {
    setText(credBlocks[0].querySelector(".credibility-title"), dict.credibility.credibilityTitle);
    const ps = credBlocks[0].querySelectorAll("p.muted");
    if (ps[0]) setText(ps[0], dict.credibility.p1);
    if (ps[1]) setText(ps[1], dict.credibility.p2);
  }
  if (credBlocks[1]) {
    setText(credBlocks[1].querySelector(".credibility-title"), dict.credibility.educationTitle);
    const p = credBlocks[1].querySelector("p.muted");
    if (p) setText(p, dict.credibility.education);
  }

  // Expertise & Leadership
  setText(document.querySelector("#expertise .section-tag"), dict.expertise.tag);
  setText(document.querySelector("#expertise h2"), dict.expertise.h2);
  setText(document.querySelector("#expertise .section-lead"), dict.expertise.lead);

  const expertiseCards = document.querySelectorAll("#expertise .fit-card");
  if (expertiseCards[0]) {
    setText(expertiseCards[0].querySelector("h3"), dict.expertise.card1Title);
    const ps = expertiseCards[0].querySelectorAll("p");
    dict.expertise.card1.forEach((html, i) => {
      if (ps[i]) setHTML(ps[i], html);
    });
  }
  if (expertiseCards[1]) {
    setText(expertiseCards[1].querySelector("h3"), dict.expertise.card2Title);
    const ps = expertiseCards[1].querySelectorAll("p");
    dict.expertise.card2.forEach((html, i) => {
      if (ps[i]) setHTML(ps[i], html);
    });
  }

  // Contact
  setText(document.querySelector("#contact .section-tag"), dict.contact.tag);
  setText(document.querySelector("#contact h2"), dict.contact.h2);
  const contactPs = document.querySelectorAll("#contact .contact-text");
  if (contactPs[0]) {
    // First is not muted, second is muted.
    setHTML(contactPs[0], dict.contact.p1.replace(/\n/g, " "));
  }
  if (contactPs[1]) setText(contactPs[1], dict.contact.p2);

  // Footer
  setText(document.querySelector(".footer a[href=\"#top\"]"), dict.footerBack);
}

// Init + persistence
const savedLang = localStorage.getItem("lang");
const initialLang = savedLang === "ru" ? "ru" : "en";
applyLanguage(initialLang);

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const nextLang = btn.dataset.lang === "ru" ? "ru" : "en";
    localStorage.setItem("lang", nextLang);
    applyLanguage(nextLang);
  });
});
