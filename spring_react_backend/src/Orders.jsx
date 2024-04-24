import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class Order extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orderItems: [],
        }
    }

    test = (id) => {
     fetch('/watch/list')
         .then(response => response.json())
         .then(result => {
             result.map(value =>
                {if(value.numOfCart > 0){
                    this.state.orderItems.push(value)
                }}
             )
         })
    }

    componentWillMount(){
        this.test();
    }



    render(){
    const removeOrders = (id) =>{
        {this.props.cartButton(0,id)}
        this.setState({orderItems: this.state.orderItems.filter(item => item.id !== id),dialog: false});
    }

    const placeOrder = (totalProduct,value,id) =>{
        fetch("/watch/setTotalProducts/"+id,{
              method : "PUT",
              headers : new Headers({'content-type':'application/json'}),
              body : JSON.stringify({totalProducts: totalProduct - value}),
        })
        this.setState({orderItems: this.state.orderItems.filter(item => item.id !== id),dialog: false});
    }

        return(
            <div class="mainFrame">
                <h3>Order</h3><br/><br/>
                <div className="orderFrame">
                    {this.state.orderItems.map(value  =>
                        <div class="orderFlex" >
                            <img name="ordersImage" src={value.img} />
                            <div class="orderDetails">
                                <h1>Fastrack</h1>
                                <i>{value.name}</i>
                                <h2>{value.price}</h2>
                                <h3>Num.of.orders : <i>{value.numOfCart}</i></h3><br/>
                                <Popup trigger=
                                    {<button>place the order</button>}
                                     modal contentStyle={{ width: '80%' }}>
                                    {close => (
                                        <div class="placeOrderPopup">
                                            <div class="placeOrderDetail">
                                                {this.state.orderItems.filter(filter => filter.id === value.id).map(value  =>
                                                <>
                                                    <img name="ordersImage" src={value.img}/>
                                                    <div>
                                                        <h1>Fastrack</h1>
                                                        <i>{value.name}</i>
                                                        <h2>{value.price}</h2>
                                                        <i>{value.totalProducts}</i>&nbsp;
                                                        <a>:</a>&nbsp;
                                                        <label>Only available</label><br/>
                                                        <label> <i>{value.numOfCart}</i>&nbsp;&nbsp; : Num.of.orders</label><br/><br/>
                                                        <button onClick={() => close()}>cancel</button>&nbsp;
                                                        <Popup trigger=
                                                            {<button>remove order</button>}
                                                             modal>
                                                            {close => (
                                                            <>
                                                                <h3>Remove Item</h3>
                                                                <div>Are you sure you want to remove this item?</div><br/>
                                                                <button onClick={() => close()}>cancel</button>&nbsp;
                                                                <button onClick={() => {removeOrders(value.id)
                                                                                        close()}}>remove</button>
                                                                </>
                                                            )}
                                                        </Popup>
                                                    </div>
                                                </>
                                                )}
                                            </div>
                                            <div  class="orderPlaced">
                                                {this.state.orderItems.filter(filter => filter.id === value.id).map(value  =>
                                                    <>
                                                        <h2>Place an order</h2><br/><br/>
                                                        <label>Price of one product </label><a>:</a>
                                                        <i>{value.price.replace(/[₹ ,]/g, '')}</i><br/>
                                                        <label>num of products </label><a>:</a>
                                                        <i>{value.numOfCart}</i><br/>
                                                        <spam>---------------------------------------------------------------</spam><br/>
                                                        <label>Total Amount </label><a>:</a>
                                                        <i>{parseInt(value.price.replace(/[₹ ,]/g, '')) * value.numOfCart}</i><br/><br/>
                                                        <button onClick={() => {placeOrder(value.totalProducts,value.numOfCart,value.id)
                                                                                this.props.cartButton(0,value.id)
                                                                                close()}}>place the orderss</button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </Popup>&nbsp;
                                <Popup trigger={<button>remove</button>} modal>
                                    {close => (
                                        <>
                                            <h3>Remove Item</h3>
                                            <div>Are you sure you want to remove this item?</div><br/>
                                            <button onClick={() => close()}>cancel</button>&nbsp;
                                            <button onClick={() => {removeOrders(value.id)
                                                                    close()}}>remove</button>
                                        </>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}