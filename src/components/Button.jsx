import React from 'react'
import Add from './Add'
import List from './List'
import Pay from './Pay'
import Save from './Save'

export default class Button extends React.Component{
         getActuel = ()=>{
            if(this.props.children == "Add"){
                return <Add onClick={this.props.onClick} func={this.props.func}/>
            }else if(this.props.actual == "Pay"){
                return <Pay  saveFunction={this.props.saveFunction} onClick={this.props.onClick} items={this.props.items}/>
            }else if(this.props.actual == "List"){
                return <List  onClick={this.props.onClick} items={this.props.items}/>
            }else if(this.props.actual == "Save"){
                return <Save  onClick={this.props.onClick} gato={this.props.gato}/>
            }
        
        }
            render(){
                return(
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <button onClick={this.props.onClick} type="button" className="btn btn-primary">{this.props.children}</button>
                    </div>
                )
            }
   
}
  
   
