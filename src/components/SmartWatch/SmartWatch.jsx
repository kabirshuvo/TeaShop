import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const SmartWatch = () => {
const [steps, setSteps] = useState(0);

function increaseSteps (){
        let newStep = steps +1;
        setSteps(newStep);
        //console.log(steps);
}
useEffect(()=>{
    console.log(steps)
}, [steps])

    return (
        <div>
            <div style={{border:'2px solid silver', margin: '10px', padding: '1rem' }}>
            <h1>Steps: {steps}</h1>
            <button onClick={increaseSteps}>Step+</button>
            <Dial steps={steps}></Dial>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, repudiandae dolorum! Eius illo facilis tenetur blanditiis ex. Accusantium, asperiores! Voluptates excepturi vel nemo saepe, dolorum et qui natus dignissimos perspiciatis!</p>
            </div>

            <div>
                <img src="https://images.unsplash.com/photo-1679639539537-0d2e452890f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
            </div>

        </div>
    );
};

export default SmartWatch;