import React from 'react';

const Teas = (props) => {
    //console.log(props);
    return (
        <div>
            <h1>{props.name} </h1>
            <h3>{props.location}</h3>
            <div><p>{props.price} <small>{props.currency}</small></p>
            </div>
        </div>
    );
};

export default Teas;