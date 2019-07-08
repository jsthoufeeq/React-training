import React from 'react';
import DemoComponent from './demoComponent';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count+1
        })
        this.props.fromChild('data from child')
    }

    componentWillUnmount() {
        //alert('unmount');
    }

    render() {
        return (
            <div>
                {/* <p>count is {this.state.count}</p>
                <button onClick={this.handleClick}>Increment count</button>
                <p>Data from parent is {this.props.foo}</p> */}
                <p>Welcome t Home component!</p>
                {/* <DemoComponent></DemoComponent> */}
            </div>
            
        )
    }
}

export default HomeComponent;