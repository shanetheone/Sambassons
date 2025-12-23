function App() {
  const [activeSection, setActiveSection] = React.useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        header {
          background: #1a1a2e;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: #ff6b35;
          cursor: pointer;
          letter-spacing: 1px;
        }

        .logo span {
          color: #fff;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: #fff;
          transition: color 0.3s;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-weight: 500;
        }

        .nav-link:hover {
          color: #ff6b35;
          background: rgba(255, 107, 53, 0.1);
        }

        .nav-link.active {
          color: #ff6b35;
          border-bottom: 2px solid #ff6b35;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(rgba(26, 26, 46, 0.7), rgba(26, 26, 46, 0.7)),
                      url('https://cdn.abacus.ai/images/174ee14a-6b82-4d54-81d3-c207907e9d24.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: white;
          padding: 180px 0 120px;
          text-align: center;
          margin-top: 60px;
        }

        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          animation: fadeInUp 1s ease;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero .tagline {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          animation: fadeInUp 1s ease 0.2s;
          animation-fill-mode: both;
          color: #ff6b35;
          font-weight: 600;
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          animation: fadeInUp 1s ease 0.3s;
          animation-fill-mode: both;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-block;
          padding: 15px 40px;
          background: #ff6b35;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
          animation: fadeInUp 1s ease 0.4s;
          animation-fill-mode: both;
          cursor: pointer;
          border: none;
          font-size: 1.1rem;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 107, 53, 0.4);
          background: #e55a2b;
        }

        /* About Section */
        .about {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .about h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #1a1a2e;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-top: 3rem;
        }

        .about-text p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .about-image {
          width: 100%;
          height: 400px;
          border-radius: 10px;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        /* Services Section */
        .services {
          padding: 80px 0;
          background: #fff;
        }

        .services h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #1a1a2e;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
          padding: 2.5rem;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s;
          color: white;
        }

        .service-card:hover {
          transform: translateY(-10px);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .service-card h3 {
          margin-bottom: 1rem;
          color: #ff6b35;
        }

        .service-card p {
          color: #ddd;
        }

        /* Partners Section */
        .partners {
          padding: 80px 0;
          background: #1a1a2e;
          color: white;
        }

        .partners h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .partners-subtitle {
          text-align: center;
          font-size: 1.2rem;
          margin-bottom: 3rem;
          color: #ff6b35;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          align-items: center;
          justify-items: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .partner-logo-container {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          transition: transform 0.3s;
          width: 100%;
          max-width: 280px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-logo-container:hover {
          transform: scale(1.05);
        }

        .partner-logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        /* Team Section */
        .team {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .team h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #1a1a2e;
        }

        .team-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
        }

        .team-image {
          width: 100%;
          max-width: 900px;
          height: 500px;
          border-radius: 10px;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          margin: 0 auto;
          display: block;
        }

        /* Contact Section */
        .contact {
          padding: 80px 0;
          background: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
          color: white;
        }

        .contact h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #fff;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .contact-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #ff6b35;
        }

        .contact-card h3 {
          margin-bottom: 1rem;
          color: #ff6b35;
        }

        .contact-card p {
          color: #ddd;
        }

        /* Footer */
        footer {
          background: #0d0d1a;
          color: white;
          text-align: center;
          padding: 2rem 0;
        }

        footer p {
          margin-bottom: 0.5rem;
        }

        .footer-tagline {
          color: #ff6b35;
          font-style: italic;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .hero .tagline {
            font-size: 1.2rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .nav-links {
            gap: 1rem;
            font-size: 0.9rem;
          }

          .about-content {
            grid-template-columns: 1fr;
          }

          .partners-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Partners />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

function Header({ activeSection, scrollToSection }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo" onClick={() => scrollToSection('home')}>
            SAMBASSONS<span> PETROLEUM</span>
          </div>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                <span
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero({ scrollToSection }) {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>SAMBASSONS PETROLEUM</h1>
        <p className="tagline">Your Trusted Partner in Petroleum Supply Solutions</p>
        <p>Delivering excellence in petroleum products and services across the industry with reliability, quality, and integrity.</p>
        <button className="cta-button" onClick={() => scrollToSection('contact')}>
          Get In Touch
        </button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Sambassons</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Sambassons Petroleum is a leading supplier of premium petroleum products and services, 
              committed to delivering excellence across the energy sector. With years of industry experience, 
              we have established ourselves as a trusted partner for businesses seeking reliable petroleum solutions.
            </p>
            <p>
              Our commitment to quality, safety, and customer satisfaction has enabled us to build strong 
              partnerships with industry leaders including Shell and Elegar Kerpen. We pride ourselves on 
              our ability to meet the diverse needs of our clients while maintaining the highest standards 
              of service and professionalism.
            </p>
            <p>
              At Sambassons, we understand the critical importance of reliable petroleum supply chains. 
              Our dedicated team works tirelessly to ensure timely delivery, competitive pricing, and 
              exceptional service that keeps your operations running smoothly.
            </p>
          </div>
          <img 
            src="https://cdn.abacus.ai/images/c25ccc17-a0bd-477c-a13a-3527fe9b9e41.png" 
            alt="Sambassons Facility" 
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: '⛽',
      title: 'Petroleum Supply',
      description: 'Comprehensive supply of high-quality petroleum products including diesel, gasoline, and specialized fuels.'
    },
    {
      icon: '🚛',
      title: 'Logistics & Distribution',
      description: 'Efficient transportation and distribution services ensuring timely delivery to your location.'
    },
    {
      icon: '🛢️',
      title: 'Bulk Storage Solutions',
      description: 'Secure storage facilities with advanced safety systems for large-scale petroleum storage needs.'
    },
    {
      icon: '📊',
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain solutions optimized for efficiency, reliability, and cost-effectiveness.'
    },
    {
      icon: '🔧',
      title: 'Technical Support',
      description: 'Expert technical consultation and support services for all your petroleum-related requirements.'
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring all products meet international standards and specifications.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Partners() {
  const partners = [
    { 
      name: 'Shell', 
      logo: 'https://cdn.abacus.ai/images/077f1342-85e5-4f6c-85df-bdf44094d842.png'
    },
    { 
      name: 'Elegar Kerpen', 
      logo: 'https://elegar-kerpen.com/wp-content/uploads/2023/08/Master-Logo-without-formerly-02.jpg'
    }
  ];

  return (
    <section className="partners" id="partners">
      <div className="container">
        <h2>Our Trusted Partners</h2>
        <p className="partners-subtitle">Proud to work with industry leaders</p>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo-container">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="partner-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2>Our Expert Team</h2>
        <div className="team-content">
          <p>
            Our dedicated team of petroleum industry professionals brings decades of combined experience 
            in supply chain management, logistics, and customer service. We are committed to safety, 
            excellence, and delivering exceptional value to our clients.
          </p>
        </div>
        <img 
          src="https://cdn.abacus.ai/images/876c1621-6858-476b-b438-e298d6c2e374.png" 
          alt="Sambassons Team" 
          className="team-image"
        />
      </div>
    </section>
  );
}

function Contact() {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      info: 'Visit our offices for consultations and business inquiries'
    },
    {
      icon: '📞',
      title: 'Phone',
      info: 'Call us for immediate assistance and quotes'
    },
    {
      icon: '✉️',
      title: 'Email',
      info: 'Send us your requirements and we will respond promptly'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          {contactInfo.map((contact, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon">{contact.icon}</div>
              <h3>{contact.title}</h3>
              <p>{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© 2025 Sambassons Petroleum. All rights reserved.</p>
        <p className="footer-tagline">Fueling Your Success, Powering Your Future</p>
      </div>
    </footer>
  );
}