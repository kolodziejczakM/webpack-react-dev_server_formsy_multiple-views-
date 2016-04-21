import React from 'react';
import ReactDOM from 'react-dom';

 
class Footer extends React.Component {
  render() {
    return <div>Copyright &copy; Marcin Kołodziejczak 2016 </div>
  }
}
 
ReactDOM.render(<Footer/>, document.getElementById('footer'));
