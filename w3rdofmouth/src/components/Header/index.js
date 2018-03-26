import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 70vh;
  h1 {
    img {
      height: 40px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  maxwidth: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`;

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="W3rdOfMouth Logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
    <Img
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      sizes={data.background.sizes}
    />
  </HeaderWrapper>
);

export default Header;
