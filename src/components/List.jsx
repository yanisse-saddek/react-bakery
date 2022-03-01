import React from 'react'

var isResult = false
export default class List extends React.Component{
    constructor(props){
        super(props)
    }
    getResult = this.props.items.map(item=>{
            var toReturn = []
            item.map(it=>{
                console.log(it)
                toReturn.push(<p>{it.name} {it.price}</p>)
                isResult = true;
            })
            if(isResult){
                return <p>{toReturn}</p>                
            }else{
                return <p>Aucun resultat</p>
            }
        })
    render(){
        return(
            <div>
                <h1>Total des items</h1>
                    {isResult? this.getResult: "Aucun resultat"}
            </div>


        )
    }
}