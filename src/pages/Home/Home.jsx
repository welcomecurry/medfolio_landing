import './Home.css'
import { Link as RouterLink } from "react-router-dom";


function Home() {
//   const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
// });


// sr.reveal(`.home__data`);
// sr.reveal(`.home__img`, { delay: 500 });
// sr.reveal(`.home__social`, { delay: 600 });
// sr.reveal(`.about__img, .contact__box`, { origin: 'left' });
// sr.reveal(`.about__data, .contact__form`, { origin: 'right' });
// sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, { interval: 100 });
  return (
<>
  {/* Added by HTTrack */}
  <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
  {/* /Added by HTTrack */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/*=============== FAVICON ===============*/}
  <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon" />
  {/*=============== REMIX ICONS ===============*/}
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  {/*=============== CSS ===============*/}
  <link rel="stylesheet" href="assets/css/style.css" />
  <title>Medfolio.ai</title>
  {/*==================== HEADER ====================*/}
  <header className="header" id="header">
    <nav className="nav container">
      <a href="#" className="nav__logo">
        <img
          src="assets/img/medfolioLogo.png"
          alt="Medfolio Logo"
          className="logo"
        />
      </a>
      <div className="nav__menu" id="nav-menu">

        <div className="nav__close" id="nav-close">
          <i className="ri-close-line" />
        </div>
      </div>
      <div className="nav__btns">
        <div>
        <RouterLink to="/builder">
            <a href="" className="nav-button button--flex">
              Create Now <i className="ri-arrow-right-down-line button__icon" />
            </a>
        </RouterLink>
        </div>
        {/* <i className="ri-moon-line change-theme" id="theme-button" /> */}
        <div className="nav__toggle" id="nav-toggle">
          {/* <i class="ri-menu-line"></i> */}
        </div>
      </div>
    </nav>
  </header>
  <main className="main">
    {/*==================== HOME ====================*/}
    <section className="home" id="home">
      <div className="home__container container grid">
        <div>
          <div>
            <h1 className="home__title">
              Showcase your
              <span className="home__title text-gradient">
                 medical expertise 
              </span>
               with a
              <span className="home__title text-gradient">
                professional portfolio.
              </span>
            </h1>
          </div>
          <p className="home__description">
            Medfolio provides a platform for medical professionals to highlight
            their education, experience, and achievements in one place. Impress
            potential employers or patients with a personalized and polished
            portfolio.
          </p>
          <div className="center-button">
            <RouterLink to="/builder">
              <a href="" className="button button--flex">
                Build your Portfolio Today{" "}<i className="ri-arrow-right-down-line button__icon" />
              </a>
            </RouterLink>
          </div>
          <div className="center-button" style={{ marginTop: "1rem" }}>
            <img
              src="assets/img//profiles.png"
              className="profile-img"
              alt=""
            />
            <p style={{ color: "white" }}>Join 1000+ using Medfolio</p>
          </div>
        </div>
      </div>
    </section>
    {/* ==================== ABOUT ==================== */}
    <section className="product section container" id="products">
      <div style={{ marginTop: "-2rem" }}>
        <h1 style={{ marginBottom: "2rem" }} className="section__title-center">
          Loved by physicians from the following institutions
        </h1>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src="assets/img/stanfurd.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img src="assets/img/ucla.png" height={100} width={250} alt="" />
            </div>
            <div className="slide">
              <img
                src="assets/img/cambridge.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/img/berkeley.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/img/harvard.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/img/oxfurd.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/img/columbiaa.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/img/stanfurd.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img src="assets/img/ucla.png" height={100} width={250} alt="" />
            </div>
            <div className="slide">
              <img
                src="assets/img/berkeley.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/img/cambridge.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/img/harvard.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/img/oxfurd.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/img/columbiaa.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="steps section ">
      <div className="steps__bg">
        <h2 className="section__title-center steps__title">
          Your digital impression is your first impression
        </h2>
        <div>
          <p style={{ textAlign: "center", marginTop: "-1.2rem" }}>
            What comes up when you google your name? You've done the hard work.
            Audits, exams, publications and clinical achievements- but where are
            they now? Choose what you showcase and control what they see.
          </p>
        </div>
        <div className="center-button">
          <RouterLink to="/builder">
              <a href="" className="button-prev button--flex">
                Build your Site Now<i className="ri-arrow-right-up-line button__icon" />
              </a>
          </RouterLink>
        </div>
      </div>
    </section>

    <section className="about section container" id="about">
      <div className="about__container grid">
        <img
          src="assets/img/why_section.webp"
          alt="Website Climber"
          className="about__img"
        />
        <div className="about__data">
          <h2 className="section__title about__title">Why Medfolio?</h2>
          <p className="about__description">
            We have over 1000+ unbiased reviews and In a competitive field like
            medicine, it's important to have a personal brand that sets you
            apart.
          </p>
          <div className="about__details">
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon" />
              Designed by doctors (and web developers!), for doctors.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon" />
              Create your site in minutes and see what it looks like with no
              obligation
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon" />
              Bespoke upgrades available to meet your needs e.g. content
              creation, manage inbound messages, digital business cards
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon" />
              It's your website! Update it in minutes as you move placements,
              see your visitor analytics, design it to reflect you.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/*==================== QUESTIONS ====================*/}
    {/* <section class="questions section" id="faqs">
  <h2 class="section__title-center questions__title container">
    Some common questions <br />
    we're often asked
  </h2>

  <div class="questions__container container grid">
    <div class="questions__group">
      <div class="questions__item">
        <header class="questions__header">
          <i class="ri-add-line questions__icon"></i>
          <h3 class="questions__item-title">
            My flowers are falling off or dying?
          </h3>
        </header>

        <div class="questions__content">
          <p class="questions__description">
            Plants are easy way to add color energy and transform your
            space but which planet is for you. Choosing the right plant.
          </p>
        </div>
      </div>
      <div class="questions__item">
        <header class="questions__header">
          <i class="ri-add-line questions__icon"></i>
          <h3 class="questions__item-title">
            What causes leaves to become pale?
          </h3>
        </header>

        <div class="questions__content">
          <p class="questions__description">
            Plants are easy way to add color energy and transform your
            space but which planet is for you. Choosing the right plant.
          </p>
        </div>
      </div>
      <div class="questions__item">
        <header class="questions__header">
          <i class="ri-add-line questions__icon"></i>
          <h3 class="questions__item-title">
            What causes brown crispy leaves
          </h3>
        </header>

        <div class="questions__content">
          <p class="questions__description">
            Plants are easy way to add color energy and transform your
            space but which planet is for you. Choosing the right plant.
          </p>
        </div>
      </div>
    </div>
    <div class="questions__group">
      <div class="questions__item">
        <header class="questions__header">
          <i class="ri-add-line questions__icon"></i>
          <h3 class="questions__item-title">How do I choose a plant?</h3>
        </header>

        <div class="questions__content">
          <p class="questions__description">
            Plants are easy way to add color energy and transform your
            space but which planet is for you. Choosing the right plant.
          </p>
        </div>
      </div>
      <div class="questions__item">
        <header class="questions__header">
          <i class="ri-add-line questions__icon"></i>
          <h3 class="questions__item-title">How do I change the pots?</h3>
        </header>

        <div class="questions__content">
          <p class="questions__description">
            Plants are easy way to add color energy and transform your
            space but which planet is for you. Choosing the right plant.
          </p>
        </div>
      </div>
      <div class="questions__item">
        <header class="questions__header">
          <i class="ri-add-line questions__icon"></i>
          <h3 class="questions__item-title">
            Why are gnats flying around my plant?
          </h3>
        </header>

        <div class="questions__content">
          <p class="questions__description">
            Plants are easy way to add color energy and transform your
            space but which planet is for you. Choosing the right plant.
          </p>
        </div>
      </div>
    </div>
  </div>
</section> */}
    <section className="call-to-action" id="call-to-action">
      <div className="home__container container grid">
        <div>
          <div>
            <h1 className="home__title">
              Let Medfolio help you stand out in a sea of applicants and land
              your dream job.
            </h1>
          </div>
          <div className="center-button">
            <RouterLink to="/builder">
              <a href="" className="last-button button--flex">
                Build your Portfolio Today{" "}<i className="ri-arrow-right-down-line button__icon" />
              </a>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    {/*==================== CONTACT ====================*/}
    <section className="contact section container" id="contact">
      <div className="contact__container grid">
        <div className="contact__box">
          <h2 className="section__title">
            Reach out to us today <br />
            via any of the give <br />
            information
          </h2>
          <div className="contact__data">
            <div className="contact__information">
              <h3 className="contact__subtitle">Call us for instant support</h3>
              <span className="contact__description">
                <i className="ri-phone-line contact__icon" />
                +999 888 777
              </span>
            </div>
            <div className="contact__information">
              <h3 className="contact__subtitle">Write us by mail</h3>
              <span className="contact__description">
                <i className="ri-mail-line contact__icon" />
                user@email.com
              </span>
            </div>
          </div>
        </div>
        <form action="#" className="contact__form">
          <div className="contact__inputs">
            <div className="contact__content">
              <input type="email" placeholder=" " className="contact__input" />
              <label htmlFor="" className="contact__label">
                Email
              </label>
            </div>
            <div className="contact__content">
              <input type="text" placeholder=" " className="contact__input" />
              <label htmlFor="" className="contact__label">
                Subject
              </label>
            </div>
            <div className="contact__content contact__area">
              <textarea
                name="message"
                placeholder=" "
                data-gramm="false"
                data-gramm_editor="false"
                data-enable-grammarly="false"
                className="contact__input"
                defaultValue={""}
              />
              <label htmlFor="" className="contact__label">
                Message
              </label>
            </div>
          </div>
          <button className="button button--flex">
            Send Message
            <i className="ri-arrow-right-up-line button__icon" />
          </button>
        </form>
      </div>
    </section>
  </main>
  {/*==================== FOOTER ====================*/}
  <footer className="footer section">
    <div className="footer__container container grid">
      <div className="footer__content">
        <a href="#" className="footer__logo">
          <i className="ri-leaf-line footer__logo-icon" /> Medfolio
        </a>
        <h3 className="footer__title">
          Subscribe to our newsletter <br />
          to stay update
        </h3>
        <div className="footer__subscribe">
          <input
            type="email"
            placeholder="Enter your email"
            className="footer__input"
          />
          <button className="button button--flex footer__button">
            Subscribe
            <i className="ri-arrow-right-up-line button__icon" />
          </button>
        </div>
      </div>
      <div className="footer__content">
        <h3 className="footer__title">Our Address</h3>
        <ul className="footer__data">
          <li className="footer__information">1234 - Peru</li>
          <li className="footer__information">La Libertad - 43210</li>
          <li className="footer__information">123-456-789</li>
        </ul>
      </div>
      <div className="footer__content">
        <h3 className="footer__title">Contact Us</h3>
        <ul className="footer__data">
          <li className="footer__information">+999 888 777</li>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-facebook-fill" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-instagram-line" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-twitter-fill" />
            </a>
          </div>
        </ul>
      </div>
      <div className="footer__content">
        <h3 className="footer__title">We accept all credit cards</h3>
        <div className="footer__cards">
          <img src="assets/img/card1.png" alt="" className="footer__card" />
          <img src="assets/img/card2.png" alt="" className="footer__card" />
          <img src="assets/img/card3.png" alt="" className="footer__card" />
          <img src="assets/img/card4.png" alt="" className="footer__card" />
        </div>
      </div>
    </div>
    <p className="footer__copy">
      © Made with ❤️ by Medfolio. All rights reserved
    </p>
  </footer>
  {/*=============== SCROLL UP ===============*/}
  <a href="#" className="scrollup" id="scroll-up">
    <i className="ri-arrow-up-fill scrollup__icon" />
  </a>
  {/*=============== SCROLL REVEAL ===============*/}
  {/*=============== MAIN JS ===============*/}
  {/* Mirrored from jbramirez03.github.io/Plant-site/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 22 Mar 2023 05:45:58 GMT */}
</>

  );
}

export default Home;
