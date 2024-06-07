import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonial</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
          <h3>John Dee 32, Bromo</h3>
        </div>
        <div className="testimonial-card">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
          <h3>Jane Doe 28, Jakarta</h3>
        </div>
        <div className="testimonial-card">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
          <h3>Mark Smith 40, Surabaya</h3>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
