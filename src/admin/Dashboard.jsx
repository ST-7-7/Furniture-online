import { section } from 'framer-motion/client';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/dashboard.css';

import useGetData from '../custom-hooks/useGetData';




function Dashboard() {

  const {data: products} = useGetData('product')
  const {data: users} = useGetData('users')

  return (
    <section>
      <Container>
        <Row>
          <Col className='lg-3'>
            <div className="revenue-box">
              <h5>Total Sales</h5>
              <span>$7890</span>
            </div>
          </Col>
          <Col className='lg-3'>
            <div className="orders-box">
              <h5>Orders</h5>
              <span>789</span>
            </div>
          </Col>
          <Col className='lg-3'>
            <div className="products-box">
              <h5>Total Products</h5>
              <span>{products.length}</span>
            </div>
          </Col>
          <Col className='lg-3'>
            <div className="users-box">
              <h5>Total Users</h5>
              <span>{users.length}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Dashboard