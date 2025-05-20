import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1>Ben Kimim?</h1>
        <p>
          Ben Gökhan Çelik. Balıkesir Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim.
          Oyun geliştirme, oyun mekanikleri tasarımı ve prototipleme üzerine çalışıyorum.
          Unity ile oyunlar geliştiriyor; C#, Blender ve diğer teknolojilerle oyun içi deneyimler tasarlıyorum.
        </p>

        <div className="about-details">
          <div>
            <h3>Eğitim</h3>
            <p>Bilgisayar Mühendisliği – Balıkesir Üniversitesi (2022 - Günümüz)</p>
          </div>

          <div>
            <h3>İletişim</h3>
            <p><strong>Telefon:</strong> 0555 012 48 82</p>
            <p><strong>E-posta:</strong> g.celik066@hotmail.com</p>
            <p><strong>Adres:</strong> Sincan / Ankara</p>
          </div>

          <div>
            <h3>Yetenekler</h3>
            <ul>
              <li>Unity (C#)</li>
              <li>3D Modelleme (Blender,Substance Painter)</li>
              <li>Oyun Mekanikleri Tasarımı</li>
              <li>Prototipleme</li>
              <li>Algoritmalar & Veri Yapıları</li>
              <li>Python, Java, C, JavaScript</li>
              <li>İngilizce (B2)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
