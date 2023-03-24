import React from 'react';
import Hudai from '../Hudai/Hudai';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid silver', margin: '10px'}} >
            <h3>This is Dial Components: </h3>
            <p>Steps: {props.steps}</p>
            <Hudai steps={props.steps}/>
        </div>
    );
};

export default Dial;