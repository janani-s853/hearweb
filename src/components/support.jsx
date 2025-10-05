import React from 'react';
import './support.css';
import {
  FaUser,
  FaClipboardList,
  FaFilePdf,
  FaPhoneAlt,
} from 'react-icons/fa';
import hearingImage from './assets/hearingicon.jpg';
import { Link } from 'react-router-dom';
import Footer from '../components/footer'; // ✅ Import Footer

const supportItems = [
  { icon: <FaUser />, title: 'My Account', description: 'Manage your hearing aid account and settings.', type: 'link', path: '/profile' },
  { icon: <FaClipboardList />, title: 'Orders', description: 'Track, modify or cancel your hearing aid orders.', type: 'none' },
  { icon: <FaFilePdf />, title: 'Product Manuals', description: 'Download guides and user manuals in PDF format.', type: 'none' },
  { icon: <FaPhoneAlt />, title: 'Contact Us', description: 'Call, email or visit one of our nearby support centers.', type: 'none' },
  { icon: <FaClipboardList />, title: 'Non-order Related Issues', description: 'Get help with your account related issues.', type: 'none' },
  { icon: <FaFilePdf />, title: `FAQ's`, description: 'Find answers to the most common questions about our services.', type: 'scroll', path: 'faq-section' },
];

const faqs = [
  { question: 'How to track my order?', answer: 'Use the tracking ID sent to your email.' },
  { question: 'What is the return policy?', answer: 'Returns accepted within 30 days.' },
  { question: 'Do you offer international shipping?', answer: 'Yes, with additional charges.' },
];

const Support = () => {
  const [activeFAQ, setActiveFAQ] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleScrollTo = (elementId) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="support-page">
      <div className="support-page-wrapper">
        <div className="hero-bg">
          <div className="support-header">
            <h1>We’re here to help</h1>
            <input type="text" placeholder="Search for help..." className="search-input" />
          </div>
        </div>
        <div className="support-main-content">
          <div className="top-card-row">
            {supportItems.map((item, index) => {
              const cardContent = (
                <>
                  <div className="icon-circle">{item.icon}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.description}</p>
                </>
              );

              if (item.type === 'link') {
                return (
                  <Link to={item.path} key={index} className="support-card-link">
                    <div className="support-card">{cardContent}</div>
                  </Link>
                );
              }
              if (item.type === 'scroll') {
                return (
                  <div key={index} className="support-card" onClick={() => handleScrollTo(item.path)}>
                    {cardContent}
                  </div>
                );
              }
              return (
                <div key={index} className="support-card inactive">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
        <div className="hearing-feedback-section">
          <div className="hearing-image-section">
            <img src={hearingImage} alt="Hearing Aid" />
          </div>
          <div className="feedback-form-section">
            <h3>Submit Your Feedback</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Feedback" rows="4" required></textarea>
              <button type="submit">Send Feedback</button>
            </form>
          </div>
        </div>
        <div className="support-main-content pb-0">
          <div id="faq-section" className="faq-section">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div
                className="faq-item"
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <span className="faq-toggle-icon">
                    {activeFAQ === index ? '-' : '+'}
                  </span>
                </div>
                {activeFAQ === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;

