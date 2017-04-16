import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from './header/Header';
import Form from './form/Form';

class App extends React.Component {

    render() {

        return (
            <div className="container">
                <Header/>
                <Form/>
            </div>
        );
    }
}
export default App;
