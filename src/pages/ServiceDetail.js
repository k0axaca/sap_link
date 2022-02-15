import React,{ useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchServiceById } from '../actions';
import Spinner from '../components/Spinner';
import OfferModal from '../components/service/OfferModal';


const ServiceDetail = props => {

  const { serviceId } = useParams();
  const { dispatch, isFetching } = props;
  let [recieverId, settingRecieverId] = React.useState()

  useEffect(() => {
    dispatch(fetchServiceById(serviceId));
  }, [serviceId, dispatch]);
  useEffect(()=>{
    settingRecieverId(props.service.id)
    
  },[props])

  const { service } = props;
  console.log("props",props)

  if (isFetching || serviceId !== service.id) {
    return <Spinner />;
  }
  
  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <figure className="image is-4by3">
                <img src={service.image} alt="Description" />
              </figure>
            </div>
            <div className="column is-6 is-offset-1">
              <h1 className="title is-2">
                  {service.title}
              </h1>
              <h2 className="subtitle is-4">
                  {service.description}
              </h2>
              <br />
              <div className="has-text-centered">
                <OfferModal service={service}/>
              </div>
              <div>
               {recieverId ?  <Link to={`/message/${service.user.fullName}/${service.user.uid}/${recieverId}`}>Contact a Seller</Link>:<></>}
              </div>

            </div>
          </div>
        </div>
      </div>
  </section> 
  );
}

const mapStateToProps = state => ({
  service: state.selectedService.item,
  isFetching: state.selectedService.isFetching
});

export default connect(mapStateToProps)(ServiceDetail);