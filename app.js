import React from 'react';
import {useState} from 'react'
// don't change the Component name "App"
export default function App() {
    const [click,setClick]=React.useState(false);
    function clkfn(){
        setClick(click=>
            !click
        )
    }
    return (
        <div>
            <p style={{color:click?'red':'white'}}>Style me!</p>
            <button onClick={clkfn}>Toggle style</button>
        </div>
    );
}
