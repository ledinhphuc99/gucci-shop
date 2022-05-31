import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import {addItem} from "../../redux/shopping-cart/cartItemslide"
import classNames from 'classnames/bind'
import styles from './productview.scss'
import { useNavigate } from 'react-router-dom';

const cx= classNames.bind(styles);
const ProductView = props => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = props.product
  

    if(product === undefined) product = {
        price: 0,
        title: "",
        color: [],
        size: [],
    }
    const [previewImg,setPreviewImg] = useState(product.img1)

    const [color,setColor] = useState(undefined)
    const [size,setSize] = useState(undefined)

    const check = () =>{
       

        if(color === undefined){
            alert('Please choose color!')
            return false
        }

        if(size === undefined){
            alert('Please choose size!')
            return false
        }
          return true
    }

    const addTocart = () => {
        if(check()){
           dispatch(addItem({
               slug: product.slug,
               color: color,
               size: size,
               price: product.price
           }))

           alert('success')
        }

    }
    const gotoCart = () => {
        if(check()){
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                price: product.price
            }))
            navigate('/cart')
        }
    }

  return (
    <div className={cx('product')}>
    
        <div className={cx('product__images')}>
            <div className={cx('product__images__list')}>
                <div className={cx('product__images__list__item')} onClick={()=>setPreviewImg(product.img1)}>
                    <img src={product.img1} alt="" />
                </div>
                <div className={cx('product__images__list__item')} onClick={()=>setPreviewImg(product.img2)}>
                    <img src={product.img2} alt="" />
                </div>
            </div>
            <div className={cx('product__images__main')}>
                <img src={previewImg} alt="" />
            </div>
            
       
       
        </div>
        <div className={cx('product__info')}>
        <h1 className={cx('product__info__title')}>{product.title}</h1>
        <div className={cx('product__info__item')}>
            <span className={cx('product__info__item__price')}>{product.price}</span>
        </div>
        <div className={cx('product__info__item')}>
            <div className={cx('product__info__item__title')}>Colors</div>
            <div className={cx('product__info__item__list')}>
                {
                    product.colors.map((item, index) => (
                        <div key={index} className={cx(`product__info__item__list__item ${color === item ? 'active' : ''}`)} onClick={()=>setColor(item)}>
                           <div className={cx(`circle bg-${item}`)} ></div>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className={cx('product__info__item')}>
            <div className={cx('product__info__item__title')}>Size</div>
            <div className={cx('product__info__item__list')}>
                {
                    product.size.map((item, index) => (
                        <div key={index} className={cx(`product__info__item__list__item ${size === item ? 'active' : ''}`)} onClick={()=> setSize(item)}>
                        <span className={cx('product__info__item__list__item__size')}> {item}</span>
                           
                        </div>
                    ))
                }
            </div>
        </div>
        <div className={cx('product__info__item')}>
            <button className={cx('product__info__item__btn')}  onClick={addTocart}>ADD TO SHOPPING BAG</button>
            <button className={cx('product__info__item__btn')}  onClick={gotoCart}>BUY NOW</button>
        </div>
       </div>
        <div className={cx('product-descsription')}>
                <div className={cx('product-descsription__title')}>PRODUCT DETAILS</div>
                <div className={cx('product-descsription__title__number')}>{product.numberStyle}</div>
                <div className={cx('product-descsription__content')}>{product.description}</div>
                <div className={cx('product-descsription__content')}>{product.description2}</div>
            </div>
    </div>
  )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductView