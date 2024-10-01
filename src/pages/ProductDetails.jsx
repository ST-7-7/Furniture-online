import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Helmet from '../components/helmet/Helmet';
import ProductsList from '../components/product/ProductList';
import commonSection from '../components/product/CommonSection';

import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

import '../styles/productDetails.css';
import { li } from 'framer-motion/client';

import { db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import useGetData from '../custom-hooks/useGetData';


function ProductDetails() {

  const [product, setProduct] = useState({});
  const [review, setReview] = useState('desc');
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);

  const {id} = useParams()

  const {data: products} = useGetData('product');

  const docRef = doc(db, 'product', id);

  useEffect( () => {
    const getProduct = async() => {
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setProduct(docSnap.data())
      } else {
        console.log('no product!')
      }
    }
    getProduct()
  }, [])

  const {imgUrl, productName, price, 
    // avgRating, reviews, 
    description, shortDesc, category} = product;

  const relatedProducts = products.filter( (item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success('Review submitted.')
  };

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }));

    toast.success('Product added successfully!')
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <commonSection title={productName} />
        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg='6'>
                <img src={imgUrl}  alt='product image'/>
              </Col>

              <Col lg='6'>
                <div className="product-details">
                  <h2>{productName}</h2>
                  <div className="product-rating d-flex align-items-center gap-5 mb-3">
                    <div>
                      <span><i class="ri-star-s-fill"></i></span>
                      <span><i class="ri-star-s-fill"></i></span>
                      <span><i class="ri-star-s-fill"></i></span>
                      <span><i class="ri-star-s-fill"></i></span>
                      <span><i class="ri-star-half-s-fill"></i></span>
                    </div>

                    {/* <p>(<span>{avgRating}</span> ratings)</p> */}
                  </div>
                  
                  <div className='d-flex align-items-center gap-5'>
                    <span className='product-price'>${price}</span>
                    <span>Category: {category}</span>
                  </div>

                  <p className='mt-3'>{shortDesc}</p>

                  <motion.button whileHover={{scale: 0.9}} className='buy-button' onClick={addToCart}>Add to Cart</motion.button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <div className="reviews d-flex align-items-center gap-5">
                  <h6 className={`${review==='desc' ? 'active-reviews' : ''}`} onClick={()=> setReview('desc')}>Description</h6>
                  <h6 className={`${review==='rev' ? 'active-reviews' : ''}`} onClick={()=> setReview('rev')}>
                  Reviews ({review.length})
                  </h6>
                </div>

                {review === 'desc' ? (
                  <div className='reviews-content mt-5'>
                    <p>{description}</p>
                  </div>) : (
                    <div className='product-review mt-5'>
                      <div className="review-wrapper">
                        {/* <ul>
                          {reviews?.map( (item, index) =>(
                            <li key={index} className='mb-4'>
                              <h6>Iris Muller</h6>
                              <span>{item.rating} (rating)</span>
                              <p>{item.text}</p>
                            </li>
                          ))}
                        </ul> */}

                        <div className="review-form">
                          <h4>Leave Your Experience</h4>
                          <form action='' onSubmit={submitHandler}>
                            <div className="form-group">
                              <input type='text' placeholder='Enter Name' ref={reviewUser} required/>
                            </div>
                            <div className="form-group d-flex align-items-center gap-5 rating-group">
                              <motion.span whileHover={{scale: 1.2}} onClick={() => setRating(1)}>1<i class="ri-star-s-fill"></i></motion.span>
                              <motion.span whileHover={{scale: 1.2}} onClick={() => setRating(2)}>2<i class="ri-star-s-fill"></i></motion.span>
                              <motion.span whileHover={{scale: 1.2}} onClick={() => setRating(3)}>3<i class="ri-star-s-fill"></i></motion.span>
                              <motion.span whileHover={{scale: 1.2}} onClick={() => setRating(4)}>4<i class="ri-star-s-fill"></i></motion.span>
                              <motion.span whileHover={{scale: 1.2}} onClick={() => setRating(5)}>5<i class="ri-star-s-fill"></i></motion.span>
                            </div>

                            <div className="form-group">
                              <textarea ref={reviewMsg} row={4} type='text' placeholder='Review Message' required />
                            </div>

                            <motion.button whileTap={{scale: 1.1}} type='submit' className='buy-button'>
                              Submit
                            </motion.button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
              </Col>
              <Col lg='12' className='mt-5'>
                <h2 className='related-title'>You might also like</h2>
              </Col>
              <ProductsList data={relatedProducts}/>
            </Row>
          </Container>
        </section>
    
    </Helmet>
  )
}

export default ProductDetails