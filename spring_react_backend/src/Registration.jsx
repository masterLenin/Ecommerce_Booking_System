import React from "react";

export default class Registration extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    render(){
        return(
            <>
                {this.props.boolean ?
                    <div class="login-page">
                        <div class="form">
                            <form class="login-form">
                                <input type="text" value={this.state.username} placeholder="username" onChange={(e) => this.setState({username: e.target.value})}/>
                                <input type="password" value={this.state.password} placeholder="password" onChange={(e) => this.setState({password: e.target.value})}/>
                                <button onClick={() => {this.props.registerButton(this.state.username,this.state.password)
                                                        this.props.setTrue()}}>login</button>
                            </form>
                        </div>
                    </div>
                :
                    <div class="inLogin-page">
                        <div class="form">
                            <form class="login-form">
                                <input type="text" value={this.state.username} placeholder="username" onChange={(e) => this.setState({username: e.target.value})}/>
                                <input type="password" value={this.state.password} placeholder="password" onChange={(e) => this.setState({password: e.target.value})}/>
                                <a href="/"><button onClick={() => {this.props.registerButton(this.state.username,this.state.password)
                                                                                                    this.props.adds()}}>login</button></a>
                            </form>
                        </div>
                    </div>
                }
            </>
        )
    }
}