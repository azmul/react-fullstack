import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Aux from './hoc/Aux';
import Header from './common/Header';

const Dasboard = () => <h2>dasboard</h2>
const SurveyLink = () => <h2>surveyLink</h2>
const Landing = () => <h2>landing</h2>

class App extends Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
         <Aux>
             <BrowserRouter>
               <div className="container">
                   <Header />
                   <Route exact={true} path="/" component={Landing} />
                   <Route exact={true} path="/surveys" component={Dasboard} />
                   <Route path="/surveys/new" component={SurveyLink} />
               </div>
             </BrowserRouter>
         </Aux>
      )   
  }
}
export default App;