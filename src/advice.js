import React from 'react';
import 'tachyons';

const Advice = (props) => {
    const {count} = props;
    if (count !==0 && count%3 === 0) {
        return (
            <div className = 'tc pa4 georgia br-pill shadow-4 bg-washed-green'>
                <h1>Here is your advice:</h1>
                <p>{props.advice}</p>
            </div>
        )
    } else if (count < 3) {
        return (
            <div className = 'tc pa4 georgia br-pill shadow-4 bg-washed-green'>
                <h1>You didn't earn your advice yet</h1>
            </div>
        )
    } else {
        return (
            <div className = 'tc pa4 georgia br-pill shadow-4 bg-washed-green'>
                <h1>You didn't earn your next advice yet</h1>
            </div>
        )
    }
        
}

export default Advice;