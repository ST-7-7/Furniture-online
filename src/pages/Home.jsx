import React, { useState, useEffect } from 'react';
import '../styles/home.css';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Row, Col} from 'reactstrap';

import heroImg from '../assets/images/hero-img2.png';
import counterImg from '../assets/images/counter-timer-img.png';

import Helmet from '../components/helmet/Helmet';
import Service from '../service/Service';
import ProductList from '../components/product/ProductList';
import Clock from '../components/product/Clock';
import useGetData from '../custom-hooks/useGetData';
import { use } from 'framer-motion/client';

function Home() {

  const {data: products, loading} = useGetData('product');

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestDeal, setBestDeal] = useState([]);
  const [mobileProducts, setMobileProducts] =useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);



  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => (
      item.category === 'chair'
    ));

    const filteredBestDeal = products.filter((item) => (
      item.category === 'sofa'
    ));

    const filteredMobileProducts = products.filter((item) => (
      item.category === 'mobile'
    ));

    const filteredWirelessProducts = products.filter((item) => (
      item.category === 'wireless'
    ));

    const filteredPopularProducts = products.filter((item) => (
      item.category === 'watch'
    ));



    setTrendingProducts(filteredTrendingProducts);
    setBestDeal(filteredBestDeal);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={'Home'}>
      <section className='hero-section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero-content">
                <p className='hero-subtitle'>Exploring products in {year}</p>
                <h2>Modern Elegance & Classic Comfort for Every Home</h2>
                <p>Et dolores invidunt takimata labore justo kasd. Diam accusam sed lorem vero et diam. Ipsum sit ipsum lorem eirmod et.</p>
                <motion.button whileTap={{scale: 1.2}} className='hero-button'><Link to='/shop'>Explore</Link></motion.button>   
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero-img">
                <img src={heroImg} alt='hero image' />
              </div>
            </Col>          
          </Row>
        </Container>
      </section>

      <Service />

      <section className='trending-products text-center'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section-title'>Inspiration for Every Room</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductList data={trendingProducts}/>
            }

          </Row>
        </Container>
      </section>

      <section className='best-sales text-center'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section-title'>Today's best deals</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductList data={bestDeal}/>
            }
          </Row>
        </Container>
      </section>

      <section className='timer-count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count-down-col ps-5'>
              <div className="clock-top-content">
                <h4 className='text-white fs-6 fw-bold mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-3 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{scale: 1.2}} className='store-button'>
                <Link to='/shop'>Get now!</Link>
              </motion.button>
            </Col>
              
            <Col lg='6' md='12' className='counter-image text-end'>
              <img src={counterImg} alt=''/>
            </Col>
            
          </Row>
        </Container>
      </section>

      <section className='text-center'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb=5'>
              <h2 className='section-title'>New Arrival</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductList data={mobileProducts}/>
            }
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductList data={wirelessProducts}/>
            }
          </Row>
        </Container>
      </section>

      <section className='popular-category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb=5'>
              <h2 className='section-title'>Popular in Category</h2>
            </Col>
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductList data={popularProducts}/>
            }
          </Row>  
        </Container>
      </section>


    </Helmet>
  )
}

export default Home