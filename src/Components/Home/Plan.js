import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, CircularProgress } from '@material-ui/core';

const apiServerRoot = 'https://george-proxy.herokuapp.com/https://project.george-moustache.com/apiDoc/healthCoach/'

const Plan = styled.div`
  position: relative;
  margin-top: -100px;
  z-index: 3;
  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1280px;
    margin: 30px auto;
    dl {
      width: 28%;
      margin-bottom: 20px;
      padding: 20px;
      background: #FFF;
      border-radius: 10px;
      box-shadow: 0 5px 10px 5px rgba(0, 0, 0, .1);
      dt {
        margin-bottom: 20px;
        padding-bottom: 60%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        text-indent: -9999px;
      }
      dd {
        padding: 0 20px;
        text-align: center;
        .title {
          margin-bottom: 20px;
          font-size: 18px;
        }
        .content {
          margin-bottom: 20px;
          font-size: 14px;
          color: #999;
          line-height: 1.5;
        }
        .more {
          display: inline-block;
          padding: 10px 20px;
          border: 1px solid #007bff;
          border-radius: 5px;
          color: #007bff;
          transition: all .3s;
          &:hover {
            background: #007bff;
            color: #FFF;
          }
        }
      }
    }
  }
  
`
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    fetch(`${apiServerRoot}home/plan`)
      .then(res => res.json())
      .then(data => {
        const { list } = data.data;
        this.setState({list: list});
      })
  }

  render() {
    return ( 
      <Plan>
        <div className="wrap">
          {
            this.state.list.map((obj, idx) => {
              const imgStyle = {
                backgroundImage: `url(${obj.img})`
              }
              return (
                <dl key={idx}>
                  <dt style={imgStyle}>圖片</dt>
                  <dd>
                    <div className="title">{obj.title}</div>
                    <div className="content">{obj.content}</div>
                    <Button color="primary"><CircularProgress size="small" />Read more</Button>
                  </dd>
                </dl>
              )
            })
          }
        </div>
      </Plan>
    );
  }
}