import React from 'react';
class HelloWorld extends React.Component{

render(){
    return(
    <h1>Hello {this.props.firstname}  </h1>
    )
}
}
// function HelloWorld(props) {
//     return (
//      <div>
//     <h1>Hello World  </h1>
//      </div>
//     );
//   }

  export default HelloWorld;