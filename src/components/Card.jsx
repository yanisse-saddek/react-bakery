import React from 'react'

export default class Card extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <img height="100px" src={this.props.product.image[0]} alt="" />
            <p style={{textAlign:"center", border:"1px solid black", borderRadius:"30px"}}>{this.props.product.name}</p>
            </div>
                )
    }
}