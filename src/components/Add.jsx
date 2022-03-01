import React from 'react'
import App from '../App'

export default class Add extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            productName:"",
            price:1,
        }
    }
    updateProductName = (e) =>{
        var newProductName = e.target.value
        this.setState({
            productName: newProductName 
        })
    }
    updatePrice = (e) =>{
        var newPrice = e.target.value
        this.setState({
            price:newPrice
        })
    }
    render(){

        return(
            <div>
                <h1>Ajouter un élement</h1>
                <div class="input-group mb-3">
                    <input type="text"  onChange={this.updateProductName}class="form-control" placeholder="Item" aria-label="Item" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <button onClick={() => this.props.func(this.state.productName, this.state.price)} type="button" class="btn btn-primary">Primary</button>
                    </div>
                </div>
                <label for="customRange1" class="form-label">Definir un prix</label>
                <input type="range" class="form-range" id="customRange1" onChange={this.updatePrice}/>

            </div>

        )
    }
}