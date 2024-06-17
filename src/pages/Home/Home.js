import React from "react";
import Header from "../../components/Header/Header";
import BookList from "../../components/BooksList/BookList";
import "../../App.css"
const Home = () => {
  return (
    <div className="">
      <Header />
      <BookList/>
    </div>
  );
};

export default Home;
