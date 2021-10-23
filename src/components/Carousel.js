import React, { Component } from 'react';
import ProjectCard from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import calculator from '../assets/react-hooks.png';
import robots from '../assets/redux-logo.png';
import boss from '../assets/boss.png';


class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
      items: [
        {
          id: 0,
          title: "Simple Calculator",
          subTitle: "A basic calculator app using React Hooks",
          imgSrc: calculator,
          link: "https://little-zaets.github.io/calculator-app/",
          selected: false
        },
        {
          id: 1,
          title: "Robots Filter",
          subTitle: "A card search filter app using Redux",
          imgSrc: robots,
          link: "https://little-zaets.github.io/robots-redux/",
          selected: false
        },
        {
          id: 2,
          title: "Data Boss",
          subTitle: "Developers.Institute hackathon entry",
          imgSrc: boss,
          link: "",
          selected: false
        }
      ]
    };
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
					<Row className="justify-content-center">
							{this.makeItems(this.state.items)}
						</Row>
				</Container>
		);
	}
}

export default Carousel;
