import { useMemo, useState } from 'react';
import { Search, Phone, ArrowUpRight } from 'lucide-react';
import { priceCategories } from '../data/price';

export default function PriceList({ phone }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return priceCategories
      .filter(category =>
        activeCategory === 'all' || category.id === activeCategory
      )
      .map(category => ({
        ...category,
        items: category.items.filter(([name]) =>
          name.toLowerCase().includes(query)
        )
      }))
      .filter(category => category.items.length > 0);
  }, [activeCategory, search]);

  const totalCount = priceCategories.reduce(
    (sum, category) => sum + category.items.length,
    0
  );

  return (
    <section className="section price-list" id="price">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">
            <span className="eyebrow__line" />
            СТОИМОСТЬ УСЛУГ
          </span>

          <h2>Прайс-лист ветеринарного кабинета</h2>

          <p>
            Стоимость ветеринарных услуг клиники «ВетОтвет».
            Выберите категорию или найдите нужную услугу через поиск.
          </p>
        </div>

        <div className="price-list__meta">
          <span>Актуальность прайса: 23 февраля 2026 года</span>
          <span>{totalCount} позиций</span>
        </div>

        <label className="price-search">
          <Search size={19} />
          <input
            type="search"
            value={search}
            onChange={event => setSearch(event.target.value)}
            placeholder="Найти услугу..."
            aria-label="Поиск услуги в прайс-листе"
          />
        </label>

        <div className="price-tabs" aria-label="Категории прайс-листа">
          <button
            className={activeCategory === 'all' ? 'is-active' : ''}
            onClick={() => setActiveCategory('all')}
          >
            Все услуги
          </button>

          {priceCategories.map(category => (
            <button
              key={category.id}
              className={activeCategory === category.id ? 'is-active' : ''}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="price-list__groups">
          {filteredCategories.length > 0 ? (
            filteredCategories.map(category => (
              <section className="price-category" key={category.id}>
                <div className="price-category__heading">
                  <h3>{category.title}</h3>
                  <span>{category.items.length} услуг</span>
                </div>

                <div className="price-table">
                  {category.items.map(([name, price], index) => (
                    <div className="price-row" key={`${category.id}-${index}`}>
                      <span className="price-row__name">{name}</span>
                      <strong className="price-row__value">
                        {price.toLocaleString('ru-RU')} ₽
                      </strong>
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="price-empty">
              <Search size={30} />
              <h3>Услуги не найдены</h3>
              <p>Попробуйте изменить запрос или выбрать другую категорию.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory('all');
                }}
              >
                Сбросить поиск
              </button>
            </div>
          )}
        </div>

        <div className="price-list__note">
          <strong>Важно:</strong> окончательная стоимость может зависеть
          от состояния животного, объёма процедуры и назначений ветеринарного
          специалиста. Перед посещением уточните детали по телефону.
        </div>

        <a href={`tel:${phone}`} className="button button--primary">
          Уточнить стоимость
          <Phone size={17} />
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
