import React from 'react'

export default class Save extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: this.props.test  
        }
    }
    render(){
        console.log(this.props.gato)
        return(
            <div>
            <h1>Save</h1>
            {this.props.gato.map(item=>{
                var toReturn = [<p>-----------------------</p>]
                item.map(gato=>{
                    toReturn.push(<div>
                                    <p>{gato.name} {gato.quantity}</p>
                                </div>)
                })
                return toReturn
            })}
            </div>
        )
    }
}