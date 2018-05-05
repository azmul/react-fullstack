import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Aux from './hoc/Aux';
import Header from './common/Header';
import Survey from './survey/Survey';
import Landing from './landing/Landing';
import SurveyNew from './survey/survey-new/Survey-new';


class App extends Component{
  constructor(props){
      super(props);
  }
  componentDidMount(){
      console.log("App.js --->", this.props);
      this.props.fetchUser();
  }
  render(){
      return(
         <Aux>
             <BrowserRouter>
               <div className="container">
                   <Header />
                   <Route exact={true} path="/" component={Landing} />
                   <Route exact={true} path="/surveys" component={Survey} />
                   <Route path="/surveys/new" component={SurveyNew} />
               </div>
             </BrowserRouter>
         </Aux>
      )   
  }
}
export default connect(null, actions)(App);