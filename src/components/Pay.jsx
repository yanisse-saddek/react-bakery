import React from 'react'
import Add from './Add'
import Card from './Card'
import Save from './Save'

export default class Pay extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            subtotal:0,
            vat:0, 
            ecoTax:0, 
            total:0,
            panier: [
            ]
        }
    }
    updatePanier = (name, price, quantity)=>{
        var actualPanier = this.state.panier;
        let checkArray = actualPanier.find(item=> item.name === name)

        if(typeof checkArray !==  "object"){

            var dataToPush = {name:name, price:price, quantity:quantity, cross:"x"}
            actualPanier.push(dataToPush)
            this.setState({
                panier: actualPanier,
            })       
        }else{
            var newQuantity = checkArray.quantity +1 
            var newV = {name:name, price:price, quantity: newQuantity, cross:"x"}
            var index= this.state.panier.indexOf(checkArray)
            this.state.panier[index] = newQuantity
            this.state.panier.push(newV)
            this.setState({
                panier:this.state.panier,
            })
        }
        var subTotal = this.state.subtotal + parseInt(price)

        var ecoTax = this.state.panier.length * 0.03
        var vat    = subTotal*0.20
        var total  = subTotal + ecoTax+ vat

        this.setState({
            subtotal: subTotal,
            ecoTax: ecoTax,
            vat:vat,
            total:total
        })

    }

    getItems = ()=>{
        var toReturn = []
         this.props.items.map(item=>{
            item.map(getItem=>{
                toReturn.push(<div onClick={()=>{
                    this.updatePanier(getItem.name, getItem.price, getItem.quantity)
                }}>                    <Card product={getItem}/>
                </div>)
            })
        })
        return toReturn
    }
    delete = ()=>{
        this.setState({
            panier:[],
            total:0,
            ecoTax:0,
            vat:0,
            subtotal:0,
        })
    }

    render(){

        
        return(
            <div>
                <h1>Pay</h1>
                {this.state.panier.map(item=>{
                    return <p>{item.name} {item.cross} {item.quantity}</p>
                })}
                <div className="d-flex  align-items-end flex-column"    >
                    <h3>SubTotal: {this.state.subtotal.toFixed(2)}$</h3>
                    <h3>VAT: {this.state.vat.toFixed(2)}$</h3>
                    <h3>Eco Tax: {this.state.ecoTax.toFixed(2)}$</h3>
                    <h1>Total: {this.state.total.toFixed(2)}$</h1>
                </div>
                <div className="d-flex">
                {this.getItems()}
                </div>
                <button className="btn btn-danger" onClick={()=>{
                    this.delete()
                }}>Effacer</button>

                <button className="btn btn-success" onClick={()=>{
                    this.props.saveFunction(this.state.panier)
                    console.log(typeof this.state.panier)
                }}>Enregistrer</button>
                
            </div>

        )
    }
}