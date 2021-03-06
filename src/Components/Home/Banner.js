import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import styled from 'styled-components';

const Banner = styled.div`
  .owl-dots {
    position: absolute;
    bottom: 100px;
    width: 100%;
    text-align: center;
    .owl-dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0 5px;
      border: 1px solid #FFF;
      border-radius: 50%;
      &.active {
        background: #FFF;
      }
      span {
        display: none;
      }
    }
  }
  .owl-item > div {
    display: flex;
    align-items: center;
    height: calc(100vh - 107px);
    padding: 0 10%;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    &.item-2 {
      justify-content: flex-end;
    }
    .wrap {
      width: 40%;
      h2 {
        margin-bottom: 20px;
        font-size: 14px;
        color: #1089ff;
        letter-spacing: 3px;
        font-weight: normal;
      }
      p {
        margin-bottom: 20px;
        font-size: 40px;
        color: #000;
      }
      .links {
        display: flex;
        a {
          display: block;
          margin: 0 5px;
          padding: 12px 16px;
          border: 1px solid transparent;
          border-radius: 5px;
          font-size: 12px;
          transition: all .3s;
          &.blue {
            background: #1089ff;
            border-color: #1089ff;
            color: #FFF;
            &:hover {
              background: #FFF;
              color: #1089ff;
            }
          }
          &.white {
            background: #FFF;
            border-color: #FFF;
            color: #000;
            &:hover {
              background: #000;
              color: #FFF;
            }
          }
        }
      }
    }
  }
`

const options = {
  items: 1,
  nav: false,
  dots: true,
  rewind: true,
  autoplay: true
};

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    const apiServerRoot = 'https://george-proxy.herokuapp.com/https://project.george-moustache.com/apiDoc/healthCoach/';
    fetch(`${apiServerRoot}home/banner`)
      .then(res => res.json())
      .then(data => {
        const { list } = data.data;
        list.forEach(item => {
          item.style = {
            backgroundImage: `url(${item.img})`
          }
        })
        this.setState({ list: list })
      })
  }

  render() {
    if (this.state.list.length) {
      return (
        <Banner>
          <OwlCarousel options={options}>
            {
              this.state.list.map((item, idx) => {
                return (
                  <div key={idx} className={`item-${idx}`} style={item.style}>
                    <div className="wrap">
                      <h2>{item.title}</h2>
                      <p>{item.content}</p>
                      <div className="links">
                        <a className="blue" href="/">learn more</a>
                        <a className="white" href="/">contact us</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </OwlCarousel>
        </Banner>
      );
    } else {
      return <Banner />
    }
  }
}
