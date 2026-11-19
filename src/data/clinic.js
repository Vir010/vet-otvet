export const clinic = {
  name: 'ВетОтвет',
  phone: '+79259972842',
  phoneDisplay: '+7 (925) 997-28-42',
  email: 'info@ВетОтвет.рус',

  address: 'проспект Ленина, 26',
  city: 'Электросталь, Московская область',

  mapUrl: 'https://yandex.ru/maps/?ll=38.440034%2C55.794163&rtext=~55.794163%2C38.440034&rtt=auto&ol=biz&oid=1753032438&mode=routes&from=1org_route',

  workingHours: 'Ежедневно, 10:00–19:00',
  appointmentPrice: '900 ₽',

  slides: [
    {
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/hero-dog-cat.jpg`,
      title: 'Здоровье питомца — наша забота',
      subtitle: 'Внимательное отношение и ветеринарная помощь для ваших любимцев'
    },
    {
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/hero-dogs.jpg`,
      title: 'Они заслуживают лучшего',
      subtitle: 'Заботимся о здоровье домашних животных на каждом этапе жизни'
    },
    {
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/hero-puppy.jpg`,
      title: 'Забота начинается с доверия',
      subtitle: 'Профилактика, диагностика и помощь вашим питомцам'
    }
  ],

  services: [
    {
      id: 1,
      number: '01',
      title: 'Первичный приём',
      description: 'Осмотр животного, консультация и рекомендации ветеринарного специалиста.',
      price: '900 ₽',
      icon: 'stethoscope'
    },
    {
      id: 2,
      number: '02',
      title: 'Вакцинация',
      description: 'Профилактическая вакцинация домашних животных.',
      price: 'От 800 ₽',
      icon: 'syringe'
    },
    {
      id: 3,
      number: '03',
      title: 'Диагностика',
      description: 'Лабораторные исследования и диагностические процедуры.',
      price: 'От 200 ₽',
      icon: 'microscope'
    },
    {
      id: 4,
      number: '04',
      title: 'Чипирование',
      description: 'Установка микрочипа для идентификации животного.',
      price: '1200 ₽',
      icon: 'scan'
    },
    {
      id: 5,
      number: '05',
      title: 'Обработка от паразитов',
      description: 'Профилактика и обработка от внешних и внутренних паразитов.',
      price: 'Уточняйте',
      icon: 'shield-check'
    },
    {
      id: 6,
      number: '06',
      title: 'Кастрация и стерилизация',
      description: 'Хирургические процедуры для домашних животных.',
      price: 'Уточняйте',
      icon: 'heart-pulse'
    },
    {
      id: 7,
      number: '07',
      title: 'Ветаптека',
      description: 'Ветеринарные препараты и средства ухода за животными.',
      price: 'Уточняйте',
      icon: 'pill'
    }
  ],

  advantages: [
    {
      number: '01',
      title: 'Внимательное отношение',
      description: 'Индивидуальный подход к каждому животному и его владельцу.'
    },
    {
      number: '02',
      title: 'Комплексный подход',
      description: 'Помощь в вопросах профилактики, диагностики и лечения.'
    },
    {
      number: '03',
      title: 'Понятные рекомендации',
      description: 'Объясняем владельцам особенности ухода и профилактики.'
    },
    {
      number: '04',
      title: 'Забота о питомцах',
      description: 'Учитываем особенности и потребности каждого животного.'
    }
  ]
};
