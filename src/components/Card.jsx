import React from 'react'

export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            image:"../public/images/item.png"
        }
    }
    componentDidMount = () =>{          
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`).then(response => response.blob()).then(img=>{
            var a = URL.createObjectURL(img)
            this.setState({
                image:a
            })
        })
    }
    render(){
        console.log('BLABLABLABLABLBALABLABLABLA', this.props.productName)
        return(

            <button >
                <img height="100px" src={this.state.image} alt="" />
            </button>
        )
    }
}