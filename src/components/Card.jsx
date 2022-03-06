import React from 'react'

export default class Card extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button>
                <img height="100px" src={this.props.product.image[0]} alt="" />
            </button>
        )
    }
}