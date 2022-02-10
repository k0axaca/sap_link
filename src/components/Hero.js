/* eslint jsx-a11y/anchor-is-valid: 0 */

const Hero = () => {
  return (
    <section className="hero is-default is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5 is-offset-1 landing-caption">
              <h1 className="title is-1 is-bold is-spaced">
                Grow your plant collection and trade with other plant lovers.
              </h1>
              <h2 className="subtitle is-5 is-muted">
                Lorem ipsum sit dolor amet is a dummy text used by typography
                industry{" "}
              </h2>
              <p>
                <a className="button cta rounded primary-btn raised">
                  Get Started
                </a>
              </p>
            </div>
            <div className="column is-5 is-offset-1">
              <figure className="image">
                <img src="/womenplants2.png" alt="Description" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
