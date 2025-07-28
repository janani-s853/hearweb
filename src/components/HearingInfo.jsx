// src/components/HearingInfo.jsx
import React from "react";
import "./HearingInfo.css";
import firstSectionImg from "./assets/firstSectionImg.png";
import benefitsImg from "./assets/hearingBenefits.png";
import HearingAdviceSection from "./HearingAdviceSection";

const HearingInfo = () => {
    return (
        <div className="hearing-info-page">

            {/* Section 1: Hero Banner */}
            <section
                className="hero-section"
                style={{ backgroundImage: `url(${firstSectionImg})` }}
            >
                <div className="hero-content">
                    <h1>Your First Step To Better Hearing</h1>
                    <p>
                        Clinically-validated pure tone audiometry test in just 5 minutes. And, it's free!
                    </p>
                    <a href="/hearingtest" className="test-btn">
                        Take Test
                    </a>
                </div>
            </section>

            {/* Section 2: Hearing Advice */}
            <section className="advice-section">
                <HearingAdviceSection />
            </section>

            {/* Section 3: Why Choose Us */}
            <section
                className="why-choose-section"
                style={{ backgroundImage: `url(${benefitsImg})` }}
            >
                <div className="why-choose-content">
                    <h2>Why Choose Us?</h2>
                    <p>
                        Our online hearing test is trusted by professionals and users across the world.
                        We use clinically approved techniques to assess your hearing in a fun, simple and accurate way.
                    </p>
                    <p>
                        It only takes a few minutes and helps you understand your hearing condition clearly.
                    </p>
                    <a href="/hearingtest" className="test-btn">
                        Start Test
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HearingInfo;
