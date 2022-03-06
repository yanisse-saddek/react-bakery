import React from 'react'

export default class List extends React.Component{
    constructor(props){
        super(props)
    }
    getResult = ()=>{
        var toReturn = []
        if(this.props.items.length > 0){
            this.props.items.map(item=>{
                toReturn.push(
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="ms-2 me-auto">
                        <img height="80PX" width="100px"src={item[0].image}/>
                        <div style={{textAlign:"center"}}className="fw-bold">{item[0].name}</div>
                    </div>
                    <span className="badge bg-primary rounded-pill">{item[0].price}$</span>
                    <span className="badge bg-danger rounded-pill" onClick={()=>{
                        this.props.remove(item)
                        }}>x</span>

                </li>
                )
            })
        }else{
            toReturn.push(<p>Aucun element</p>)
        }

        return toReturn
        }
    render(){
        return(
            <div>
                <h1>Total des items</h1>
                    {this.getResult()}
            </div>


        )
    }
}