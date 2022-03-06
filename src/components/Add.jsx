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
                <div className="input-group mb-3">
                    <input type="text"  onChange={this.updateProductName}className="form-control" placeholder="Item" aria-label="Item" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button onClick={() => this.props.func(this.state.productName, this.state.price)} type="button" className="btn btn-primary">Ajouter</button>
                    </div>
                </div>
                <label htmlFor="customRange1" className="form-label">Definir un prix</label>
                <p>Price: {this.state.price}$</p>
                <input type="range" className="form-range" min="0" max="100" value={this.state.price} onChange={this.updatePrice}/>
            </div>

        )
    }
}