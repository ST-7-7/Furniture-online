import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='6' className='mb-4'>
            <div className="logo">
              
              <div className="content">
                <h1>Furnitures</h1>
              </div>
            </div>
            <p className="footer-text mt-4">
              Ipsum invidunt justo et elitr diam sed vero sed stet. Ipsum ipsum dolor et amet sed et. Et sea no.
            </p>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
            <div className="footer-link">
              <h4 className="footer-link-title">Top Categery</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md='3' className='mb-4'>
          <div className="footer-link">
              <h4 className="footer-link-title">Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link className="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link className="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
            <div className="footer-link">
              <h4 className="footer-link-title">Contact</h4>
              <ListGroup className='footer-contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>80 Lodeitn, Diam rebum</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+ 61 0456789123</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>furnitures1970@fnt.org.com</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-feedback-line"></i></span>
                  <p>Feedback</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer-copyright">Copyright {year} developed by Sitong Yang. All rights reserved. </p>
          </Col>

        </Row>
      </Container>

    </footer>
  )
}

export default Footer