import React, { Children } from 'react'
import Button from './components/Button'

import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'



export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeTab:<Add onClick={this.selectAdd} func={this.addItem}/>,
            items: []
        }
    }
     selectAdd = ()=>{
      this.setState({
        activeTab:<Add onClick={this.selectAdd} func={this.addItem}/>,
      })
      console.log('okkkkkkk add')
    }
     selectList = ()=>{
      this.setState({
        activeTab: <List onClick={this.selectAdd} items={this.state.items}/>,
      })
    }
     selectPay = ()=>{
      this.setState({
        activeTab:<Pay onClick={this.selectAdd} func={this.addItem}/>,
      })
    }

    addItem = (name, price) =>{
      var array = [{name:name,price:price}]
      var actualItems = this.state.items
      actualItems.push(array)

      this.setState({
        items: actualItems
      })
      console.log(typeof actualItems)
    }

    render(){

      
      return(
          <div class="container">
            <div class="container">
              <Button func={this.addItem} onClick={this.selectAdd}>Add</Button>   
              <Button items={this.state.items} onClick={this.selectList}>List</Button>   
              <Button onClick={this.selectPay}>Pay</Button>   
              {this.state.activeTab}
            </div>
          </div>
          )
    }
}