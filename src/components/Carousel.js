import React, { Component } from 'react';
import ProjectCard from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import calculator from '../assets/hooks.png';
import robots from '../assets/redux.jpg';
import boss from '../assets/boss.jpg';
//import images 1000 px by 1600 px

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 0,
					title: 'Simple Calculator',
					subTitle: 'A basic calculator app using React Hooks',
					imgSrc: 'calculator',
					link: 'https://little-zaets.github.io/calculator-app',
					selected: false
				},
				{
					id: 1,
					title: 'Robots Filter',
					subTitle: 'A card search filtering app using React Redux',
					imgSrc: 'robots',
					link: '',
					selected: false
				},
				{
					id: 2,
					title: 'Data Boss',
					subTitle: 'Developers.Institute hackathon app using Javascript',
					imgSrc: 'boss',
					link: '',
					selected: false
				}
			]
		}
	}
	
	handleCardClick = (id) => {
		let items = [...this.state.items];
		items[id].selected = items[id].selected ? false : true;
		items.forEach(item => {
			if (item.id !== id) {
				item.selected = false;
			}
		})
		this.setState({
			items
		});
	}
	
	makeItems = (items) => {
		return items.map(item => {
			return <ProjectCard item={item} onClick={(e) => { this.handleCardClick(item.id, e)}} key={item.id}/>
		})
	}
	
	render() {
		return (
				<Container fluid={true}>
				<Row className="justify-content-around">
						{this.makeItems(this.state.items)}
					</Row>
				</Container>
		);
	}
}

export default Carousel;
