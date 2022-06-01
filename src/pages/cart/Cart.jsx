import React,{useEffect,useState} from 'react'

import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import productData from '../../assets/fake-data/products'

import Helmet from '../../components/Helmet'
import classNames from 'classnames/bind'
import styles from './cart.scss'
import bannercart from '../../assets/images/banners/banner_12.jpg'

import CartItem from '../../components/cartitem/CartItem'
const cx = classNames.bind(styles);
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value)


 const [cartProducts, setCartProducts] = useState([])

 const [totalProducts, setTotalProducts] = useState(0)
 const [totalPrice, setTotalPrice] = useState(0)

 useEffect(() => {
  setCartProducts(productData.getCartItemsDetail(cartItems))
   setTotalProducts(cartItems.reduce((total,item)=> total + Number(item),0 ))
   setTotalPrice(cartItems.reduce((total,item)=> total * item.price,0 ))
 },[cartItems])
console.log(cartProducts)
  return (
    <Helmet title="cart">
    <div className={cx('cart-banner')}>
      <img src={bannercart} alt="" />
      <div className={cx('cart-banner__title')}>SHOPPING BAG</div>
    </div>
    <div className={cx('cart')}>
    
    <div className={cx('cart__list')}>
    <div className={cx('cart__list__title')}>YOUR SELECTIONS</div>
      {
        cartProducts.map((item, index) => (
          <CartItem item={item} key={index} />
        ))
      }
    </div>
      <div className={cx('cart__info')}>
        <div className={cx('cart__info__txt')}>
          <p>
          ORDER SUMMARY
          </p>
          <div className={cx('cart__info__txt__price')}>
            <span>Total</span>
            <span>{totalPrice}</span>
          </div>
          <div className={cx('cart__info__txt__description')}>
          <p>
          VIEW DETAILS
          </p>
          </div>
          <span>Please note that your billing details will be verified and your credit card will be charged at the time of shipment. For Made to Order, DIY, personalised and selected Décor items, payment will be taken at the time the order is placed.</span>
        </div>
        <div className={cx('cart__info__btn')}>
          <button>CHECKOUT</button>
          <Link to="/catalog">
            <button>Continue to buy</button>
          </Link>
        </div>
      </div>
    
    </div>

    </Helmet>
  )
}

export default Cart