import "./App.css";
import priestPhoto from "./images/jagadesh.jpg";
import profilePhoto from "./images/profile.jpg";
import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpeg";
import img5 from "./images/5.jpeg";
import img6 from "./images/6.jpeg";
import img7 from "./images/7.jpeg";
import img8 from "./images/8.jpeg";
import { GiFireBowl } from "react-icons/gi";
import { FaHome, FaRing, FaBaby, FaOm } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
import { GiCrystalBall } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
function App() {
return (
<>
<nav className="navbar">
 <div className="logo">
  <h3>Jagadesh Sarma</h3>
  <span>Vedic Priest Services</span>
</div>

  <div className="nav-links">
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Get in Touch</a>
  </div>
</nav>
<section className="hero">
  <div className="hero-left">
    <p className="hero-tag">
      Traditional Vedic Priest Services
    </p>

    <h1>Jagadesh Sarma</h1>

    <p className="hero-description">
      Homams, Grahapravesam, Marriage Ceremonies,
      Pitru Karyam and Vedic Rituals across
      Chennai and Abroad.
    </p>

    <div className="hero-stats">
      <div>
        <h3>19+</h3>
        <p>Years Experience</p>
      </div>

      <div>
        <h3>4000+</h3>
        <p>Ceremonies</p>
      </div>
    </div>

    <div className="hero-buttons">
      <a
        href="https://wa.me/919952097962"
        className="hero-btn"
      >
        WhatsApp
      </a>

      <a
        href="tel:+919952097962"
        className="hero-btn-outline"
      >
        Call Now
      </a>
    </div>
  </div>

  <div className="hero-right">
    <img
      src={profilePhoto}
      alt="Jagadesh Sarma"
      className="profile-photo"
    />
  </div>
</section>
<section className="photo-section">
  <div className="photo-wrapper">
    <img
      src={priestPhoto}
      alt="Jagadesh Sarma"
      className="priest-photo"
    />

    <div className="photo-caption">
      <h2>19+ Years of Vedic Service</h2>
      <p>Traditional Rituals • Homams • Grahapravesam • Marriage Ceremonies</p>
    </div>
  </div>
</section>
  <section className="container" id="about">
    <h2 className="section-title">About</h2>

    <div className="about">
      <p>
        With over 19 years of experience, Jagadesh Sarma performs
        traditional Vedic rituals, Homams, Grahapravesam,
        Marriage Ceremonies and other Samskaras for families
        across Chennai and abroad.
      </p>
    </div>
  </section>

  <section className="container" id="services">
    <h2 className="section-title">Services</h2>
    

    <div className="services">
      <div className="card">
  <h3>
  <MdTempleHindu className="service-icon" />
  Kumbabishegam
</h3>
  <p>
    Temple consecration ceremonies, Maha Kumbabishegam
    and related Vedic rituals.
  </p>
</div>
      <div className="card">
        <h3><GiFireBowl className="service-icon" />Homams</h3>
        <p>Ganapathi, Lakshmi Kubera, Ayushya Homam and more.</p>
      </div>

      <div className="card">
        <h3>
  <FaHome className="service-icon" />
  Grahapravesam
</h3>
        <p>Traditional house warming ceremonies.</p>
      </div>

      <div className="card">
        <h3>
  <FaRing className="service-icon" />
  Marriage Ceremonies
</h3>
        <p>Complete Vedic wedding rituals.</p>
      </div>

      <div className="card">
       <h3>
  <FaOm className="service-icon" />
  Pitru Karyam
</h3>
        <p>Annual ceremonies and ancestral rituals.</p>
      </div>

      <div className="card">
      <h3>
  <FaBaby className="service-icon" />
  Seemantham
</h3>
        <p>Traditional family ceremonies.</p>
      </div>
<div className="card">
  <h3>
  <GiCrystalBall className="service-icon" />
  Online Astrology Consultation
</h3>
  <p>
    Horoscope analysis, marriage compatibility,
    dosha guidance and spiritual consultation
    through online appointments.
  </p>
</div>
<div className="card">
 <h3>
  <TbRulerMeasure className="service-icon" />
  Vastu Consultation
</h3>
  <p>
    Traditional Vastu guidance for homes,
    apartments and commercial properties.
  </p>
</div>
      <div className="card">
        <h3>
  <FaOm className="service-icon" />
  Special Poojas
</h3>
        <p>Customized rituals based on family requirements.</p>
      </div>
    </div>
  </section>

  <section className="trust-bar">
    <div>
      <h3>19+</h3>
      <p>Years Experience</p>
    </div>

    <div>
      <h3>4000+</h3>
      <p>Ceremonies</p>
    </div>

    <div>
      <h3>Chennai</h3>
      <p>& Abroad</p>
    </div>
  </section>
<section className="container">
  <h2 className="section-title">Recent Ceremonies</h2>  <div className="gallery">
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
    <img src={img4} alt="" />
    <img src={img5} alt="" />
    <img src={img6} alt="" />
    <img src={img7} alt="" />
    <img src={img8} alt="" />
  </div>
</section>
<section className="container">
  <h2 className="section-title">Why Choose Us</h2>

  <div className="why-us">
    <div>✓ 19+ Years Experience</div>
    <div>✓ Traditional Vedic Procedures</div>
    <div>✓ Tamil & Sanskrit Mantras</div>
    <div>✓ Housewarming, Marriage & Homam Specialist</div>
    <div>✓ Chennai & Outstation Services</div>
    <div>✓ Personalized Guidance</div>
  </div>
</section>

<section className="direct-guidance">
  <h2> Direct Priest Guidance</h2>
<p>
  Families communicate directly with the priest performing the
  ceremony. No booking agencies, call centers or intermediaries,
  ensuring personal attention and authentic traditional Vedic practices.
</p>
</section>
  <section className="container" id="contact">
    <h2 className="section-title">Get in Touch</h2>

    <div className="contact-card">
      <p>📞 +91 9952097962</p>
      <p>✉️ rkprohitham@gmail.com</p>
      <p>📍 Chennai, Tamil Nadu</p>
    </div>
  </section>

  <a
    href="https://wa.me/919952097962"
    className="whatsapp-button"
    target="_blank"
    rel="noreferrer"
  >
    WhatsApp
  </a>

  <footer>
    © 2026 Chennai Vedic Priest | Jagadesh Sarma
  </footer>
</>

);
}

export default App;