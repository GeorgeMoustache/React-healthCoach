import React, { Component } from 'react';
import styled from 'styled-components';

const TitleBar = styled.div`
  background: #006fdc;
  .info {
    font-size: 12px;
    color: #CCC;
    letter-spacing: 1px;
    a {
      color: #FFF;
    }
  }
  .social {
    display: flex;
    a {
      display: block;
      width: 30px;
      height: 30px;
      margin-left: 1px;
      background: #FFF;
      text-indent: -9999px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default class extends Component {
  render() {
    return (
      <TitleBar>
        <div className="wrap">
          <div className="info">Phone no: <a href="tel:+00 1234 567">+00 1234 567</a> or email us: <a href="mailto:emailsample@email.com">emailsample@email.com</a></div>
          <div className="social">
            <a className="fb" href="./" target="_blank">Facebook</a>
            <a className="twitter" href="./" target="_blank">twitter</a>
            <a className="ig" href="./" target="_blank">ig</a>
            <a className="in" href="./" target="_blank">linkedin</a>
          </div>
        </div>
      </TitleBar>
    );
  }
}