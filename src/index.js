import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import App from './components/App';
import './sass/_main.scss';

ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('root')
);