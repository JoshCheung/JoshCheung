import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import './css/carousel.css'
import superman from './media/superman.jpg'
import zuko from './media/zuko-ATLA.png'
import spiderman from './media/spiderman.jpg'
import girl from './media/girl.jpg'
import tiger from './media/tiger.jpg'
import girl2 from './media/girl2.jpg'
import ramen2 from './media/ramen-1.jpg'
import ramen1 from './media/ramen-2.jpg'


const items = [
    {
        src: superman,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: spiderman,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: girl,
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        src: tiger,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: girl2,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
      src: zuko,
      altText: 'Slide 6',
      caption: 'Slide 6'
    },
    {
      src: ramen1,
      altText: 'Slide 7',
      caption: 'Slide 7'
    },
    {
      src: ramen2,
      altText: 'Slide 8',
      caption: 'Slide 8'
    },

];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
        <div className="image-container">
          <img className="image_size" src={item.src} alt={item.altText}/>
        </div>

        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl className="buttons" direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl className="buttons" direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Example;
