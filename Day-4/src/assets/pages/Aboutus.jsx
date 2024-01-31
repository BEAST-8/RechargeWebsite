import React from 'react';

const AboutUsPage = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>
      <main>
        <section>
          <h2>Who We Are</h2>
          <p>
            Welcome to the Mobile Recharge App! We are dedicated to providing a seamless and
            convenient experience for recharging your mobile devices.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify mobile recharging and make it accessible to everyone. We
            strive to offer secure and efficient services to meet your communication needs.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or feedback, feel free to reach out to us at{' '}
            <a href="mailto:info@rechargeapp.com">info@rechargeapp.com</a>.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Mobile Recharge App</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
