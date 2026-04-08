import React, { useState } from 'react';
import ProjectCard from './Card';
import calculator from '../../assets/calculator.png';
import robots from '../../assets/robofriends.png';
import boss from '../../assets/databoss.png';

function Carousel() {
	const [items, setItems] = useState([
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
			subTitle: "DI hackathon entry using Node JS",
			imgSrc: boss,
			link: "https://data-boss-ui.herokuapp.com/",
			selected: false
		}
	]);

	const handleCardClick = (id) => {
		setItems(prevItems => {
			const clickedItem = prevItems[id];
			const nextSelected = clickedItem ? !clickedItem.selected : false;

			return prevItems.map(item => {
				if (item.id !== id) {
					return { ...item, selected: false };
				}
				return { ...item, selected: nextSelected };
			});
		});
	};

	return (
		<div className="w-full px-4">
			<div className="flex flex-wrap justify-center">
				{items.map(item => (
					<ProjectCard item={item} onClick={() => handleCardClick(item.id)} key={item.id} />
				))}
			</div>
		</div>
	);
}

export default Carousel;

