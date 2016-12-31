import {combineReducers} from 'redux';

// not redux way, but to make it convenient for the listeners to know the action
const LastAction = function LastAction(state = null, action = null) {
	return action;
};

const APP_NAME = function APP_NAME(state = {}, action = null) {
	return state;
};

const UI = function UI(state = {}, action = null) {
	return state;
};

export default combineReducers({
			APP_NAME,
			UI,
			LastAction
		});