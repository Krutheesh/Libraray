import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom"
import "./header.css"
const Header = () => {
  return (
    
    <div>
<div className="header-lg">
      <h1 className="header_title">
        My Library
      </h1>
      <SearchBar />
     
     <Link to='/shelf' className="bookshelf">
     My Bookshelf
     </Link>
    </div>

    <div className="header-sm">
      <h1 className="header_title">
        My Library
      </h1>

      <Link to='/shelf' className="bookshelf">
     My Bookshelf
     </Link>
      <SearchBar />
     
    
    </div>
    </div>
  );
};

export default Header;
