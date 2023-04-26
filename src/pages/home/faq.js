import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const faqs = [
  {
    question: 'How do I schedule a test drive?',
    answer: 'To schedule a test drive, please visit our Schedule Test Drive page and select a date and time that works for you.'
  },
  {
    question: 'What types of cars do you sell?',
    answer: 'We sell a wide variety of cars, including sedans, SUVs, trucks, and sports cars. Check out our inventory page to see our current selection.'
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer financing options for qualified buyers.'
  },
  {
    question: 'Do you offer warranty on your cars?',
    answer: 'Yes ,all our cars come with a standard manufacturer warrenty '
  },
  {
    question: 'Can I buy a car online?',
    answer: 'unfortunately ,this service is still not applicable '
  },
  {
    question: 'How do I know if a car is right for me?',
    answer: 'We recommend taking a test drive and consulting with our sales team to determine if a car is right for you. '
  },
  {
    question: 'Do you offer maintenance and repair services?',
    answer: 'unfortunately ,these services is still not applicable '
  },
  {
    question: 'Do you offer any discounts or promotions?',
    answer: ' Yes, we offer various discounts and promotions throughout the year.'
  },
  {
    question: 'How can I contact customer support?',
    answer: ' You can contact our customer support team by phone, email . Visit our Contact Us page for more information.'
  }
  


];

function faqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className='authButtons'>
        <img src='/images/logo.jpg' alt='logo' className='homepageLogo'/>
        <div class="dropdown">
          <button class="dropbtn">Log in <i className="arrowLogin down"></i>
          <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Login</a>
            <a href="#">Sign Up</a>
            <a href="#">Adminstrator login </a>
          </div>
   
      </div>
    </div>
    <Navbar />
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <button className="faq-question" onClick={() => handleQuestionClick(index)}>
              {faq.question}
            </button>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
}

export default faqPage;
