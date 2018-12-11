import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from '../Store/store';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={configureStore()}>
            <App />
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
