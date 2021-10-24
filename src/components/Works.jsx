import React from 'react';
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import content from '../content';

export default function Works() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-yaldevi"
      style={{ backgroundColor: '#8582ab' }}
      id="works">
      <h2 className="m-2 text-2xl fw-bold">My works</h2>

      <Carousel touch={true}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-1100 h-600"
            src={content.works.slider.first.img}
            alt="online sneaker store"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black', fontSize: '22px' }}>online sneaker store</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-1100 h-600"
            src={content.works.slider.second.img}
            alt="landing page"
          />
          <Carousel.Caption>
            <h3 style={{ fontSize: '22px' }}>landing page</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-1100 h-600"
            src={content.works.slider.third.img}
            alt="MUI online bookstore"
          />
          <Carousel.Caption>
            <h3 style={{ fontSize: '22px' }}>MUI online bookstore</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-1100 h-600"
            src={content.works.slider.fourth.img}
            alt="Exploring countries on React"
          />
          <Carousel.Caption>
            <h3 style={{ fontSize: '22px' }}>Exploring countries on React</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-1100 h-600"
            src={content.works.slider.fifth.img}
            alt="todo list on React"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black', fontSize: '22px' }}>todo list on React</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-1100 h-600"
            src={content.works.slider.sixth.img}
            alt="online pizza shop"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black', fontSize: '22px' }}>online pizza shop</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="m-4">
        <p>
          You can see my other works in my{' '}
          <a className="no-underline fw-bold" href="https://github.com/hellprise">
            GitHub
          </a>{' '}
          page.
        </p>
      </div>
    </div>
  );
}
