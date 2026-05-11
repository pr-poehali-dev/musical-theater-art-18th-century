import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/19f61873-217e-4bda-8811-4a6694957843/files/585a802b-5184-425d-968e-297c1fc94962.jpg";
const THEATER_IMAGE = "https://cdn.poehali.dev/projects/19f61873-217e-4bda-8811-4a6694957843/files/7acc0cc8-2feb-427e-a61e-101aab25d631.jpg";
const COMPOSER_IMAGE = "https://cdn.poehali.dev/projects/19f61873-217e-4bda-8811-4a6694957843/files/a0ae05d8-c0d8-4b8a-b141-df04bdfdd897.jpg";

const courses = [
  {
    id: 1,
    tag: "Музыка",
    title: "Симфония эпохи Просвещения",
    desc: "От барокко к классицизму: Гайдн, Моцарт и рождение симфонической формы",
    lessons: 12,
    duration: "6 часов",
    level: "Базовый",
    image: COMPOSER_IMAGE,
    color: "from-amber-900/60 to-transparent",
  },
  {
    id: 2,
    tag: "Театр",
    title: "Опера seria и опера buffa",
    desc: "Придворные интриги и народный смех: два лика музыкального театра XVIII столетия",
    lessons: 10,
    duration: "5 часов",
    level: "Средний",
    image: THEATER_IMAGE,
    color: "from-red-900/60 to-transparent",
  },
  {
    id: 3,
    tag: "История",
    title: "Аристократические салоны",
    desc: "Как меценаты формировали культуру: от Версаля до петербургских дворцов",
    lessons: 8,
    duration: "4 часа",
    level: "Базовый",
    image: HERO_IMAGE,
    color: "from-stone-900/60 to-transparent",
  },
];

const materials = [
  {
    icon: "Music",
    title: "Гайдн: 104 симфонии",
    type: "Аудио-лекция",
    time: "45 мин",
    desc: "Эволюция симфонической формы в творчестве «отца симфонии»",
  },
  {
    icon: "Drama",
    title: "Глюк и реформа оперы",
    type: "Статья",
    time: "20 мин",
    desc: "Как Кристоф Глюк перевернул представления об оперном искусстве",
  },
  {
    icon: "BookOpen",
    title: "Театр эпохи Екатерины II",
    type: "Видео-лекция",
    time: "1 ч 10 мин",
    desc: "Русский придворный театр и его связь с европейскими традициями",
  },
  {
    icon: "Scroll",
    title: "Инструменты барокко",
    type: "Иллюстрированный гид",
    time: "35 мин",
    desc: "Клавесин, виола да гамба, лютня — звуки ушедшей эпохи",
  },
  {
    icon: "Users",
    title: "Моцарт и Сальери",
    type: "Документальный фильм",
    time: "52 мин",
    desc: "Факты и мифы о двух великих композиторах — разбор исторических источников",
  },
  {
    icon: "Feather",
    title: "Либретто и поэзия",
    type: "Семинар",
    time: "1 ч 30 мин",
    desc: "Метастазио, да Понте и литературная основа оперного искусства XVIII века",
  },
];

const stats = [
  { value: "12+", label: "курсов" },
  { value: "80+", label: "материалов" },
  { value: "XVIII", label: "столетие" },
  { value: "∞", label: "вдохновения" },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[hsl(20,10%,6%)] font-golos overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[hsl(20,10%,5%)]/95 backdrop-blur-md border-b border-[hsl(40,15%,18%)]" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-cormorant text-xl font-semibold text-gold tracking-wide">
            Арс Музика
          </button>
          <div className="hidden md:flex items-center gap-8">
            {[["hero","Главная"],["courses","Курсы"],["materials","Материалы"],["contact","Контакты"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="nav-link text-sm tracking-wide text-[hsl(40,15%,65%)] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
          <button className="btn-gold px-5 py-2 rounded-lg text-sm font-golos hidden md:block">
            <span>Начать обучение</span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20,10%,4%)]/95 via-[hsl(20,10%,6%)]/70 to-[hsl(20,10%,6%)]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20,10%,6%)] via-transparent to-transparent" />

        <div className="absolute top-1/3 right-0 w-px h-48 bg-gradient-to-b from-transparent via-gold to-transparent opacity-30" />
        <div className="absolute top-1/2 left-0 w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[hsl(43,74%,58%)]/30 bg-[hsl(43,74%,58%)]/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-float" />
              <span className="text-gold text-xs font-golos tracking-[0.2em] uppercase">Образовательная платформа</span>
            </div>

            <h1 className="font-cormorant text-6xl md:text-8xl font-bold leading-[0.95] mb-6 animate-fade-up delay-100" style={{ opacity: 0, animationFillMode: "forwards" }}>
              <span className="text-[hsl(40,30%,92%)]">Музыка</span>
              <br />
              <span className="text-[hsl(40,30%,92%)]">&amp; Театр</span>
              <br />
              <span className="shimmer-text">XVIII века</span>
            </h1>

            <p className="text-[hsl(40,15%,65%)] text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-golos animate-fade-up delay-300" style={{ opacity: 0, animationFillMode: "forwards" }}>
              Погрузитесь в золотой век европейского искусства — эпоху Моцарта, Глюка, Гайдна
              и расцвета оперного театра. Курсы, лекции и архивные материалы.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-400" style={{ opacity: 0, animationFillMode: "forwards" }}>
              <button onClick={() => scrollTo("courses")} className="btn-gold px-8 py-3.5 rounded-xl text-base font-golos">
                <span className="flex items-center gap-2">
                  <Icon name="GraduationCap" size={18} />
                  Изучить курсы
                </span>
              </button>
              <button
                onClick={() => scrollTo("materials")}
                className="px-8 py-3.5 rounded-xl text-base border border-[hsl(40,15%,30%)] text-[hsl(40,30%,80%)] hover:border-[hsl(43,74%,58%)] hover:text-gold transition-all duration-300 flex items-center gap-2"
              >
                <Icon name="Library" size={18} />
                Все материалы
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-[hsl(40,15%,14%)] bg-[hsl(20,10%,5%)]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-cormorant text-3xl font-bold text-gold">{s.value}</div>
                <div className="text-[hsl(40,15%,55%)] text-xs uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="section-divider mb-4" />
              <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-[hsl(40,30%,92%)]">
                Курсы
              </h2>
              <p className="text-[hsl(40,15%,55%)] mt-3 text-base max-w-md">
                Структурированные программы от экспертов в области исторического музыковедения и театроведения
              </p>
            </div>
            <button className="self-start md:self-auto flex items-center gap-2 text-gold border border-[hsl(43,74%,58%)]/30 px-5 py-2.5 rounded-lg hover:bg-[hsl(43,74%,58%)]/10 transition-all duration-300 text-sm">
              Все курсы <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <div
                key={c.id}
                className="card-hover group rounded-2xl overflow-hidden border border-[hsl(40,15%,14%)] bg-[hsl(20,12%,9%)] cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${c.color}`} />
                  <span className="absolute top-4 left-4 text-xs font-golos font-semibold tracking-widest uppercase bg-[hsl(43,74%,58%)]/20 text-gold border border-[hsl(43,74%,58%)]/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {c.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-cormorant text-2xl font-semibold text-[hsl(40,30%,92%)] mb-2 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-[hsl(40,15%,55%)] text-sm leading-relaxed mb-5">{c.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-[hsl(40,15%,45%)] mb-5">
                    <span className="flex items-center gap-1.5">
                      <Icon name="BookOpen" size={13} />
                      {c.lessons} уроков
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="Clock" size={13} />
                      {c.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="BarChart2" size={13} />
                      {c.level}
                    </span>
                  </div>
                  <button className="w-full btn-gold py-2.5 rounded-lg text-sm">
                    <span>Записаться на курс</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${THEATER_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-[hsl(350,40%,8%)]/90" />
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(184,134,46,0.04) 40px, rgba(184,134,46,0.04) 41px)"
        }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="font-cormorant text-7xl text-[hsl(43,74%,58%)]/20 font-bold leading-none select-none mb-4">❝</div>
          <blockquote className="font-cormorant text-3xl md:text-4xl italic text-[hsl(40,30%,88%)] leading-relaxed mb-8">
            Музыка — это откровение выше мудрости и философии
          </blockquote>
          <cite className="text-gold text-sm tracking-widest uppercase font-golos">— Людвиг ван Бетховен</cite>
          <div className="mt-10">
            <button className="btn-gold px-8 py-3.5 rounded-xl text-base font-golos">
              <span className="flex items-center gap-2">
                <Icon name="Play" size={18} />
                Начать бесплатно
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="section-divider mb-4" />
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-[hsl(40,30%,92%)]">
              Материалы
            </h2>
            <p className="text-[hsl(40,15%,55%)] mt-3 text-base max-w-md">
              Лекции, статьи, видео и интерактивные гиды — всё для глубокого погружения в эпоху
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((m, i) => (
              <div
                key={i}
                className="group flex gap-4 p-5 rounded-xl border border-[hsl(40,15%,14%)] bg-[hsl(20,12%,9%)] hover:border-[hsl(43,74%,58%)]/30 hover:bg-[hsl(20,12%,11%)] transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(43,74%,58%)]/10 border border-[hsl(43,74%,58%)]/20 flex items-center justify-center group-hover:bg-[hsl(43,74%,58%)]/20 transition-all duration-300">
                  <Icon name={m.icon} fallback="BookOpen" size={18} className="text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-golos uppercase tracking-widest text-[hsl(350,60%,55%)] font-semibold">{m.type}</span>
                    <span className="text-[hsl(40,15%,35%)] text-xs">·</span>
                    <span className="text-[hsl(40,15%,45%)] text-xs">{m.time}</span>
                  </div>
                  <h4 className="font-golos font-semibold text-[hsl(40,30%,88%)] text-sm mb-1 group-hover:text-gold transition-colors duration-300">
                    {m.title}
                  </h4>
                  <p className="text-[hsl(40,15%,50%)] text-xs leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 text-gold border border-[hsl(43,74%,58%)]/30 px-8 py-3 rounded-xl hover:bg-[hsl(43,74%,58%)]/10 transition-all duration-300 text-sm font-golos">
              Смотреть все материалы <Icon name="ChevronDown" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 border-t border-[hsl(40,15%,12%)]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, transparent, hsl(43,74%,58%), transparent)" }} />
          </div>
          <h2 className="font-cormorant text-5xl font-bold text-[hsl(40,30%,92%)] mb-4">
            Присоединиться
          </h2>
          <p className="text-[hsl(40,15%,55%)] mb-8 text-base leading-relaxed">
            Оставьте свой email — и мы пришлём расписание ближайших лекций и открытый доступ к первому уроку.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-[hsl(20,12%,11%)] border border-[hsl(40,15%,18%)] text-[hsl(40,30%,88%)] rounded-xl px-4 py-3 text-sm font-golos placeholder:text-[hsl(40,15%,40%)] focus:outline-none focus:border-[hsl(43,74%,58%)]/50 transition-colors"
            />
            <button className="btn-gold px-6 py-3 rounded-xl text-sm font-golos whitespace-nowrap">
              <span>Подписаться</span>
            </button>
          </div>
          <p className="text-[hsl(40,15%,38%)] text-xs mt-4">Без спама. Отписка в один клик.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[hsl(40,15%,12%)] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-cormorant text-xl font-semibold text-gold">Арс Музика</div>
          <p className="text-[hsl(40,15%,38%)] text-xs">
            © 2024 · Образовательная платформа «Музыкальное и театральное искусство XVIII века»
          </p>
          <div className="flex items-center gap-5">
            {["Курсы", "Материалы", "О проекте", "Контакты"].map((l) => (
              <button key={l} className="text-[hsl(40,15%,45%)] text-xs hover:text-gold transition-colors nav-link">
                {l}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}