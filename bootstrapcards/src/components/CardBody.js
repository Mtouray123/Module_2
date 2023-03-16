import React from 'react'
import Button from './Button'

function CardBody (props) {
  console.log('current props.title', props)
  // ATTEMPT TO REASSIGN PROPS A NEW VALUE
  console.log('props.title', props.title);
  return (
    <div className="card-body">
        <h5 className="card-title">Santorini</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button />
      </div>
  );
};

//export the component
export default CardBody