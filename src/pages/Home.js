import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

const Home = (props) => {
	return (
		<div>
			<Hero title={props.title} subTitle={props.subTitle} content={props.content} />
			<Carousel />
		</div>
	);
}

export default Home;
