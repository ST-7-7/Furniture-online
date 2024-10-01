import React, { useRef, useEffect } from 'react';
import './header.css';

import userIcon from '../../assets/images/user-icon.png';

import logo from '../../assets/images/eco-logo.png';
import { Container, Row } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';

const navLinks = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'cart',
    display: 'Cart'
  }
]

function Header() {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const profileActionRef = useRef(null);

  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if ( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        headerRef.current.classList.add('sticky-header');
      } else {
        headerRef.current.classList.remove('sticky-header');
      }
    });
  };

  const logout = () => {
    signOut(auth).then(()=>{
      toast.success('Logged out');
      navigate('/home');
    }).catch(err => {
        toast.error(err.message)
    })
  }

  useEffect(() => {
    stickyHeaderFunc();
    console.log(profileActionRef.current); 
    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  });

  const menuToggle = () => menuRef.current.classList.toggle('active-menu');

  const navigateToCart = () => {
    navigate('/cart');
  };

  const toggleProfileActions = () => {
    if (profileActionRef.current.classList.contains('show-profileActions')) {
      profileActionRef.current.classList.remove('show-profileActions');
    } else {
      profileActionRef.current.classList.add('show-profileActions');
    }
  };
  




  return (
    <div className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav">
            <div className="logo-content">
              <div className="logo">
                <img src={logo} alt='logo' />
                <div className="content">
                  <h1>Furnitures</h1>
                </div>
              </div>

              <div className="logo-p">
                {/* <p style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>Since 1970</p> */}
              </div>
            </div>
            
            

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {navLinks.map((item, index) => (
                  <li className='nav-item' key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav-active" : ""}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-icon">
              <span className='fav-icon'>
                <i class="ri-heart-3-line"></i>
                <span className='badge'>1</span>
              </span>
              <span className='cart-icon' onClick={navigateToCart}>
                <i class="ri-shopping-cart-line"></i>
                <span className='badge'>{totalQuantity}</span>
              </span>

              <div className='profile'>
                <motion.img 
                  // className='user-icon'   
                  whileTap={{scale: 1.2}} 
                  src={currentUser ? currentUser.photoURL : userIcon} 
                  onClick={toggleProfileActions}
                />

                <div 
                  className="profile-actions" 
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? 
                  (<span onClick={logout}>Logout</span> ) : 
                    (<div className='d-flex align-items-center justify-content-center flex-column'>
                      <Link to='/signup'>Sign up</Link>
                      <Link to='/login'>Login</Link>
                      <Link to='/dashboard'>Dashboard</Link>
                    </div>)
                  }
                </div>

              </div>

              <div className="mobile-menu">
                <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
              </div>

            </div>
          </div>
        </Row>


      </Container>
    
    </div>
  )
}

export default Header