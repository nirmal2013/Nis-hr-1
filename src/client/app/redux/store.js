import CombinedReducers from './reducers/CombinedReducers';
import {
	createStore,
	compose
} from 'redux';

const AppStore = {

	create: (defaultData, shouldExposeReduxTools) => {
		// The Redux Store.
		let store;

		if (shouldExposeReduxTools) {
			store = createStore(
				CombinedReducers,
				defaultData,
				compose(
					window.devToolsExtension ? window.devToolsExtension() : f => f // WTF is f => f -> https://github.com/reactjs/redux/issues/632
				)
			);
		} else {
			store = createStore(
				CombinedReducers,
				defaultData
			);
		}

		// override base store.subscribe to add try catch
		const subscribe = store.subscribe;
		store.subscribe = (func) => {
			return subscribe(() => {
				try {
					func();
				} catch (e) {
					console.error('Error in some userdefined subscribe method.', e.stack);
				}
			});
		};

		return store;
	}	
};

export default AppStore;