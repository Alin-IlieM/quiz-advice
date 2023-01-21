import React, {Component} from 'react';
import { connect } from 'react-redux';
import Quiz from './quiz.js';
import Advice from './advice.js';
import './App.css';
import 'tachyons';
import { requestQuiz, requestAdvice, clickCorrectAnswer, clickWrongAnswer } from './actions.js';

const mapStateToProps = (state) => {
  return {
      isQuizPending: state.requestQuiz.isQuizPending,
      question: state.requestQuiz.question,
      answer: state.requestQuiz.answer,
      fail: state.requestQuiz.fail,
      errorQuiz: state.requestQuiz.errorQuiz,
      isAdvicePending: state.requestAdvice.isAdvicePending,
      advice: state.requestAdvice.advice,
      errorAdvice: state.requestAdvice.errorAdvice,
      count: state.checkAnswers.count
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      onRequestQuiz: () => dispatch(requestQuiz()),
      onRequestAdvice: () => dispatch(requestAdvice()),
      onClickCorrectAnswer: (answer) => dispatch(clickCorrectAnswer(answer)),
      onClickWrongAnswer: (answer) => dispatch(clickWrongAnswer(answer))
  }
};



class App extends Component {

  componentDidMount() {
    this.props.onRequestQuiz();
    this.props.onRequestAdvice();
  }


  render() {

    const {isQuizPending, isAdvicePending, question, answer, fail, errorQuiz, errorAdvice, 
      advice, count, onClickCorrectAnswer, onClickWrongAnswer, onRequestQuiz, onRequestAdvice} = this.props;
      if (isQuizPending) {
        return (
          <div className='flex flex-column items-center'>
            <h1 className= 'tc georgia'>Hello! Welcome to our Quiz App</h1>
            <p className='tc georgia'>Answer 3 questions correctly and you'll get some life advice</p>
            <h1>Loading....</h1>
            <Advice AdvicePending={isAdvicePending} errorAdvice={errorAdvice} advice={advice} count={count}/>
          </div>
        )
      } else if (isAdvicePending) {
        return (
          <div className='flex flex-column items-center'>
            <h1 className= 'tc georgia'>Hello! Welcome to our Quiz App</h1>
            <p className='tc georgia'>Answer 3 questions correctly and you'll get some life advice</p>
            <Quiz onRequestAdvice={onRequestAdvice} onRequestQuiz={onRequestQuiz} quizPending={isQuizPending} question={question} answer={answer} fail={fail} errorQuiz={errorQuiz} count={count} onClickCorrectAnswer={onClickCorrectAnswer} onClickWrongAnswer={onClickWrongAnswer}/>
            <h1>Loading...</h1>
          </div>
        )
      }
    else { return (
      <div className='flex flex-column items-center'>
        <h1 className= 'tc georgia'>Hello! Welcome to our Quiz App</h1>
        <p className='tc georgia'>Answer 3 questions correctly and you'll get some life advice</p>
        <Quiz onRequestAdvice={onRequestAdvice} onRequestQuiz={onRequestQuiz} quizPending={isQuizPending} question={question} answer={answer} fail={fail} errorQuiz={errorQuiz} count={count} onClickCorrectAnswer={onClickCorrectAnswer} onClickWrongAnswer={onClickWrongAnswer}/>
        <Advice AdvicePending={isAdvicePending} errorAdvice={errorAdvice} advice={advice} count={count}/>
      </div>
    )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);