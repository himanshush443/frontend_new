import React from "react";
import "./Plans.css";
import { Link } from "react-router-dom";

function CardDescription({ title, description }) {
  return (
    <div className="card-description">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function CardBilling({ price, recurrency }) {
  return (
    <div className="card-billing">
      <p>
        <strong className="price">₹ {price}</strong>
        <strong> / mo.</strong>
      </p>
      {/* <p>
        <span className="recurrency">
          Billed Anually or $ {recurrency}/monthly
        </span>
      </p> */}
    </div>
  );
}

function CardFeatures({ data }) {
  return (
    <div className="card-features">
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

function CardAction({ clickMe }) {
  return (
    <div className="card-action">
      <Link to="/payment">
        <button onClick={clickMe}>BUY NOW</button>
      </Link>
    </div>
  );
}

function PricingCard(props) {
  const {
    type,
    title,
    description,
    price,
    recurrency,
    mostPopular,
    data,
    clickMe,
  } = props;

  return (
    <div className={`card pricing-card ${type}`}>
      {/* {mostPopular ? <span className="most-popular">Most Popular</span> : null} */}
      <CardDescription title={title} description={description} />
      <CardBilling price={price} recurrency={recurrency} />
      <CardFeatures data={data} />
      <CardAction clickMe={clickMe} />
    </div>
  );
}

export default function Plans() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <div className="app-wrapper">
      {cardsData.map((props) => {
        return <PricingCard {...props} key={props.id} clickMe={handleClick} />;
      })}
    </div>
  );
}

const cardsData = [
  {
    id: 1,
    type: "medium",
    title: (
      <img
        height="45"
        src="https://assets.coverfox.com/static/img/insurers/motor/go-digit.png"
        alt=""
      />
    ),
    description: (
      <div>
        <div className="div">Cover Value(IDV):</div>
        <span>11,53,004</span>
      </div>
    ),
    price: 40000,
    recurrency: 14.99,
    mostPopular: false,
    data: ["Basic Price : ₹39,723", "Personal Accident Cover : ₹909"],
  },
  {
    id: 2,
    type: "basic",
    title: (
      <img
        height="45"
        src="https://assets.coverfox.com/static/img/insurers/motor/bajaj-allianz.png"
        alt=""
      />
    ),
    description: (
      <div>
        <div className="div">Cover Value(IDV):</div>
        <span>11,40,004</span>
      </div>
    ),
    price: 40632,
    recurrency: 24.99,
    mostPopular: false,
    data: ["Basic Price : ₹39,723", "Personal Accident Cover : ₹909"],
  },
  {
    id: 3,
    type: "medium",
    title: (
      <img
        height="45"
        src="https://assets.coverfox.com/static/img/insurers/motor/bharti-axa.png"
        alt=""
      />
    ),
    description: (
      <div>
        <div className="div">Cover Value(IDV):</div>
        <span>11,45,004</span>
      </div>
    ),
    price: 40000,
    recurrency: 59.99,
    mostPopular: true,
    data: ["Basic Price : ₹39,723", "Personal Accident Cover : ₹909"],
  },
  {
    id: 4,
    type: "pro",
    title: "Pro Plan",
    description: "Lorem ipsum",
    price: 40632,
    recurrency: 84.99,
    mostPopular: false,
    data: ["Basic Price : ₹39,723", "Personal Accident Cover : ₹909"],
  },
];
