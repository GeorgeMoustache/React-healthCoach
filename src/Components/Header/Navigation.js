import React, { Component } from 'react';
import { HashRouter, NavLink } from "react-router-dom";
import styled from 'styled-components';

const Navigation = styled.ul`
  display: flex;
  li {
    a {
      position: relative;
      display: block;
      padding: 2rem 20px;
      font-size: 13px;
      color: #4d4d4d;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: 2px;
        background: #1089ff;
        transform: scaleX(0);
        transition: transform .3s;
      }
      &:hover,
      &.active {
        color: #1089ff;
        &::after {
          transform: scaleX(1);
        }
      }
    }
  }
`
export default class extends Component {
  render() {
    return (
      <Navigation>
        <HashRouter>
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
        </HashRouter>
      </Navigation>
    );
  }
}