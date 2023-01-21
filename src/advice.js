import React from 'react';
import 'tachyons';

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
    <div className="tc pa4 georgia br-pill shadow-4 bg-washed-green">
      <h1>{ advice }</h1>
      {hasAdvice && <p>{props.advice}</p>}
    </div>
    )
        
}

export default Advice;