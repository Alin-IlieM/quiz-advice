import React from 'react';
import 'tachyons';
import './advice.css';

const Advice = (props) => {
    const {count} = props;
    const hasAdvice = count !== 0 && count % 3 === 0;
    let advice = "You didn't earn your next advice";
    if (hasAdvice) {
        advice= "Here is your advice:";
    } else if (count < 3) {
        advice = "You didn't earn your advice yet"
    } 

    return (
    <div className="advice-box tc pa3 georgia br4 shadow-4 w-80">
      <h1>{ advice }</h1>
      {hasAdvice && <p>{props.advice}</p>}
    </div>
    )
        
}

export default Advice;