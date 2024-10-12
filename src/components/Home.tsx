const Home = () => {
  return (
    <section id="home">
      <div className="main-content">
        <div className="text-content">
          <h1>Web Developer</h1>
          <h2>Pune, India</h2>
          <p>
            I’m a Web Developer passionate about creating beautiful and
            functional websites. With a focus on intuitive and user-centered
            design, I transform ideas into digital experiences that captivate
            and engage users.
          </p>
          <div className="cta-button">
            <a href="#contact">Get in Touch</a>
          </div>
        </div>
        <div className="image-content">
          <img src="headshot.png" alt="Profile" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;
