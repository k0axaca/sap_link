import React, { useState } from "react";
import Modal from '../Modal';

const OfferModal = ({ service }) => {
  const [offer, setOffer] = useState({
    fromUser: "",
    toUser: "",
    service: "",
    status: "pending",
    price: 0,
    time: 0,
    note: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    if (name === "time") {
      const price = Math.round(value * service.price * 100) / 100;
      return setOffer({ ...offer, [name]: value, price });
    }

    return setOffer({ ...offer, [name]: value });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(offer));
  };

  return (
    <Modal onModalSubmit={handleSubmit} openButtonText="Make an offer">
      <div className="field">
        <input
          onChange={handleChange}
          name="note"
          className="input is-large"
          type="text"
          placeholder="Write some catchy note"
          max="5"
          min="0"
        />
        <p className="help">Notes can get your request noticed</p>
      </div>
      <div className="field">
        <input
          onChange={handleChange}
          name="time"
          className="input is-large"
          type="textr"
          placeholder="What would you like to trade?"
        />
        <p className="help">Enter trade</p>
      </div>
      <div className="service-price has-text-centered">
        {/* <div className="service-price-title">
          Upon acceptance {service.user.fullName} will charge you:
        </div>
        <div className="service-price-value">
          <h1 className="title">{offer.price}$</h1>
        </div> */}
      </div>
    </Modal>
  );
};

export default OfferModal;
