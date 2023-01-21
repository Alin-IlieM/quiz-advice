import React from 'react';
import 'tachyons';
import { Markup } from 'interweave';

const Quiz = (props) => {
    const {question, count, answer, fail, onClickWrongAnswer, onClickCorrectAnswer, onRequestQuiz, onRequestAdvice } = props;
   if (answer === 'True' && count < 5) {
    return (
        <div className = 'tc pa4 georgia ba bw4 ma3 w-100 bg-washed-green'>
            <h1><Markup content ={question}/></h1>
            <button onClick= {() => {onClickCorrectAnswer('True'); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'>{answer}</button>
            <button onClick= {() => {onClickWrongAnswer('False'); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-red'>{fail}</button>
            <h3>Correct answers: {count}</h3>
        </div>
    )
   } else if (answer ==='True' && count >= 5  && (count+1) % 3 === 0) {
    return (
        <div className = 'tc pa4 georgia ba bw4 ma3 w-100 bg-washed-green'>
            <h1><Markup content ={question}/></h1>
            <button onClick= {() => {onClickCorrectAnswer('True'); onRequestQuiz(); onRequestAdvice()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'>{answer}</button>
            <button onClick= {() => {onClickWrongAnswer('False'); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-red'>{fail}</button>
            <h3>Correct answers: {count}</h3>
        </div>
    )
   } else if (answer ==='False' && count >= 5 && (count+1) % 3 === 0) {
    return (
        <div className = 'tc pa4 georgia ba bw4 ma3 w-100 bg-washed-green'>
            <h1><Markup content ={question}/></h1>
            <button onClick={() => {onClickWrongAnswer('True'); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'>{fail}</button>
            <button onClick={() => {onClickCorrectAnswer('False'); onRequestQuiz(); onRequestAdvice()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-red'>{answer}</button>
            <h3>Correct answers: {count}</h3>
        </div>
    )
   } else if (answer === 'True' && count > 5 && (count+1) % 3 !== 0) {
    return (
        <div className = 'tc pa4 georgia ba bw4 ma3 w-100 bg-washed-green'>
            <h1><Markup content ={question}/></h1>
            <button onClick= {() => {onClickCorrectAnswer('True'); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'>{answer}</button>
            <button onClick= {() => {onClickWrongAnswer('False'); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-red'>{fail}</button>
            <h3>Correct answers: {count}</h3>
        </div>
    )
   }
   
   else if (answer === 'False' && count < 5){
    return (
        <div className = 'tc pa4 georgia ba bw4 ma3 w-100 bg-washed-green'>
            <h1><Markup content ={question}/></h1>
            <button onClick={() => {onClickWrongAnswer('True'); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'>{fail}</button>
            <button onClick={() => {onClickCorrectAnswer('False'); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-red'>{answer}</button>
            <h3>Correct answers: {count}</h3>
        </div>
    )
   } else {
        return (
            <div className = 'tc pa4 georgia ba bw4 ma3 w-100 bg-washed-green'>
                <h1><Markup content ={question}/></h1>
                <button onClick={() => {onClickWrongAnswer('True'); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'>{fail}</button>
                <button onClick={() => {onClickCorrectAnswer('False'); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-red'>{answer}</button>
                <h3>Correct answers: {count}</h3>
            </div>
        ) }
       
   }
   


export default Quiz;