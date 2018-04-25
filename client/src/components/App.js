import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const header = () => <h2>Header</h2>
const dasboard = () => <h2>dasboard</h2>
const surveyLink = () => <h2>surveyLink</h2>
const landing = () => <h2>landing</h2>

class App extends Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
         <div>
             <BrowserRouter>
               <div>
                   <Route path="/" component={landing} />
                   <Route path="/surveys" component={surveyLink} />
               </div>
             </BrowserRouter>
         </div>
      )   
  }
}
export default App;