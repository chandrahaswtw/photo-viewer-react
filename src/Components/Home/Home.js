import React from 'react';
import classes from './Home.module.scss';
import NavBar from './../NavBar/NavBar';
import MainForm from './../MainForm/MainForm';
import Footer from './../Footer/Footer';

function Home() {
  return (
      <div className={classes.gridContainer}>
        <NavBar></NavBar>
        <MainForm></MainForm>
        <Footer></Footer>
      </div>
  );
}

export default Home;
