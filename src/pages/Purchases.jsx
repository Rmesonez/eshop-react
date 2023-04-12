import './Purchases.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import getConfig from '../helpers/getConfig'
import ShippingAdress from '../components/ShippingAdress'


const Purchases = () => {

  const [purchases, setPurchases] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', getConfig())
    .then((res) => {
      // console.log(res?.data)
      setPurchases(res?.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);



  return (
    <div className='purchases-container'>
      <h1>Purchases</h1>
          <ul className='purchases-list'>
          <button
                  onClick={() => {
                    setShow(true);
                }}
                  >Shipping Adress
                  </button>
                  <ShippingAdress show={ show } handleClose={ handleClose }
                  key={purchases.id}
                  purchases={purchases}
                  />
            {
              purchases.map((purchase) => (
                <li key={purchase.id}
                className='purchases-item'>
                  <h3 id='purchase'># {purchase.id}</h3>
                  <img src={purchase?.product?.images[2]?.url} alt={purchase?.product?.title} style={{ width: ' 120px', height: '70px'}} />
                  <h5> <b> Quantity: </b> {purchase.quantity}</h5>
                  <h5>{ purchase?.product?.title}</h5>
                  <h5> <b>Date: </b>  {purchase?.createdAt}</h5>
                  <h5> <b>Price: </b> $ {purchase?.product?.price}</h5>
                  <h5
                  id='status'
                  className={
                    ShippingAdress ? 'delivered' : 'status'
                  }
                  >{
                    ShippingAdress ? 'Delivered' : 'Pending'}
                  </h5>
                </li>
              ))
              }
          </ul>     
    </div>
  )
}

export default Purchases
