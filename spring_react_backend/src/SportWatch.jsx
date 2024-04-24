import React from "react";
import CartAddFunction from "./CartAddFunction"

export default class SportWatch extends React.Component{
    render(){
        let cart = 0;
        const showValue = (value) =>{
            cart = value
        }

        return(
            <div class="mainFrame">
                <h3>Sport watch</h3><br/><br/>
                <div className="separateProperty">
                   {this.props.sportWatchList.filter(filter => filter.type === 'sportWatch').map((value,key)  =>
                   <p>
                       <img src={value.img} />
                       <h2>Fastrack</h2>
                       {value.name}
                       <h1>{value.price}</h1>
                        <CartAddFunction cartButton={this.props.cartButton} storedCart={value.numOfCard} onClick={this.props.onClick} addLike={this.props.findLike} values={value}/>
                   </p>
                  )}
                </div>
            </div>
        )
    }
}