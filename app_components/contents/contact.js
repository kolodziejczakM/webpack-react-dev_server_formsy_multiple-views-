import React from 'react';
import ReactDOM from 'react-dom';

export default class Contact extends React.Component {
  render() {
    return (
    		<div>
    			<span>Mail: xxx@xxx.com</span>
    			<span>Address: pilsudskiego 12</span>
    			<span>Tel: 222 333 111 </span>
    		</div>
    	)
  }
}
 
ReactDOM.render(<Contact/>, document.getElementById('render'));
