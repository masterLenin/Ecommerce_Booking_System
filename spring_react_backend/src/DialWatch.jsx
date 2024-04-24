import React from "react";
import CartAddFunction from "./CartAddFunction"

export default class DialWatch extends React.Component{

    render(){

        return(
            <div class="mainFrame">
                <h3>Dial watch</h3><br/><br/>
                <div className="separateProperty">
                {this.props.dialWatchList.filter(filter => filter.type === 'dialWatch').map(value  =>
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