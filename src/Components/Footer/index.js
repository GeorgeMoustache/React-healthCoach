import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 40px 20px;
  background: #131719;
  .row {
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    margin: 20px auto;
    .info {
      max-width: 300px;
      h3 {
        margin-bottom: 20px;
        font-size: 18px;
        color: #FFF;
        font-weight: 600;
        letter-spacing: 2px;
        span {
          color: #a3cb4c;
        }
      }
      p {
        margin-bottom: 20px;
        font-size: 14px;
        color: #666;
        line-height: 1.5;
      }
      a {
        color: #1089ff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .navi {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 600px;
      li {
        width: 25%;
        margin: 0 10px;
        padding: 0 10px;
        border-left: 1px solid #555;
        h3 {
          margin-bottom: 20px;
          font-size: 18px;
          color: #FFF;
          font-weight: normal;
        }
        a { 
          display: block;
          font-size: 14px;
          color: #666;
          line-height: 1.8;
          transition: all .3s;
          &:hover {
            color: #FFF;
          }
        }
      }
    }
    .copyright {
      font-size: 14px;
      color: #666;
      a {
        color: #1089ff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .links {
      font-size: 14px; 
      a {
        display: inline-block;
        margin-left: 10px;
        color: #666;
        transition: all .3s;
        &:hover {
          color: #FFF;
        }
      }
    }
  }
`

export default class extends Component {
  render() {
    return (
      <Footer>
        <div className="row">
          <div className="info">
            <h3>Health<span>care</span></h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <a href="/">read more</a>
          </div>
          <ul className="navi">
            <li>
              <h3>Services</h3>
              <a href="/">Balance Body</a>
              <a href="/">Physical Activity</a>
              <a href="/">Fitness Program</a>
              <a href="/">Healthy Food</a>
            </li>
            <li>
              <h3>About</h3>
              <a href="/">Staff</a>
              <a href="/">Team</a>
              <a href="/">Careers</a>
              <a href="/">Healthy Food</a>
            </li>
            <li>
              <h3>Resources</h3>
              <a href="/">Security</a>
              <a href="/">Global</a>
              <a href="/">Charts</a>
              <a href="/">Privacy</a>
            </li>
            <li>
              <h3>Services</h3>
              <a href="/">Facebook</a>
              <a href="/">Twitter</a>
              <a href="/">Instagram</a>
              <a href="/">Google</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="copyright">Copyright ©2020 All rights reserved | This template is made with by <a href="https://colorlib.com">Colorlib.com</a></div>
          <div className="links">
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
            <a href="/">Compliances</a>
          </div>
        </div>
      </Footer>
    );
  }
}