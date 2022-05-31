import React from "react";
import Grid from '../../components/Grid'
import productData from '../../assets/fake-data/productchildren'
import ProductCard from "../../components/productcart/ProductCard";
import bannerchildren from "../../assets/images/children/bannerchildren.jpg"
import Helmet from "../../components/Helmet";
import classNames from "classnames/bind";
import styles from "./children.scss"
import Section,{SectionBody} from '../../components/section/Section'
const cx = classNames.bind(styles);
const Children = () => {
  const products = productData.getAllProducts()
  
  return <Helmet title="chiddren">
    <div className={cx('children')}>
      <div className={cx('children__banner')}>
        <img src={bannerchildren} alt="" />
        <div className={cx('children__banner__title')}>Gucci Love Parade</div>
        <div className={cx('children__banner__subtitle')}>Children's</div>
      </div>
      <div className={cx('children__content')}>
        <Section>
          <SectionBody>
          <Grid col={2} mdCol={2} smCol={1} gap={1}>
            {
              products.map((item, index)=>(
  
                <div className={cx('children__content__cart')} key={index}>
                <ProductCard name={item.title} img01={item.img1}  img02={item.img2} link={item.link}  />
                </div>
              )
                
              )
            }
          </Grid>
          </SectionBody>
        </Section>
      </div>
    </div>
  </Helmet>;
};

export default Children;
