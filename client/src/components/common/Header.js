import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="javascript:void(0)">Login with google</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;