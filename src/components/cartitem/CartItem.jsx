import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import{ useDispatch} from 'react-redux'
import { removeItem } from '../../redux/shopping-cart/cartItemslide'
import{ Link} from 'react-router-dom'

import styles from './cartitem.scss'

const cx = classNames.bind(styles);
const CartItem = props => {

    const dispatch = useDispatch()

    const [item,setItem] = useState(props.item)
    const [quantity,setQuantity] = useState("1")

    useEffect(() => {
        setItem(props.item)

    },[props.item])

    const removeCarItems = () =>{
        dispatch(removeItem(item))
    }
    
  return (
    <div className={cx('cart__item')}>
        <div className={cx('cart__item__image')}>
            <img src={item.product.img1} alt="" />
        </div>
        <div className={cx('cart__item__info')}>
            <div className={cx('cart__item__info__name')}>
                <Link to={`/catalog/${item.slug}`}>

                {`${item.product.title}`}

                </Link>
            </div>
            <div className={cx('cart__item__info__size')}>Size: {item.size}</div>
            <div className={cx('cart__item__info__color')}>Color: {item.color}</div>
            <div className={cx('cart__item__info__avallable')}>
                <div className={cx('cart__item__info__avallable__title')}>AVAILABLE</div>
                <div className={cx('cart__item__info__avallable__description')}>Your selection is available for immediate purchase online.</div>
            </div>
            <div className={cx('cart__item__info__del')}>
                <button onClick={removeCarItems}>Remove</button>
            </div>
        </div>
            <div className={cx('cart__item__quantity')} >
                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    <option  value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </div>
            <div  className={cx('cart__item__price')}>
                {item.price}
            </div>
    </div>
  )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem