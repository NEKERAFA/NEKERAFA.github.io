import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import './i18n/i18n';
import Website from './components/Website';

ReactDOM.render(
    <React.StrictMode>
        <Website />
    </React.StrictMode>,
    document.getElementById('root')
);
