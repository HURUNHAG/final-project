import React from 'react';
import './Contact.css';
import { FaGithub, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1>İletişim</h1>
        <p>Benimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.</p>

        <form className="contact-form">
          <label htmlFor="name">Ad Soyad</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">E-posta</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mesaj</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Gönder</button>
        </form>

        <div className="social-media">
          <h3>Beni Takip Edin</h3>
          <div className="icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://github.com/gcelik66" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
