import React from 'react'
import Add from './Add'
import List from './List'
import Pay from './Pay'

export default class Button extends React.Component{
    constructor(props){
        super(props)
    }
  
     getActuel = ()=>{
        if(this.props.children == "Add"){
            return <Add onClick={this.props.onClick} func={this.props.func}/>
        }else if(this.props.actual == "Pay"){
            return <Pay onClick={this.props.onClick} func={this.props.func}/>
        }else if(this.props.actual == "List"){
            return <List onClick={this.props.onClick} items={this.props.items}/>
        }
    
    }

    render(){
      
    

        return(
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                      <button onClick={this.props.onClick} type="button" class="btn btn-primary">{this.props.children}</button>
             </div>
        )
    }
}