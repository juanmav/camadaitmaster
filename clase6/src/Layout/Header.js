import React from 'react';

class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        var color = this.props.color ? this.props.color : 'red';
        var title = this.props.title ? this.props.title : 'completar titulo';

        return(
            <div>
                <h1 style={{color: color}}>{title}</h1>
            </div>
        )
    }
}

export default Header;