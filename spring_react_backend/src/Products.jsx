import React from "react";
import Home from "./Home";
import DialWatch from "./DialWatch";
import SportWatch from "./SportWatch";
import SmartWatch from "./SmartWatch";
import Registration from "./Registration";
import LikedItems from "./LikedItems";
import Orders from "./Orders";
import { Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class Products extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orders:false,
            cartValue:'',
            login: true,
            cartValueList:[],
            buttonAction:'',
            watchDetails: [],
        }
    }
    test = () => {
         fetch('/watch/list')
             .then(response => response.json())
             .then(result => {this.setState({watchDetails : result.sort((a, b) => a.id > b.id ? 1 : -1)})})
    }

    componentDidMount(){
        this.test();
    }

    componentDidUpdate(){
        this.test();
    }

    render(){


    const listOfWatch = [{
            img:"https://m.media-amazon.com/images/I/71SfuJukJKL._AC_UL320_.jpg",
            name:"Analog Brown",
            type:"dialWatch",
            price:"₹ 3,435",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/51EiXZQZcJL._AC_UL320_.jpg",
            name:"Analog white",
            type:"dialWatch",
            price:"₹ 1,395",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/71-+chJUpLL._AC_UL320_.jpg",
            name:"Analog Silver",
            type:"dialWatch",
            price:"₹ 1,275",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/51Z3J7uzNfL._AC_UL320_.jpg",
            name:"Casual Analog",
            type:"dialWatch",
            price:"₹ 904",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/61gyBgshTIL._AC_UL320_.jpg",
            name:"Analog Brown",
            type:"sportWatch",
            price:"₹ 2,955",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/51tEtj7nS7L._AC_UL320_.jpg",
            name:"Analog gray",
            type:"sportWatch",
            price:"₹ 2,295",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/51ksEujI7UL._AC_UL320_.jpg",
            name:"Analog gray",
            type:"sportWatch",
            price:"₹ 1,875",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/61hSPNBmUeL._AC_UL320_.jpg",
            name:"Casual black",
            type:"sportWatch",
            price:"₹ 1,404",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/71wRh+9yqrL._AC_UY218_.jpg",
            name:"Limitless FS1",
            type:"smartWatch",
            price:"₹ 1,499",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/81j2cNDxq+L._AC_UY218_.jpg",
            name:"Limitless FS1+",
            type:"smartWatch",
            price:"₹ 1,699",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/712+H1IHbML._AC_UY218_.jpg",
            name:"Limitless FS1 pro",
            type:"smartWatch",
            price:"₹ 2,699",
            totalProducts:'50',
            likedMe: false
        },{
            img:"https://m.media-amazon.com/images/I/61MVqhtVBuL._AC_UY218_.jpg",
            name:"Limitless FS2",
            type:"smartWatch",
            price:"₹ 1,999",
            totalProducts:'50',
            likedMe: false
    }];

    var add = 0;
    const cartButton = (values,id)  => {
        fetch("/watch/setCart/"+id,{
                method : "PUT",
                headers : new Headers({'content-type':'application/json'}),
                body : JSON.stringify({numOfCart: values}),
        })
        console.log(values+".........")
        {this.state.watchDetails.map(value =>
            {if(value.id !== id && value.numOfCart !== null){
                add += parseInt(value.numOfCart);
            }else if (value.id === id){
                add += values
            }}
        )}
        this.setState({cartValue: add})
    }


    const findLike = (values,id) => {
        fetch("/watch/setLike/"+id,{
                method : "PUT",
                headers : new Headers({'content-type':'application/json'}),
                body : JSON.stringify({likedMe: values}),
        })
    }


    let mainBord = <Home watchList={this.state.watchDetails} cartButton={cartButton} cartButtonAdd={this.state.cartFunction} findLike={findLike}/>;
        if(this.state.buttonAction === 'home'){
           mainBord =<Home watchList={this.state.watchDetails} cartButton={cartButton} cartButtonAdd={this.state.cartFunction} findLike={findLike}/>
        }else if(this.state.buttonAction === 'dialWatch'){
            mainBord = <DialWatch dialWatchList={this.state.watchDetails} cartButton={cartButton} cartButtonAdd={this.state.cartFunction} findLike={findLike}/>
        }else if (this.state.buttonAction === 'sportWatch'){
            mainBord = <SportWatch sportWatchList={this.state.watchDetails} cartButton={cartButton} cartButtonAdd={this.state.cartFunction} findLike={findLike}/>
        }else if (this.state.buttonAction === 'smartWatch'){
            mainBord = <SmartWatch smartWatchList={this.state.watchDetails} cartButton={cartButton} cartButtonAdd={this.state.cartFunction} findLike={findLike}/>
        }else if (this.state.buttonAction === 'orders'){
            mainBord = <Orders cartButton={cartButton}/>
        }else if (this.state.buttonAction === 'like'){
            mainBord = <LikedItems removeLike={findLike} />
        }

        const registerButton = (user,password) => {
            if(user === 'admin' && password === 'admin'){
                if(this.state.watchDetails.length === 0){
                    listOfWatch.map(value =>
                        fetch('/watch/setList',{
                            method : "POST",
                            headers : new Headers({'content-type':'application/json'}),
                            body : JSON.stringify({name : value.name,img : value.img,type : value.type,price : value.price,totalProducts: value.totalProducts}),
                        })
                    )
                    this.test();
                }
            }else{
                alert('give the proper username and password')
            }
        }



        return(
            <div>
                {this.state.login ?
                    <Registration  registerButton={registerButton} setTrue={()=> this.setState({login: false})} boolean/>
                :
                    <div class="firstWindow">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                        <nav class="navbar fixed-top">
                                &nbsp;<button class="button-68 " onClick={()=> this.setState({buttonAction: 'home'})}>Home</button>
                            <div class="text-center d-flex ms-auto">
                                <button onClick={()=> this.setState({buttonAction: 'like'})}><i class='fa fa-heart bg-muted' style={{color: 'red'}}></i></button>&nbsp;
                                <button class="btn btn-outline-primary bg-light" onClick={()=> this.setState({buttonAction: 'orders'})}> 🛒 {this.state.cartValue}</button>
                            </div>
                        </nav><br/><br/><br/>
                        <div class="downNavBar">
                            <img name="fastrackLogo" src="https://www.fastrack.in/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dwe800d23b/images/FASTRACK-Logo-Black.png"/>
                            <Popup trigger=
                                {<button class="button-35 ">Logout</button>}
                                 modal nested  >
                                {close => (
                                    <>
                                        <Registration registerButton={registerButton} adds={close}/>
                                    </>
                                )}
                            </Popup>&nbsp;
                            <div class="dropdown">
                                <button class="button-35">Types   ▼</button>&nbsp;
                                <div class="dropdown-content">
                                    <button onClick={()=> this.setState({buttonAction: 'dialWatch'})}>Dial Watch</button>
                                    <button onClick={()=> this.setState({buttonAction: 'sportWatch'})}>Sport Watch</button>
                                    <button onClick={()=> this.setState({buttonAction: 'smartWatch'})}>Smart Watch</button>
                                </div>
                            </div>
                        </div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dwefb062bc/images/homepage/desktop/reflex_d.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dw840d9927/images/homepage/desktop/1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dw5a394630/images/homepage/desktop/fastrack_d.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        {mainBord}
                        <div class="footer">
                            <img name="fastrackLogo" src="https://lh3.googleusercontent.com/n1pB79fpIFHUjoAddasyHzF7hVo3POE3SRInCmUqXVDAUhfZcH7YWoaUyb5C36V4Pz22UninXtccvBYRahgm-_sxIcKn9joXpP4nZGk"/>
                            <div class="footerContact">
                                <label>CONTACT US</label><br/>
                                <a>1800-266-0123</a><br/>
                                <a href="https://customercare@titan.co.in">customercare@titan.co.in</a><br/>
                                <a>FAQs</a><br/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}