import React from 'react';

const Hudai = (props) => {
    return (
        <div style={{border: '2px solid rebeccapurple', margin: '1rem', padding: '1rem'}}>
            <h1>Hudai:</h1>
            <p>Steps:{props.steps} </p>
        </div>
    );
};

export default Hudai;