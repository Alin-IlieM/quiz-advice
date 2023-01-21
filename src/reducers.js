import {REQUEST_QUIZ_PENDING, 
    REQUEST_QUIZ_SUCCESS, 
    REQUEST_QUIZ_FAILED,
    REQUEST_ADVICE_PENDING,
    REQUEST_ADVICE_SUCCESS,
    REQUEST_ADVICE_FAILED,
    WRONG_ANSWER,
    CORRECT_ANSWER
} from './constants';

const initialStateQuiz = {
    isQuizPending: true,
    question: '',
    answer: '',
    fail: '',
    errorQuiz: ''
};

export const requestQuiz = (state= initialStateQuiz, action={}) => {
    switch(action.type) {
        case REQUEST_QUIZ_PENDING:
            return Object.assign({}, state, {isQuizPending: true});
        case REQUEST_QUIZ_SUCCESS:
            return Object.assign({}, state, {question: action.payload.results[0].question, answer: action.payload.results[0].correct_answer, fail: action.payload.results[0].incorrect_answers[0], isQuizPending: false});
        case REQUEST_QUIZ_FAILED:
            return Object.assign({}, state, {errorQuiz: action.payload, isQuizPending: false});
        default:
            return state;
    }
};

const initialStateAdvice = {
    isAdvicePending: true,
    advice: '',
    errorAdvice: ''
};

export const requestAdvice = (state= initialStateAdvice, action={}) => {
    switch(action.type) {
        case REQUEST_ADVICE_PENDING:
            return Object.assign({}, state, {isAdvicePending: true});
        case REQUEST_ADVICE_SUCCESS:
            return Object.assign({}, state, {advice: action.payload.slip.advice, isAdvicePending: false});
        case REQUEST_ADVICE_FAILED:
            return Object.assign({}, state, {errorAdvice: action.payload, isAdvicePending: false});
        default:
            return state;
    }
}

const initialStateCount = {
    count: 0
}

export const checkAnswers = (state= initialStateCount, action={}) => {
    switch(action.type) {
        case CORRECT_ANSWER:
            return Object.assign({}, state, {count: state.count + 1});
        case WRONG_ANSWER:
                return Object.assign({}, state, {count: 0});
        default:
            return state;
    }
}