import React from 'react'
export default class Save extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: this.props.test,
        }
    }

    render(){
        return(
            <div>
            <h1>Save</h1>
            {this.props.save.map(items=>{
                var toReturn = []
                var total = 0;
                var head = [
                        <tr>
                            <th scole="col-sm-8">Objet</th>
                            <th scole="col-sm-2">Quantité</th>
                            <th scole="col-sm-2">Prix</th>
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
                    total+= item.price * item.quantity
                    body.push(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                    )
                    }
                })
                toReturn.push(<h2>Total: {total}</h2>)
                return toReturn 
            })}
            </div>
        )
    }
}