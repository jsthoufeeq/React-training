import React from 'react';

class DemoComponent extends React.Component {
    constructor() {
        super();
        //alert('constructor')
        this.state = {
            data: 'old value'
        }
    }

    UNSAFE_componentWillMount() {
        //alert('component will mount')
    }

    componentDidMount() {
        //alert('component did mount')
    }

    shouldComponentUpdate() {
        //returns true/false
        //alert('should component update');
        return true;
    }

    UNSAFE_componentWillUpdate() {
        //alert('component will update');
    }

    componentDidUpdate() { //new method 
        //alert('component did update');
    }

    componentWillUnmount() {
        //alert('component unmount');
    }

    handleClick = () => {
        this.setState({
            data: 'new value'
        })
    }

    render() {
        //alert('render')
        return (
            <div>
                <p>{this.state.data}</p>
                <button className="btn btn-success" onClick={this.handleClick}>Update component</button>
            </div>
        )
    }
}

export default DemoComponent;
//4 phases
//1. initialisation phase
//2. Mounting phase - componentWillMount, render, componentDidMount
//3. Update phase - shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate
//4. Unmounting phase - componentWillUnmount