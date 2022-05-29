import React, { useCallback, useEffect, useState } from "react";
import Helmet from "../../components/Helmet";
import Grid from "../../components/Grid";
import ProductCard from "../../components/productcart/ProductCard";
import productData from "../../assets/fake-data/products";
import banner from "../../assets/images/women/bannerwomen.jpg";
import category from "../../assets/fake-data/category";
import CheckBox from "../../components/checkbox/CheckBox";
import colors from "../../assets/fake-data/product-color";
import size from "../../assets/fake-data/product-size";
import "./catalog.scss";
const Catalog = () => {
  const innitFilter = {
    category: [],
    color: [],
    size: [],
  };
  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState(innitFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          
          setFilter({ ...filter, color: newColor });
          break
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break
        default:
      }
    }
  };

  const updtableProducts = useCallback(
    () =>{
      let temp = productList

      if( filter.category.length >0) {
        temp =temp.filter(e => filter.category.includes(e.slug))
      }
      if(filter.color.length > 0){
        temp = temp.filter(e=>{
          const check = e.colors.find(color => filter.color.includes(color))
          return check !==undefined
        })
      }
      if(filter.size.length > 0){
        temp = temp.filter(e=>{
          const check = e.size.find(size => filter.size.includes(size))
          return check !==undefined
        })
      }
      setProducts(temp)
    },[filter,productList]
  )
  
  const clearFilter = () => setFilter(innitFilter)
  useEffect(() => {
    updtableProducts()
  },[updtableProducts])
  return (
    <Helmet title="product">
      <div className="catalog">
        <div className="catalog__banner">
          <img src={banner} alt="" />
        </div>
        <div className="catalog-body">
          <div className="catalog-body__filter">
            <div className="catalog-body__filter__widget">
              <div className="catalog-body__filter__widget__title">
                product portfolio
              </div>
              <div className="catalog-body__filter__widget__content">
                {category.map((item, index) => (
                  <div
                    key={index}
                    className="catalog-body__filter__widget__content__item"
                  >
                    <CheckBox label={item.display} onChange={(input)=> filterSelect("CATEGORY", input.checked, item)} checked={filter.category.includes(item.categorySlug)} />
                  </div>
                ))}
              </div>
            </div>

            <div className="catalog-body__filter__widget">
              <div className="catalog-body__filter__widget__title">Colors</div>
              <div className="catalog-body__filter__widget__content">
                {colors.map((item, index) => (
                  <div
                    key={index}
                    className="catalog-body__filter__widget__content__item"
                  >
                    <CheckBox label={item.display} onChange={(input)=> filterSelect("COLOR", input.checked, item)} checked={filter.color.includes(item.color)}/>
                  </div>
                ))}
              </div>
            </div>

            <div className="catalog-body__filter__widget">
              <div className="catalog-body__filter__widget__title">Sizes</div>
              <div className="catalog-body__filter__widget__content">
                {size.map((item, index) => (
                  <div
                    key={index}
                    className="catalog-body__filter__widget__content__item"
                  >
                    <CheckBox label={item.display} onChange={(input)=> filterSelect("SIZE", input.checked, item)} checked={filter.size.includes(item.size)}/>
                  </div>
                ))}
              </div>
            </div>
            <div className="catalog-body__filter__widget">
              <div className="catalog-body__filter__widget__content">
                <button className="catalog-body__filter__widget__content__btn" onClick={clearFilter}>
                  remove filter
                </button>
              </div>
            </div>
          </div>
          <div className="catalog-body__content"></div>
          <Grid col={3} mdCol={2} smCol={1} gap={1}>
            {products.map((item, index) => (
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
            ))}
          </Grid>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
