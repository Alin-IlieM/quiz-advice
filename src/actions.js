import {REQUEST_QUIZ_PENDING, 
        REQUEST_QUIZ_SUCCESS, 
        REQUEST_QUIZ_FAILED,
        REQUEST_ADVICE_PENDING,
        REQUEST_ADVICE_SUCCESS,
        REQUEST_ADVICE_FAILED,
        WRONG_ANSWER,
        CORRECT_ANSWER
} from './constants';


export const clickCorrectAnswer = (answer) => ({
    type: CORRECT_ANSWER,
    payload: answer
})

export const clickWrongAnswer = (answer) => ({
    type: WRONG_ANSWER,
    payload: answer
})


export const requestQuiz = () => (dispatch) => {
    dispatch({ type: REQUEST_QUIZ_PENDING});
    fetch("https://opentdb.com/api.php?amount=1&type=boolean")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_QUIZ_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_QUIZ_FAILED, payload: error}))
}

export const requestAdvice = () => (dispatch) => {
    dispatch({ type: REQUEST_ADVICE_PENDING});
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ADVICE_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_ADVICE_FAILED, payload: error}))
}