import './Loader.css';

import React from 'react'

const Loader = () => {
  return (
    <section>
      <div className="container">
        <div className="c-card front-face">
          <header>
            <span className="logo">
              <img src="/logo.png" alt="" />
              <h5>Master Card</h5>
            </span>
            <img src="/chip.png" alt="" className="chip" />
          </header>

          <div className="c-card-detail">
            <div className="name-number">
              <h6>Card Number</h6>
              <h5 className="number">4063 2020 3070 5000</h5>
              <h5 className="name">E-Commerce</h5>
            </div>

            <div className="valid-date">
              <h6>Valid Thru</h6>
              <h5>08/27</h5>
            </div>
          </div>
        </div>

        <div className="c-card back-face">
          <h6>
            For customer service call +977 4343 4693 or email at
            mastercard@gmail.com
          </h6>
          <span className="magnetic-strip"></span>
          <div className="signature"><i>005</i></div>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            maiores sed doloremque nesciunt neque beatae voluptatibus doloribus.
            Libero et quis magni magnam nihil temporibus? Facere consectetur
            dolore reiciendis et veniam.
          </h5>
        </div>
      </div>
      <h1>Loading...</h1>
    </section>
  )
}

export default Loader
