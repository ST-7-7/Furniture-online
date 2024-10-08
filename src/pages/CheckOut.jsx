import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/product/CommonSection';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';


function CheckOut() {

  const totalQty = useSelector(state=>state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount);
  return (
    <Helmet title='Checkout'>
      <commonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing-form'>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='Enter your name' />
                </FormGroup>

                <FormGroup className='form-group'>
                  <input type="email" placeholder='Enter your email' />
                </FormGroup>

                <FormGroup className='form-group'>
                  <input type="number" placeholder='Enter your phone number' />
                </FormGroup>

                <FormGroup className='form-group'>
                  <input type="text" placeholder='Enter your address' />
                </FormGroup>

                <FormGroup className='form-group'>
                  <input type="text" placeholder='City' />
                </FormGroup>

                <FormGroup className='form-group'>
                  <input type="text" placeholder='Postal Code' />
                </FormGroup>

                <FormGroup className='form-group'>
                  <input type="text" placeholder='State' />
                </FormGroup>

              </Form>
            </Col>

            <Col lg='4'>
              <div className="checkout-cart">
                <h6>Total Qty: <span>{totalQty}</span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6><span>Shipping: <br />free shipping</span> <span>$0</span></h6>
                <h4>Total Cost: <span>$120</span></h4>
                <button className='buy-button auth-button'>Place an Order</button>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CheckOut