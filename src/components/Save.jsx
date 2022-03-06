import React from 'react'

export default class Save extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: this.props.test  
        }
    }
    render(){
        return(
            <div>
            <h1>Save</h1>

            {this.props.save.map(items=>{
                var toReturn = []
                var head = [
                        <tr>
                            <th scole="col">Objet</th>
                            <th scole="col">Quantité</th>
                            <th scole="col">Prix</th>
                        </tr>
                            ]
                var body = []
                    
                toReturn.push(<table class="table">
                                <thead>
                                    {head}
                                </thead>
                                <tbody>
                                    {body}
                                </tbody>
                            </table>
                            )
                items.map(item=>{
                    if(typeof item !== "number"){
                    body.push(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                    )
                    }
                })
                return toReturn 
            })}

            </div>
        )
    }
}