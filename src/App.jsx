import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2020', 
            newDeadline: ''
        }
    }

    changeDeadline() {
        // we need to utilize the setState method 
        // never want to directly update state (e.g. this.state.deadline = etc 
        console.log('state', this.state);
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return (
            <div className="App">
                <div>
                    <p>Time left until</p>
                    <p className="App-title">{this.state.deadline}</p>
                </div>
                <Clock 
                    deadline={this.state.deadline}
                />
                <Form inline>
                    <FormControl 
                        className="Deadline-input"
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    {/* always want to use anonymous function because if we call this.changeDeadline directly, it will cause loops */}
                    <Button onClick={() => this.changeDeadline()}>
                    Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;
