import React, { Children, } from 'react'
import axios from 'axios'
import Button from './components/Button'
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
import Save from './components/Save'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeTab: <Add onClick={this.selectAdd} func={this.addItem} />,
      items: [],
      save: [

      ]
    }
  }
  selectAdd = () => {
    this.setState({
      activeTab: <Add onClick={this.selectAdd} func={this.addItem} />,
    })
  }
  selectList = () => {
    this.setState({
      activeTab: <List onClick={this.selectAdd} remove={this.removeItem} items={this.state.items} />,
    })
  }
  selectPay = () => {
    this.setState({
      activeTab: <Pay saveFunction={this.saveFunction} onClick={this.selectAdd} items={this.state.items} save={this.state.save} />,
    })
  }
  selectSave = () => {
    this.setState({
      activeTab: <Save onClick={this.selectAdd} save={this.state.save} />,
    })
  }

  removeItem = (item) => {
    var array = this.state.items
    var index = this.state.items.indexOf(item)
    array.splice(index, 1)
    this.setState({
      items: array,
      activeTab: <List onClick={this.selectAdd} remove={this.removeItem} items={this.state.items} />,
    })
  }

  addItem = (name, price) => {
    var image = []
    axios(`https://imsea.herokuapp.com/api/1?q=${name}`).then(img => {
      var rand = Math.ceil(Math.random() * img.data.results.length)
      image.push(img.data.results[0])
      var array = [{ name: name, price: price, quantity: 1, image: image }]
      var actualItems = this.state.items
      actualItems.push(array)
      this.setState({
        items: actualItems,
        activeTab: <List onClick={this.selectAdd} remove={this.removeItem} items={this.state.items} />,

      })

    })
  }

  addSave = (nameget, priceget, quantityget) => {
    var array = [{ name: nameget, price: priceget, quantity: quantityget }]
    var actualItems = this.state.items
    actualItems.push(array)

    this.setState({
      items: actualItems
    })

  }
  saveFunction = (items) => {
    this.state.save.push(items)
  }
  render() {


    return (
      <div className="container">
        <div className="container">
          <Button func={this.addItem} onClick={this.selectAdd}>Add</Button>
          <Button items={this.state.items} remove={this.removeItem} onClick={this.selectList}>List</Button>
          <Button save={this.state.save} onClick={this.selectPay}>Pay</Button>
          <Button gato={this.state.save} onClick={this.selectSave}>Save</Button>
          {this.state.activeTab}
        </div>
      </div>
    )
  }
}