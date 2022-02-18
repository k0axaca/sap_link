import React,{ useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchServiceById } from '../actions';
import Spinner from '../components/Spinner';
import OfferModal from '../components/service/OfferModal';
import {onAuthStateChanged} from "../api/index"
import db from "../config/db"


const ServiceDetail = props => {

  const { serviceId } = useParams();
  const { dispatch, isFetching } = props;

  let [userid, setuserid] = React.useState("");
  let [userFullName,setUserFullName] = React.useState("");

  useEffect(() => {
    dispatch(fetchServiceById(serviceId));
  }, [serviceId, dispatch]);
 

  useEffect(()=>{
    
    if(userid){
      console.log("show",userid)
      db.collection("profiles").where("uid","==",userid).get().then((e)=>{
        e.docs.map((el)=>setUserFullName(el.data().fullName))
      })
    }
    
  },[userid])


  if(!userid){
    onAuthStateChanged((res)=>{
      setuserid(res.uid);
    })
  }
 

  const { service } = props;
  console.log("props",props)

  if (isFetching || serviceId !== service.id) {
    return <Spinner />;
  }

  console.log("props",props)
  
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
              <button type='button' className='button is-medium is-info is-outlined' id='contact-btn'> 
               {<Link to={`/message/${userFullName}/${userid}/${props.service.user.uid}`}>Contact Seller</Link>}
              </button>

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