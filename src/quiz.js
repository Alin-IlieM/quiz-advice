import React from 'react';
import 'tachyons';
import { Markup } from 'interweave';
import './quiz.css'

const Quiz = (props) => {
    const {question, count, answer, fail, onClickWrongAnswer, onClickCorrectAnswer, onRequestQuiz, onRequestAdvice } = props;
    const correctIsTrue = answer === 'True';
    const correctIsFalse = answer === 'False';
    const newAdvice = count >=5 && (count+1) % 3 === 0;
    
        return (
            <div className = 'quiz-box tc pa3 georgia ba bw4 ma3 w-100'>
                <h1><Markup content ={question}/></h1>
                <button onClick= {() => {correctIsTrue && onClickCorrectAnswer('True'); correctIsFalse && onClickWrongAnswer('True'); onRequestQuiz(); newAdvice && onRequestAdvice()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-blue'>{correctIsTrue && answer} {correctIsFalse && fail}</button>
                <button onClick= {() => {correctIsTrue && onClickWrongAnswer('False'); correctIsFalse && onClickCorrectAnswer('False'); newAdvice && onRequestAdvice(); onRequestQuiz()}} className='f6 link dim ph3 pv2 mb2 dib white bg-dark-red'>{correctIsTrue && fail} {correctIsFalse && answer}</button>
                <h3>Correct answers: {count}</h3>
            </div>
        )
    } 

   
   
   


export default Quiz;