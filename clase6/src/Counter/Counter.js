import React from 'react';

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count : props.init
        }
    }

    sumar = () => {
        let aux = this.state.count;
        aux = aux + this.props.step;
        this.setState({count: aux});
    };

    render(){
        return(
            <div>
                Contador!: { this.state.count }
                <button onClick={this.sumar}> Sumar!</button>
            </div>
        )
    }
}

export default Counter;