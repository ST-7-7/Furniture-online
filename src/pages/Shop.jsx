import React, { useState } from 'react';
import '../styles/shop.css';
import products from '../assets/data/products';
import CommonSection from '../components/product/CommonSection';
import Helmet from '../components/helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

import ProductList from '../components/product/ProductList';

function Shop() {

  const [productsData, setProductsData] = useState(products)

  const handleFilteredProducts = (e) => {
    const filterValue = e.target.value;

    if (filterValue === 'sofa') {
      const filteredProducts = products.filter( (item) => (
        item.category === 'sofa'
      ));

      setProductsData(filteredProducts);
    }

    if (filterValue === 'mobile') {
      const filteredProducts = products.filter( (item) => (
        item.category === 'mobile'
      ));

      setProductsData(filteredProducts);
    }

    if (filterValue === 'chair') {
      const filteredProducts = products.filter( (item) => (
        item.category === 'chair'
      ));
      
      setProductsData(filteredProducts);
    } 

    if (filterValue === 'watch') {
      const filteredProducts = products.filter( (item) => (
        item.category === 'watch'
      ));

      setProductsData(filteredProducts);
    }

    if (filterValue === 'wireless') {
      const filteredProducts = products.filter( (item) => (
        item.category === 'wireless'
      ));

      setProductsData(filteredProducts);
    }
    
    //const filterValue = e.target.value;
    //const categories = ['sofa', 'mobile', 'chair', 'watch', 'wireless'];
    //if (categories.includes(filterValue)) {
    // const filteredProducts = products.filter((item) => item.category === filterValue);
    // setProductsData(filterProducts);}

  }

  const handleSearchedProducts = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter( (item) => (
      item.productName.toLocaleLowerCase().includes(searchTerm.toLowerCase())))
  
    setProductsData(searchedProducts);
  }

  return (
    <Helmet title='shop'>
      <CommonSection title='Products'/>

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter-widget">
                <select onChange={handleFilteredProducts}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
              <div className="filter-widget">
                <select>
                  <option>Sort by</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
                </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search-box">
                <input 
                  type='text' 
                  placeholder='Search...' 
                  onChange={handleSearchedProducts}
                  />
                <span>
                  <i class="ri-search-2-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (<h1 className='text-center fs-4'>No products are found.</h1>) : (<ProductList data={productsData}/>)}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

export default Shop;