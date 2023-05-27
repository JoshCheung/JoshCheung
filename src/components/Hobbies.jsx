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
    img: "https://res.cloudinary.com/dufsumsmb/image/upload/v1685173172/JoshCheung/climbing_axzwrn.png",
    title: 'climbing',
  },
  {
    img: "https://res.cloudinary.com/dufsumsmb/image/upload/v1685173171/JoshCheung/girl_evr9mr.jpg",
    title: 'girl',
  },
  {
    img: "https://res.cloudinary.com/dufsumsmb/image/upload/v1685173170/JoshCheung/girl2_mxswkm.jpg",
    title: 'girl2',
  },
  {
    img: "https://res.cloudinary.com/dufsumsmb/image/upload/v1685176328/golf_j9xwhk.jpg",
    title: 'golf'
  },
  {
    img: "https://res.cloudinary.com/dufsumsmb/image/upload/v1685173171/JoshCheung/hiking_vcuvj3.jpg",
    title: 'hiking',
  },
  {
    img: "https://res.cloudinary.com/dufsumsmb/image/upload/v1685173499/latte_art_cavf6a.jpg",
    title: 'coffee',
  },
  {
    img: "https://res.cloudinary.com/dufsumsmb/image/upload/v1685173172/JoshCheung/ramen_ehhuwd.jpg",
    title: 'ramen',
  },
  {
    img: "https://res.cloudinary.com/dufsumsmb/image/upload/v1685173170/JoshCheung/tiger_omz7ue.jpg",
    title: 'tiger',
  },
  {
    img: "https://res.cloudinary.com/dufsumsmb/image/upload/v1685173173/JoshCheung/spiderman_ylx0bz.jpg",
    title: 'marvel',
  },
  {
    img: "https://res.cloudinary.com/dufsumsmb/image/upload/v1685173172/JoshCheung/zuko-ATLA_yk3ngq.png",
    title: 'ATLA',
  },
];