import React from "react";

export default class CartAddFunction extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cartButton: this.props.storedCart === (0 || null),
            addCart:parseInt(this.props.values.numOfCart),
            like:false
        }
    }

    changeButton = () =>{
        if(this.state.addCart === 1){
            this.setState({cartButton:false})
        }
    }

    render(){
    let error = '';
    if(this.state.addCart == 5){
        error = "Min quantity is only 5.";
    }else if (this.state.addCart !== this.props.values.totalProducts){
        error = "available stark only ("+this.props.values.totalProducts+")";
    }
        return(
            <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                {(this.state.cartButton || this.props.values.numOfCart > 0) ?
                    <>
                        <div class="cartAddButton">
                            <button name="cartButton" onClick={() => {
                                this.setState({addCart: this.state.addCart - 1})
                                this.props.cartButton(this.state.addCart-1,this.props.values.id)
                                this.changeButton()
                            }}>-</button>
                            <input name="addCardValue"  value={this.state.addCart}></input>
                            <button name="cartButton" onClick={() => {
                                {(this.state.addCart !== 5 && this.state.addCart !== parseInt(this.props.values.totalProducts)) && this.setState({addCart: this.state.addCart + 1})}
                                {(this.state.addCart !== 5 && this.state.addCart !== parseInt(this.props.values.totalProducts)) && this.props.cartButton(this.state.addCart +1,this.props.values.id)}
                            }}>+</button>
                        </div>
                        {(this.state.addCart == 5 || this.state.addCart === parseInt(this.props.values.totalProducts)) && <i name="cartError" >{error}</i>}
                    </>
                    :
                    <>
                        <button name="selectButton" onClick={() => {
                            this.setState({addCart:  1})
                            this.props.cartButton(1,this.props.values.id)
                            this.setState({cartButton:true})
                        }}>Add to cart</button>
                        <button name="likeButton" onClick={() => {this.props.addLike(!this.state.like,this.props.values.id)
                                                                    this.setState({like: !this.state.like})}}><i class='fa fa-heart' style={{color: this.props.values.likedMe === 'true' ? 'red' : 'Pink'}}></i></button>
                    </>
                }
            </>
        )
    }
}