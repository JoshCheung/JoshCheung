import React, { Component } from 'react';
import './css/Grid.css';
import Gallery from 'react-photo-gallery';
import superman from './media/superman.jpg'
import zuko from './media/zuko-ATLA.png'
import spiderman from './media/spiderman.jpg'
import girl from './media/girl.jpg'
import tiger from './media/tiger.jpg'
import girl2 from './media/girl2.jpg'
import ramen2 from './media/ramen-1.jpg'
import ramen1 from './media/ramen-2.jpg'
import latteart from './media/latte-art.png'


const photos = [
    {
        src: superman,
        width: 11.0,
        height: 14.0
    },
    {
      src: zuko,
      width: 36,
      height: 27
    },
    {
        src: spiderman,
        width: 48,
        height: 60
    },
    {
        src: girl,
        width: 42,
        height: 55
    },
    {
        src: tiger,
        width: 30,
        height: 40
    },
    {
        src: girl2,
        width: 30,
        height: 40
    },
    {
      src: latteart,
      width: 30,
      height: 40
    },
    {
      src: ramen1,
      width: 29,
      height: 31
    },
    {
      src: ramen2,
      width: 37,
      height: 28
    },

];

class Grid extends Component {
  constructor (props) {
      super(props);
      this.state = {
      
      }
  }

  render() {
      return (
          <div className="grid-component-container">
            <Gallery photos={photos} />
          </div>
      );
  }
}

export default Grid;
