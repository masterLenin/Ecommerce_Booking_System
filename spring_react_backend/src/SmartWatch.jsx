import React from "react";
import CartAddFunction from "./CartAddFunction"

export default class SmartWatch extends React.Component{
    render(){
        return(
            <div class="mainFrame">
                <h3>Smart watch</h3><br/><br/>
                <div className="separateProperty">
                    {this.props.smartWatchList.filter(filter => filter.type === 'smartWatch').map(value  =>
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