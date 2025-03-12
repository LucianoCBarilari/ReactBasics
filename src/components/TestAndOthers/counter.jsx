import {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count +1}) );
    }   
    decrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count +1 }) );
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h6>Ejemplo de contador</h6>
                <p>Count: {count}</p>

                <button onClick={this.incrementCount}>incrementar</button>
                
                <button onClick={this.decrementCount}>decrementar</button>
            </div>
        );
    }    
}
export default Counter;