import React from 'react';

class Content extends React.Component{

    //construimos el componente
    constructor(){
        super();

        this.state = {
            count:0,
            mensaje:""
        };

        this.interval = setInterval(() => {
            var aux = this.state.count;
            aux++;
            this.setState({count: aux});
        }, 700) ;

    }

    handlerClick = () => {
        var aux = this.state.count;
        aux++;
        this.setState({count: aux});
    }
    handlerClick2 = () => {
        var aux = this.state.count;
        aux--;
        this.setState({count: aux});
    }
    handlerChange = (event) =>{
        this.setState({mensaje: event.target.value});
    }

    render(){
        return(     
            <div className="App-intro">
                Contenido Web                
                <div className="Content">
                    <label className="Content">La cuenta es: {this.state.count}</label>
                    <button onClick={this.handlerClick}>Sumar</button>
                    <button onClick={this.handlerClick2}>Restar</button>
                    <input className="Content" type='text' onChange={this.handlerChange}/>
                    <label className="Content">Tu mensaje es: {this.state.mensaje}</label>
                </div>
            </div> 
        )
    }
}

export default Content;