import React from "react";
import styles from "./Site.module.css"
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./pages/Error404";
import {StylesStyled} from "./markUp/Styles_styled";
import {Page} from "./pages/Page";
import {dataState} from "./data/dataState";

export const Site = () => {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          {/*<div><NavLink*/}
          {/*  className={({isActive}) => isActive ? styles.active : styles.navLink}*/}
          {/*  to={'/page1'}*/}
          {/*>*/}
          {/*  PageOne</NavLink></div>*/}

          {/*<StylesStyled.NavWrapper><NavLink to={'/page1'}>PageOne</NavLink></StylesStyled.NavWrapper>*/}
          <StylesStyled.NavWrapper><NavLink to={'/page/0'}>PageOne</NavLink></StylesStyled.NavWrapper>
          <StylesStyled.NavWrapper><NavLink to={'/page/1'}>PageTwo</NavLink></StylesStyled.NavWrapper>
          <StylesStyled.NavWrapper><NavLink to={'/page/2'}>PageThree</NavLink></StylesStyled.NavWrapper>

        </div>
        <div className={styles.content}>
          <Routes>
            {/*<Route path={'/'} element={<PageOne/>}/>*/}
            <Route path={'/'} element={<Navigate to={'/page/1'}/>}/>

            {/*<Route path={'/page1'} element={<PageOne/>}/>*/}
            <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>

            <Route path={'/page/error'} element={<Error404/>}/>
            <Route path={'/*'} element={<Navigate to={'/page/error'}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}