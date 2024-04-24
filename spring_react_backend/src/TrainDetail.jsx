// import React from "react";
//
// export default class Demo extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             trainList: [],
//             ticketList: [],
//         }
//     }
//
//     test = () => {
//          fetch('/list')
//              .then(response => response.json())
//              .then(result => {this.setState({trainList : result})})
//          fetch('ticket/ticketList')
//              .then(response => response.json())
//              .then(result => {this.setState({ticketList : result})})
//     }
//
//     componentDidMount = () =>{
//             this.test();
//     }
//     render(){
//
//         return(
//             <>
//                 <h1>Train detail</h1><br/>
//                 <button class="button-91" onClick={this.props.backAction}>back</button><br/><br/>
//                 <div class="trainTicketFrame">
//                     {this.state.trainList.map((value,key)  =>
//                         <>
//                             {this.props.keys === (key+1) &&
//                                 <>
//                                     <a class="trainName">
//                                         {value.name}<br/>{value.trainNumber}
//                                     </a>
//                                     <a class="trainDetails">
//                                         {value.day}&nbsp;
//                                         {value.time}
//                                     </a>
//                                 </>
//                             }
//                         </>
//                     )}
//                     {this.state.ticketList.map(value =>
//                         <>
//                             <a name="ticketFrame">{value.ticketType}</a><br/>
//                         </>
//                     )}
//                 </div>
//             </>
//         )
//     }
// }