import React, { useCallback, useEffect, useRef, useState } from "react";
import Helmet from "../../components/Helmet";
import productData from "../../assets/fake-data/products";
import banner from "../../assets/images/women/bannerwomen.jpg";
import category from "../../assets/fake-data/category";
import CheckBox from "../../components/checkbox/CheckBox";
import colors from "../../assets/fake-data/product-color";
import size from "../../assets/fake-data/product-size";
import InfinityList from "../../components/infinitylist/InfinityList"
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

      if( filter.category.length > 0) {
        temp =temp.filter(e => filter.category.includes(e.categorySlug));
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

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle('active')
  return (
    <Helmet title="product">
      <div className="catalog">
        <div className="catalog__banner">
          <img src={banner} alt="" />
        </div>
        <div className="catalog-body">
          <div className="catalog-body__filter"  ref={filterRef}>
          <div className="catalog-body__filter__close" onClick={showHideFilter}>
            <i className="bx bx-left-arrow-alt" ></i>
          </div>
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
            <div className="catalog-body__filter__toggle">
              <button onClick={showHideFilter}>Filter</button>
            </div>
          <div className="catalog-body__content"></div>
          <InfinityList 
            data={products}
          />
         
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
