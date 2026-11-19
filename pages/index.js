import { useMemo, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock3,
  Menu,
  X,
  Stethoscope,
  Syringe,
  Microscope,
  Scan,
  ShieldCheck,
  HeartPulse,
  Pill,
  Check,
  CalendarDays,
  Activity,
  Droplets,
  ClipboardList,
  Mail,
  PawPrint,
  Search,
  ChevronDown
} from 'lucide-react';

import AnimalSlider from '../src/components/AnimalSlider';
import ExpandableText from '../src/components/ExpandableText';
import { clinic } from '../src/data/clinic';
import { priceList, formatPrice } from '../src/data/priceList';

const iconMap = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  microscope: Microscope,
  scan: Scan,
  'shield-check': ShieldCheck,
  'heart-pulse': HeartPulse,
  pill: Pill
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [priceSearch, setPriceSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все услуги');
  const [priceOpen, setPriceOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const categories = [
    'Все услуги',
    ...priceList.map((category) => category.category)
  ];

  const filteredPriceList = useMemo(() => {
    const query = priceSearch.trim().toLowerCase();

    return priceList
      .filter((category) => {
        return (
          activeCategory === 'Все услуги' ||
          category.category === activeCategory
        );
      })
      .map((category) => ({
        ...category,
        items: category.items.filter(([name]) =>
          name.toLowerCase().includes(query)
        )
      }))
      .filter((category) => category.items.length > 0);
  }, [priceSearch, activeCategory]);

  const totalPriceItems = priceList.reduce(
    (total, category) => total + category.items.length,
    0
  );

  return (
    <>
      <Head>
        <title>ВетОтвет — ветеринарная клиника в Электростали</title>
        <meta
          name="description"
          content="Ветеринарная клиника ВетОтвет в Электростали. Ветеринарные услуги, диагностика, вакцинация и забота о здоровье домашних животных. Проспект Ленина, 26."
        />
        <meta name="theme-color" content="#1769d2" />
        <meta property="og:title" content="ВетОтвет — ветеринарная клиника" />
        <meta
          property="og:description"
          content="Забота о здоровье ваших питомцев. Ветеринарная клиника в Электростали."
        />
        <meta property="og:type" content="website" />
      </Head>

      <header className="header">
        <div className="container header__inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt="Логотип ВетОтвет"
              width={58}
              height={58}
              priority
            />
            <span className="logo__text">
              <strong>ВетОтвет</strong>
              <small>Ветеринарная клиника</small>
            </span>
          </a>

          <button
            className="header__burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
            <a href="#about" onClick={closeMenu}>О клинике</a>
            <a href="#services" onClick={closeMenu}>Услуги</a>
            <a href="#checkup" onClick={closeMenu}>Диспансеризация</a>
            <a href="#price" onClick={closeMenu}>Цены</a>
            <a href="#contacts" onClick={closeMenu}>Контакты</a>
          </nav>

          <a href={`tel:${clinic.phone}`} className="header__call">
            <Phone size={17} />
            <span>{clinic.phoneDisplay}</span>
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <div id="home">
          <AnimalSlider slides={clinic.slides} />
        </div>

        {/* QUICK INFO */}
        <section className="quick-info">
          <div className="container quick-info__grid">
            <div className="quick-info__item">
              <div className="quick-info__icon"><MapPin /></div>
              <div>
                <span>Наш адрес</span>
                <strong>{clinic.address}</strong>
                <small>{clinic.city}</small>
              </div>
            </div>

            <div className="quick-info__item">
              <div className="quick-info__icon"><Clock3 /></div>
              <div>
                <span>График работы</span>
                <strong>{clinic.workingHours}</strong>
                <small>Уточняйте перед посещением</small>
              </div>
            </div>

            <div className="quick-info__item">
              <div className="quick-info__icon"><Phone /></div>
              <div>
                <span>Запись на приём</span>
                <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>
                <small>Свяжитесь с нами</small>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="container about__grid">
            <div className="about__visual">
              <div className="about__illustration">
                <div className="about__illustration-icon"><PawPrint size={58} /></div>
                <span>ВЕТОТВЕТ</span>
                <strong>Здоровье питомца — наша забота</strong>
                <p>Внимание, профессиональный подход и забота о каждом животном</p>
              </div>
              <div className="about__floating">
                <PawPrint size={25} />
                <div>
                  <strong>ВетОтвет</strong>
                  <span>Забота о каждом питомце</span>
                </div>
              </div>
            </div>

            

            <div className="about__content">
              <span className="section-label">О НАС</span>
              <h2>
                Они не могут рассказать, что болит.
                <span> Мы можем помочь.</span>
              </h2>
              <p>
                Здоровье домашнего животного требует внимания, заботы
                и своевременной ветеринарной помощи. Именно поэтому важно
                не откладывать осмотр и следить за самочувствием питомца.
              </p>
              <p>
                Ветеринарная клиника «ВетОтвет» — место, где владельцы
                домашних животных могут обратиться за консультацией,
                диагностикой и необходимыми ветеринарными услугами.
              </p>

              <div className="about__points">
                <div><Check /> Внимание к каждому питомцу</div>
                <div><Check /> Профилактика и диагностика</div>
                <div><Check /> Рекомендации по уходу за животными</div>
              </div>

              <a href="#services" className="button button--dark">
                Познакомиться с услугами <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services" id="services">
          <div className="container">
            <div className="section-top">
              <div>
                <span className="section-label">НАПРАВЛЕНИЯ РАБОТЫ</span>
                <h2>Чем мы можем помочь?</h2>
              </div>
              <ExpandableText shortText="Мы предоставляем широкий спектр ветеринарных услуг для домашних животных." fullText="В ветеринарном кабинете «ВетОтвет» доступны консультации и клинические осмотры, вакцинация, диагностика, лабораторные исследования, УЗИ, гигиенические процедуры, лечебные манипуляции и другие ветеринарные услуги. Мы помогаем владельцам заботиться о здоровье питомцев на разных этапах их жизни. С перечнем услуг и их стоимостью можно ознакомиться в прайс-листе ниже." />
            </div>

            <div className="services__grid">
              {clinic.services.map((service) => {
                const Icon = iconMap[service.icon] || Stethoscope;

                return (
                  <article className="service-card" key={service.id}>
                    <div className="service-card__top">
                      <div className="service-card__icon"><Icon /></div>
                      <span>{service.number}</span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <div className="service-card__bottom">
                      <strong>{service.price}</strong>
                      <a
                        href={`tel:${clinic.phone}`}
                        aria-label={`Уточнить стоимость: ${service.title}`}
                      >
                        <ArrowUpRight />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CHECKUP */}
        <section className="section checkup" id="checkup">
          <div className="container">
            <div className="checkup__heading">
              <div>
                <span className="section-label">ПРОФИЛАКТИКА</span>
                <h2>Здоровье начинается с проверки</h2>
              </div>
              <ExpandableText shortText="Диспансеризация помогает обнаружить скрытые заболевания, оценить состояние организма и вовремя принять меры." fullText="Даже если питомец выглядит здоровым, некоторые заболевания могут долгое время протекать без заметных симптомов. Регулярное обследование помогает контролировать основные показатели здоровья и не пропустить возможные нарушения." />
            </div>

            <div className="checkup__intro">
              <div className="checkup__intro-icon"><ClipboardList /></div>
              <div>
                <h3>Что такое диспансеризация?</h3>
                <ExpandableText shortText="Это комплекс мероприятий, направленных на всестороннее обследование животного с целью выявить скрыто протекающие или хронические заболевания." fullText="Диспансеризация позволяет оценить общее состояние организма, обнаружить заболевания на ранних стадиях и своевременно принять меры. Программа обследования подбирается с учётом возраста, породы, образа жизни и индивидуальных особенностей животного. Для молодых животных предусмотрена оценка развития, для питомцев от 2 до 8 лет — базовое обследование, а для животных старше 8 лет — повышенное внимание к возрастным изменениям и хроническим заболеваниям. Рекомендуется проходить обследование ежегодно." />
              </div>
            </div>

            <div className="checkup__ages">
              <article>
                <span>Молодые животные</span>
                <h3>Контроль развития</h3>
                <p>Оценка состояния здоровья и рекомендации по профилактике.</p>
              </article>
              <article>
                <span>От 2 до 8 лет</span>
                <h3>Базовое обследование</h3>
                <p>Контроль основных показателей здоровья взрослого животного.</p>
              </article>
              <article>
                <span>Старше 8 лет</span>
                <h3>Возрастной контроль</h3>
                <p>Повышенное внимание к возрастным изменениям и хроническим заболеваниям.</p>
              </article>
            </div>

            <div className="checkup__frequency">
              <CalendarDays />
              <p>
                <strong>Рекомендуется проходить обследование ежегодно.</strong>
                Индивидуальный график определяется ветеринарным специалистом
                с учётом возраста и состояния животного.
              </p>
            </div>

            <h3 className="checkup__subtitle">Как подготовиться к анализам</h3>

            <div className="checkup__tests">
              <article>
                <div><Activity /></div>
                <h3>Кровь</h3>
                <p>
                  Необходимость голодной паузы и ограничения воды зависит
                  от вида исследования и состояния питомца. Заранее
                  согласуйте подготовку со специалистом.
                </p>
              </article>

              <article>
                <div><Droplets /></div>
                <h3>Моча</h3>
                <p>
                  Соберите среднюю порцию в чистый контейнер или шприц.
                  Для кошек предварительно вымойте лоток. При необходимости
                  используйте специальный не впитывающий наполнитель.
                </p>
              </article>

              <article>
                <div><ClipboardList /></div>
                <h3>Кал</h3>
                <p>
                  Соберите среднюю порцию материала в чистую баночку.
                  У кошек постарайтесь исключить попадание наполнителя.
                </p>
              </article>
            </div>

            <div className="checkup__warning">
              <strong>Обратите внимание</strong>
              <p>
                Полная диспансеризация собак и кошек проводится при условии
                одновременной сдачи анализов крови, мочи и кала. Требования
                к подготовке необходимо согласовать с ветеринарным
                специалистом. Не ограничивайте самостоятельно кормление
                или воду котятам, щенкам, пожилым и хронически больным животным.
              </p>
            </div>

            <div className="checkup__bottom">
              <div>
                <h3>Позаботьтесь о здоровье питомца</h3>
                <p>Уточните детали обследования по телефону клиники.</p>
              </div>
              <a href={`tel:${clinic.phone}`} className="button button--dark">
                Записаться <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* FULL PRICE LIST */}
        <section className="section price" id="price">
          <div className="container">
            <div className="price__heading">
              <span className="section-label">ПРАЙС-ЛИСТ</span>
              <h2>Стоимость ветеринарных услуг</h2>
              <p>
                Актуальный перечень услуг ветеринарного кабинета «ВетОтвет».
                В прайсе {totalPriceItems} позиций. Для уточнения стоимости
                и записи свяжитесь с нами.
              </p>
            </div>

            <button
              type="button"
              className="price-toggle"
              aria-expanded={priceOpen}
              onClick={() => setPriceOpen((value) => !value)}
            >
              <span>
                {priceOpen ? 'Свернуть прайс-лист' : 'Подробнее — посмотреть все цены'}
              </span>
              <span className="price-toggle__icon">
                {priceOpen ? '−' : '+'}
              </span>
            </button>

            {priceOpen && (
              <div className="price__details">
                <div className="price-filter">
                  <div className="price-filter__search">
                    <Search size={20} />
                    <input
                      type="search"
                      value={priceSearch}
                      onChange={(event) => setPriceSearch(event.target.value)}
                      placeholder="Найти услугу..."
                      aria-label="Поиск услуги в прайс-листе"
                    />
                    {priceSearch && (
                      <button
                        type="button"
                        onClick={() => setPriceSearch('')}
                        aria-label="Очистить поиск"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>

                  <div className="price-filter__categories">
                    {categories.map((category) => (
                      <button
                        type="button"
                        key={category}
                        className={
                          activeCategory === category
                            ? 'price-filter__category active'
                            : 'price-filter__category'
                        }
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="price-list">
                  {filteredPriceList.length > 0 ? (
                    filteredPriceList.map((category) => (
                      <div
                        className="price-list__category"
                        key={category.category}
                      >
                        <div className="price-list__heading">
                          <h3>{category.category}</h3>
                          <span>{category.items.length} поз.</span>
                        </div>

                        <div className="price-list__body">
                          {category.items.map(([name, price], index) => (
                            <div
                              className="price-list__item"
                              key={`${category.category}-${index}`}
                            >
                              <span className="price-list__name">{name}</span>
                              <strong className="price-list__value">
                                {formatPrice(price)}
                              </strong>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="price-list__empty">
                      <Search size={30} />
                      <h3>Услуги не найдены</h3>
                      <p>
                        Попробуйте изменить запрос или выбрать другую категорию.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setPriceSearch('');
                          setActiveCategory('Все услуги');
                        }}
                      >
                        Сбросить фильтры
                      </button>
                    </div>
                  )}
                </div>

                <div className="price__note">
                  <div>
                    <Clock3 size={20} />
                    <p>
                      <strong>Прайс обновлён 23 февраля 2026 года.</strong>
                      Стоимость отдельных процедур может зависеть от состояния
                      животного и особенностей оказания услуги. Уточняйте детали
                      по телефону.
                    </p>
                  </div>
                  <a href={`tel:${clinic.phone}`} className="button button--dark">
                    <Phone size={17} /> Позвонить в клинику
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="section advantages">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">НАШ ПОДХОД</span>
              <h2>Забота в каждой детали</h2>
            </div>

            <div className="advantages__grid">
              {clinic.advantages.map((item) => (
                <article className="advantage-card" key={item.number}>
                  <span>{item.number}</span>
                  <div className="advantage-card__check"><Check /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTS */}
        <section className="section contacts" id="contacts">
          <div className="container contacts__grid">
            <div className="contacts__content">
              <span className="section-label">КОНТАКТЫ</span>
              <h2>Будем рады видеть вас и вашего питомца</h2>
              <p>
                Свяжитесь с нами, чтобы уточнить информацию об услугах
                и договориться о посещении клиники.
              </p>

              <div className="contact-line">
                <div><Phone /></div>
                <span>
                  <small>Телефон</small>
                  <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>
                </span>
              </div>

              <div className="contact-line">
                <div><Mail /></div>
                <span>
                  <small>Электронная почта</small>
                  <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
                </span>
              </div>

              <div className="contact-line">
                <div><MapPin /></div>
                <span>
                  <small>Адрес клиники</small>
                  <strong>{clinic.address}</strong>
                  <small>{clinic.city}</small>
                </span>
              </div>

              <div className="contact-line">
                <div><Clock3 /></div>
                <span>
                  <small>График работы</small>
                  <strong>{clinic.workingHours}</strong>
                </span>
              </div>

              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="button button--dark contacts__map-button"
              >
                Построить маршрут <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contacts__visual contacts__visual--info">
              <div className="contacts__visual-overlay">
                <PawPrint size={42} />
                <strong>ВетОтвет</strong>
                <span>Мы заботимся о здоровье ваших питомцев</span>
                <a href={`tel:`}>{clinic.phoneDisplay}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <a href="#home" className="logo logo--footer">
              <Image src="/images/logo.png" alt="ВетОтвет" width={48} height={48} />
              <span className="logo__text">
                <strong>ВетОтвет</strong>
                <small>Ветеринарная клиника</small>
              </span>
            </a>

            <p>Забота о здоровье тех, кто делает нашу жизнь счастливее.</p>

            <a href={`tel:${clinic.phone}`} className="footer__phone">
              <Phone size={17} /> {clinic.phoneDisplay}
            </a>
          </div>

          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} ВетОтвет</span>
            <span>{clinic.city}, {clinic.address}</span>
            <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
