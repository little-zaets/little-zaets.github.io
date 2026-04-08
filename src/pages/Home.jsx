import React from 'react';
import { Hero } from '../components/molecules';
import { Carousel } from '../components/organisms';

const Home = ({ title, subTitle, content }) => (
  <div className="mb-4 w-full">
    <Hero title={title} subTitle={subTitle} content={content} />
    <Carousel />
  </div>
);

export default Home;

