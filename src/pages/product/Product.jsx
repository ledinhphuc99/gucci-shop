import React, { useEffect } from 'react'
import Helmet from '../../components/Helmet'
import Section,{SectionBody,SectionTitle} from '../../components/section/Section'
import Grid from '../../components/Grid'
import ProductCard from '../../components/productcart/ProductCard'
import productData from '../../assets/fake-data/products'
import HeroSlider from '../../components/heroslider/HeroSlider'
import ProductView from '../../components/productview/ProductView'
import {
  heroSliderDatashirt
} from "../../assets/fake-data/hero-slider";
import { useParams } from 'react-router-dom'

const Product = props => {
  const params = useParams()
  const product = productData.getProductBySlug(params.slug)
  const relatedProducts = productData.getProducts(8)

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <Helmet title={product.title}>
    <HeroSlider
        data={heroSliderDatashirt}
        control={true}
        auto={true}
        timeout={5000}
        
      />
      <Section>
        <SectionBody>
          <ProductView  product={product}/>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
        You May Also Like
        </SectionTitle>
        <SectionBody>
          <Grid
          col={4}
          mdCol={2}
          smCol={1}
          gap={1}
          >
            {
              relatedProducts.map((item,index)=>(
                <ProductCard
                key={index}
                img01={item.img1}
                img02={item.img2}
                name={item.title}
                link={item.link}
                price={item.price}
                icon={item.icon}
                slug={item.slug}
              />
              ))

            }
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Product