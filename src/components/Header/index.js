import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
  background: #47a1f8;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '40vh' : '20vh')};
  h1 {
    img {
      height: 40px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          border-bottom: 3px solid #254168;
        }
      }
    }
  }
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { viewH: this.props.location.pathname === '/' ? '40vh' : '20vh' };
  }
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/') {
        this.wrapper.animate([{ height: prevState.viewH }, { height: '40vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.7, 1)',
          iterations: 1,
        });
        this.setState({ viewH: '40vh' });
      } else if (prevProps.location.pathname === '/' && this.props.location.pathname !== '/') {
        this.wrapper.animate([{ height: prevState.viewH }, { height: '20vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.7, 1)',
          iterations: 1,
        });
        this.setState({ viewH: '20vh' });
      }
    }
  };

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper isHome={location.pathname === '/'} ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}>
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
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/about">Cur </Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.3,
          }}
          sizes={data.background.sizes}
        />
      </HeaderWrapper>
    );
  }
}
