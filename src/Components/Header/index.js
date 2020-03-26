import React, { Component } from 'react';
import TitleBar from './Titlebar';
import Navigation from './Navigation';
import styled from 'styled-components';

const Header = styled.header`
  box-shadow: 0px 7px 18px -20px #000;
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    .logo {
      display: block;
      font-size: 20px;
      color: #000;
      font-weight: bold;
      span {
        color: #a3cb4c;
      }
    }
  }
`

export default class extends Component {
  render() {
    return (
      <Header>
        <TitleBar />
        <div className="wrap">
          <a className="logo" href="./">Health<span>coach</span></a>
          <Navigation />
        </div>
      </Header>
    );
  }
}