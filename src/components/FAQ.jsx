import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <button>Apa saja syarat yang dibutuhkan?</button>
        <div className="faq-content">Lorem ipsum dolor sit amet...</div>
      </div>
      <div className="faq-item">
        <button>Berapa hari minimal sewa mobil lepas kunci?</button>
        <div className="faq-content">Lorem ipsum dolor sit amet...</div>
      </div>
      <div className="faq-item">
        <button>Berapa hari sebelumnya sebaiknya booking sewa mobil?</button>
        <div className="faq-content">Lorem ipsum dolor sit amet...</div>
      </div>
      <div className="faq-item">
        <button>Apakah Ada biaya antar-jemput?</button>
        <div className="faq-content">Lorem ipsum dolor sit amet...</div>
      </div>
      <div className="faq-item">
        <button>Bagaimana jika terjadi kecelakaan</button>
        <div className="faq-content">Lorem ipsum dolor sit amet...</div>
      </div>
    </section>
  );
}

export default FAQ;
