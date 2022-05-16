import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import climbing from '../media/hobby-pics/climbing.png';
import girl from '../media/hobby-pics/girl.jpeg';
import girl2 from '../media/hobby-pics/girl2.jpeg';
import hiking from '../media/hobby-pics/hiking.JPG';
import latte_art from '../media/hobby-pics/latte-art.png';
import ramen from '../media/hobby-pics/ramen.jpg';
import spiderman from '../media/hobby-pics/spiderman.jpeg';
import tiger from '../media/hobby-pics/tiger.jpeg';
import zuko from '../media/hobby-pics/zuko-ATLA.png';
import spartan from '../media/hobby-pics/halo.jpg';



import '../css/hobbies.css';

export default function StandardImageList() {
  return (
    <div className="hobbies-container">
        <h1 className="title">Hobbies</h1>
        <hr className="horizonal-line"/>
        <ImageList id="image-list" variant="woven"  gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
    </div>
    
  );
}

const itemData = [
  {
    img: climbing,
    title: 'climbing',
  },
  {
    img: girl,
    title: 'girl',
  },
  {
    img: girl2,
    title: 'girl2',
  },
  {
    img: hiking ,
    title: 'hiking',
  },
  {
    img: latte_art,
    title: 'coffee',
  },
  {
    img: ramen,
    title: 'ramen',
  },
  {
    img: spiderman,
    title: 'marvel',
  },
  {
    img: tiger,
    title: 'tiger',
  },
  {
    img: zuko,
    title: 'ATLA',
  },
  {
    img: spartan,
    title: 'halo'
  }
];