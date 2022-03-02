import React, { Children, } from 'react'
import Button from './components/Button'

import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import Save from './components/Save'

export default class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            activeTab:<Add onClick={this.selectAdd} func={this.addItem}/>,
            items: [],
            save:[
              
            ]
        }
    }
     selectAdd = ()=>{
      this.setState({
        activeTab:<Add onClick={this.selectAdd} func={this.addItem}/>,
      })
    }
     selectList = ()=>{
      this.setState({
        activeTab: <List onClick={this.selectAdd} items={this.state.items}/>,
      })
    }
     selectPay = ()=>{
      this.setState({
        activeTab:<Pay saveFunction={this.saveFunction} onClick={this.selectAdd} items={this.state.items} save={this.state.save}/>,
      })
    }
    selectSave = ()=>{
      this.setState({
        activeTab:<Save onClick={this.selectAdd} gato={this.state.save}/>,
      })
    }


    addItem = (name, price) =>{
      var array = [{name:name,price:price, quantity:1}]
      var actualItems = this.state.items
      actualItems.push(array)

      this.setState({
        items: actualItems
      })
      console.log(typeof actualItems)
    }
   
    addSave = (name, price, quantity)=>{
      var array = [{name:name, price:price, quantity:quantity}]
      var actualItems = this.state.items
      actualItems.push(array)

      this.setState({
        items: actualItems
      })

    }
    saveFunction = (items)=>{
      this.state.save.push(items)
    }
    render(){

      
      return(
          <div className="container">
            <div className="container">
              <Button func={this.addItem} onClick={this.selectAdd}>Add</Button>   
              <Button items={this.state.items} onClick={this.selectList}>List</Button>   
              <Button saveFunction={this.saveFunction} items={this.state.items} onClick={this.selectPay}>Pay</Button>   
              <Button gato={this.state.save} onClick={this.selectSave}>Save</Button>   
              {this.state.activeTab}
            </div>
          </div>
          )
    }
}