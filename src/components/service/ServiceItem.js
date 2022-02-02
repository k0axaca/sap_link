// services props received from Home.js

const ServiceItem = ({ service }) => {

  const shortenText = (text, maxLength = 50) => {
    if (!text) return "";
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="column is-one-third">        
      <div
          className="feature-card is-bordered has-text-centered revealOnScroll delay-1"
          data-animation="fadeInLeft"
        >
          <div className="card-title">
            <h4>{service.title}</h4>
          </div>
          <div className="card-icon">
            <img src={service.image} alt="" />
          </div>
          <div className="card-text">
            <p>{shortenText(service.description)}</p>
          </div>
          <div className="card-action">
            <a href="#" className="button btn-align-md accent-btn raised">
              Learn More
            </a>
          </div>
        </div>
      </div>
    )
  }

// class ServiceItem extends React.Component {
//   render() {
//     const { service } = this.props;
//     return (
//       <div key={service.id} className="column is-one-third">
//         <div
//           className="feature-card is-bordered has-text-centered revealOnScroll delay-1"
//           data-animation="fadeInLeft"
//         >
//           <div className="card-title">
//             <h4>{service.title}</h4>
//           </div>
//           <div className="card-icon">
//             <img src={service.image} alt="" />
//           </div>
//           <div className="card-text">
//             <p>{service.description}</p>
//           </div>
//           <div className="card-action">
//             <a href="#" className="button btn-align-md accent-btn raised">
//               Learn More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default ServiceItem;
