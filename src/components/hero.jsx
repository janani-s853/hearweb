import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import Hero2 from "../components/hero2";
import Footer from "../components/footer";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  useEffect(() => {
    const body = document.body;
    const backgrounds = [
      "linear-gradient(to bottom, #bbb4e4, #f2daf6, #d9f3fa, #ffffff,#ffffff)", // Purple-pink
      "linear-gradient(to bottom, #000000, #4e4e4e, #9f9f9f, #ffffff,#ffffff)", // Black/gray
      "linear-gradient(to bottom, #5a7a3d, #79ab3c, #b8e482, #ffffff,#ffffff)", // Green
      "linear-gradient(to bottom, #a6d8dc, #bce9ec, #ccf6f3, #ffffff,#ffffff)", // Teal
      "linear-gradient(to bottom right, #7b9cd0, #c2e9fb, #e0f7fa, #ffffff,#ffffff)", // Blue fade
      "linear-gradient(to bottom, #6083ad, #b2cae2, #d1e1f0, #ffffff,#ffffff)", // Soft Blue
    ];

    requestAnimationFrame(() => {
      body.style.transition = "background 0.8s ease-in-out";
      body.style.background = backgrounds[currentSlide];
    });
  }, [currentSlide]);

  return (
    <>
      <section className="hero-container">
        <Slider {...settings}>
          {/* Slides */}
          {[
            {
              title: "Advanced Hearing Aid",
              desc: "Crystal Clear Sound for Every Moment",
            },
            {
              title: "Unmatched Quality",
              desc: "Designed for Pure Sound Experience",
            },
            {
              title: "Next-Gen Audio",
              desc: "For Every Lifestyle, Every Need",
            },
            {
              title: "Eco Comfort Fit",
              desc: "Soft. Sustainable. Smart.",
            },
            {
              title: "Stylish Everyday Wear",
              desc: "Looks that Speak Volumes",
            },
            {
              title: "Engineered for Excellence",
              desc: "Precision Audio. Anywhere.",
            },
          ].map((slide, idx) => (
            <div className={`slide slide${idx + 1}`} key={idx}>
              <div className={`caption ${idx === 0 ? "caption-center" : "caption-left"}`}>
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <button className="buy-btn">
                  Buy Now <ChevronRight className="chevron-icon" />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <Hero2 />
      <Footer />
    </>
  );
};

export default Hero;
