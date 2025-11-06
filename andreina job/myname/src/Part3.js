import React, { useState } from "react";
import "./Part3.css";

const categories = ["Career", "News", "New Jobs", "Professional", "Branding"];

const slides = [
  {
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    title: "Undertake in their working life",
    text: "A job career refers to the long-term professional journey of an individual, encompassing various roles, responsibilities, and experiences.",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Professional Growth",
    text: "A job career refers to the long-term professional journey of an individual, encompassing various roles, responsibilities, and experiences.",
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Job Satisfaction",
    text: "A job career refers to the long-term professional journey of an individual, encompassing various roles, responsibilities, and experiences.",
  },
];

const Part3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Career");

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="part3-container">
      <div className="part3-header">
        <h2>Your Career Is Not Just About Making</h2>
        <p>
          A job career refers to the long-term professional journey of an individual,
          encompassing various roles, responsibilities, and experiences they undertake in their working life.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="part3-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="part3-carousel">
        <button className="arrow-btn left" onClick={prevSlide}>
          &#8592;
        </button>

        <div className="part3-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`part3-card ${index === activeIndex ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="part3-card-content">
                <h4>{slide.title}</h4>
                <p>{slide.text}</p>
                <button className="learn-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow-btn right" onClick={nextSlide}>
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="part3-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Part3;

