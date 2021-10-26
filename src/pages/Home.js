import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = (props) => {
	return (
		<Container className="mb-4" fluid={true}>
			<Hero title={props.title} subTitle={props.subTitle} content={props.content} />
			<Carousel />
		</Container>
	);
}

export default Home;
