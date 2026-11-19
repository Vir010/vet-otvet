import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function AnimalSlider({ slides }) {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const previous = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides || slides.length === 0) return null;

  const slide = slides[active];

  return (
    <section className="hero-slider" id="home">
      <div className="hero-slider__image">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="hero-slider__slide"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={active === 0}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="hero-slider__photo"
            />
          </motion.div>
        </AnimatePresence>

        <div className="hero-slider__image-overlay" />

        <div className="hero-slider__counter">
          {String(active + 1).padStart(2, '0')}
          <span />
          {String(slides.length).padStart(2, '0')}
        </div>

        <div className="hero-slider__controls">
          <button onClick={previous} aria-label="Предыдущий слайд">
            <ArrowLeft size={19} />
          </button>

          <button onClick={next} aria-label="Следующий слайд">
            <ArrowRight size={19} />
          </button>
        </div>
      </div>

      <div className="hero-slider__content">
        <span className="eyebrow">
          <span className="eyebrow__line" />
          ВЕТЕРИНАРНАЯ КЛИНИКА «ВЕТОТВЕТ»
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
          </motion.div>
        </AnimatePresence>

        <a href="#contacts" className="button button--primary">
          Связаться с клиникой
          <ArrowRight size={17} />
        </a>

        <div className="hero-slider__dots">
          {slides.map((item, index) => (
            <button
              key={item.image}
              className={active === index ? 'is-active' : ''}
              onClick={() => setActive(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
