import React from 'react';
import Menu from "./Menu";
import "./Header.scss";

class Header extends React.Component {
    render() {
      return  <header>
          <div className="scroll-menu">
            <Menu />
            </div>
        </header>
    }

}

export default Header;