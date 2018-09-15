import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import App_container from './App_container'
import registerServiceWorker from './registerServiceWorker';
const store = createStore(
    reducer
)

const HocPrevider = (props) => (
    <Provider store = { store }>
        <App_container>
            <App />
        </App_container>    
    </Provider>
)

ReactDOM.render(<HocPrevider />, document.getElementById('root'));
registerServiceWorker();
