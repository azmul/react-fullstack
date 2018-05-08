import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../payment/payment';

class Header extends Component{
    renderContent(){
      switch(this.props.auth){
          case null:
             return ;
             break;
          case false:   
             return (
                <li><a href="/auth/google">Login with google</a></li>
             ); 
             break;
          default:
             return (
                <li><a href="/api/logout">Logout</a></li>
             ); ; 
             break;  
      }
    }
    render(){
        console.log(this.props.auth);
        return(
            <div>
                <nav>
                    <div class="nav-wrapper">
                    <Link 
                    className="brand-logo" 
                    to ={this.props.auth ? '/surveys' : '/'}
                    >
                      Logo
                    </Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                       {this.renderContent()}
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps({auth}){
   return {auth};
}

export default connect(mapStateToProps)(Header);