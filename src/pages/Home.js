/* eslint jsx-a11y/anchor-is-valid: 0 */


import React from "react";
import { connect } from "react-redux"; //connect is a function that takes a component as an argument and returns a new component
import ServiceItem from "../components/service/ServiceItem";
import Hero from "../components/Hero";
import { fetchServices } from "../actions";

class Home extends React.Component {
  state = {
    services: [],
  };

  componentDidMount() {
    this.props.dispatch(fetchServices());
  }

  renderServices = (services) => {
    return services.map(service => 
      <ServiceItem service={service} key={service.id}/>
    )}

  render() {
    const { services } = this.props;
    return (
      <div>
        <Hero />
        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Make an Offer or Trade</h2>
              {/* <h3 className="subtitle is-5 is-muted">Make an Offer</h3> */}
              <div className="divider is-centered"></div>
            </div>
            <div className="content-wrapper">
              <div className="columns">
                { this.renderServices(services) }
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({services: state.services.all});

export default connect(mapStateToProps)(Home);
