import React from 'react';
import Card from 'react-bootstrap/Card';
import CardInfo from './CardInfo';

const ProjectCard = (props) => {
  return (
    <div className="d-inline-block g-card" onClick={(e) => props.onClick(props.item)}>
      <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
      {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
    </div>
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img
    //     variant="top"
    //     className="fluid"
    //     src={props.item.imgSrc}
    //     alt={props.item.imgSrc}
    //   />
    //   {props.item.selected && (
    //     <CardInfo
    //       title={props.item.title}
    //       subTitle={props.item.subTitle}
    //       link={props.item.link}
    //     />
    //   )}
    // </Card>
  );
}

export default ProjectCard;
