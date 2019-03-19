import React, { Component } from 'react';
import API from '../api/api';

class App extends Component {
   componentWillMount() {
       API.get()
   }
    render() {
        return (
            <div>
                App
            </div>
        );
    }
}

export default App;