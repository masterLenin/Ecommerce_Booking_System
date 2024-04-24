import React from "react";
import DialWatch from "./DialWatch";
import SportWatch from "./SportWatch";
import SmartWatch from "./SmartWatch";
import CartAddFunction from "./CartAddFunction"

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fetch: [],
        }
    }

    render(){


        return(
            <div class="mainFrame">
                   <div className="productFrame">
                       {this.props.watchList.filter(filter => filter.type === 'dialWatch').map((value,id) =>
                        <p>
                            <img src={value.img} />
                            <h2>Fastrack</h2>
                            {value.name}
                            <h1>{value.price}</h1>
                        <CartAddFunction cartButton={this.props.cartButton} storedCart={value.numOfCard} onClick={this.props.onClick} addLike={this.props.findLike} values={value}/>
                        </p>
                       )}

                       {this.props.watchList.filter(filter => filter.type === 'smartWatch').map((value,id)  =>
                        <p>
                            <img src={value.img} />
                            <h2>Fastrack</h2>
                            {value.name}
                            <h1>{value.price}</h1>
                            <CartAddFunction cartButton={this.props.cartButton} storedCart={value.numOfCard} onClick={this.props.onClick}  addLike={this.props.findLike}  values={value}/>
                        </p>
                       )}

                       {this.props.watchList.filter(filter => filter.type === 'sportWatch').map((value,id)  =>
                        <p>
                            <img src={value.img} />
                            <h2>Fastrack</h2>
                            {value.name}
                            <h1>{value.price}</h1>
                            <CartAddFunction cartButton={this.props.cartButton} storedCart={value.numOfCard} onClick={this.props.onClick}  addLike={this.props.findLike} values={value}/>
                        </p>
                       )}
                </div>
            </div>
        )
    }
}