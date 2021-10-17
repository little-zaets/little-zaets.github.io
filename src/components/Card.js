import React from 'react';
import Card from 'react-bootstrap/Card';
import CardInfo from './CardInfo';

const ProjectCard = (props) => {
	return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="fluid"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </Card>
  );
}

export default ProjectCard;
