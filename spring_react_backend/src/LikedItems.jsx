import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class LinkedItems extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            likedItems: [],
        }
    }
    test = (id) => {
         fetch('/watch/list')
             .then(response => response.json())
             .then(result => {
                 result.map(value =>
                        this.state.likedItems.push(value)
                 )
             })
    }

    componentWillMount(){
        this.test();
    }



    render(){
    const removeLike = (id) =>{
        {this.props.removeLike(false,id)}
        this.setState({likedItems: this.state.likedItems.filter(item => item.id !== id)});
    }
        return(

            <div class="mainFrame">
                <h3>WishList</h3><br/><br/>
                <div className="orderFrame">
                    {this.state.likedItems.filter(filter => filter.likedMe === 'true').map(value  =>
                        <div class="orderFlex" >
                            <img name="ordersImage" src={value.img} />
                            <div class="orderDetails">
                                <h1>Fastrack</h1>
                                <i>{value.name}</i>
                                <h2>{value.price}</h2>
                                <Popup trigger=
                                    {<button>remove</button>}
                                     modal>
                                    {close => (
                                    <>
                                        <h3>Remove Item</h3>
                                        <div>Are you sure you want to remove this item?</div><br/>
                                        <button onClick={() => close()}>cancel</button>&nbsp;
                                        <button onClick={() => {removeLike(value.id)
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