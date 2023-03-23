import React from 'react';

const Teas = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.name} </h1>
        </div>
    );
};

export default Teas;