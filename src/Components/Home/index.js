import React, { Component } from 'react';
import Banner from "./Banner";
import Plan from "./Plan";
import styled from "styled-components";

const Home = styled.div`

`

export default class extends Component {
  render() {
    return (
      <Home>
        <Banner />
        <Plan />
      </Home>
    );
  }
}