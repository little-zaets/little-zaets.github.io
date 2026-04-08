import React from 'react';
import CardInfo from '../molecules/CardInfo';

const ProjectCard = ({ item, onClick }) => (
  <div className="inline-block g-card" onClick={() => onClick(item)}>
    <img className="g-card-image" src={item.imgSrc} alt={item.title} />
    {item.selected && <CardInfo title={item.title} subTitle={item.subTitle} link={item.link} />}
  </div>
);

export default ProjectCard;

