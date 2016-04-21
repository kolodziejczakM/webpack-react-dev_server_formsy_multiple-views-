import React from 'react';
import ReactDOM from 'react-dom';
 
class Header extends React.Component {
	constructor(){
	super();		
	
	}
	
  render() {
	var inlineStyle = {marginRight:20,color: "green", fontSize:30} //inline styles sucks
    return <div>
		<a style={inlineStyle} href="./index.html">Strona Główna</a>
		<a style={inlineStyle} href="./onas.html">O nas</a>
		<a style={inlineStyle} href="./contact.html">Contact</a>
	   </div>
  }
}
 
ReactDOM.render(<Header/>, document.getElementById('header'));
