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
                toReturn.push(it.name, it.price)
                isResult = true;
            })
            if(isResult){
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">{toReturn[0]}</div>
                                    </div>
                                    <span className="badge bg-primary rounded-pill">{toReturn[1]}</span>
                                </li>
                )
                
                            
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