import React, { Component } from 'react';
import Main from './components/maincomponent'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// this provider allows me to configure my react application
// so that reduxstore beomes available to all components in my application
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configurestore';

const store = ConfigureStore();

class App extends Component {

  render(){
  return (
  	<Provider store={store}>
	  	<BrowserRouter>
		    <div> 
    		   <Main/>
	    	</div>
    	</BrowserRouter>
    </Provider>
  );
 }
}

export default App;