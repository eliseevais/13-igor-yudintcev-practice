import React from "react";
import {PagesType} from "../data/dataState";
import {Navigate, useLocation, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PagePropsType = {
  pages: PagesType[]
}

export const Page: React.FC<PagePropsType> = ({pages}) => {
  const params = useParams();
  const location = useLocation();
  console.log('location', location.pathname);

  return (
    pages[Number(params.id)]
      ?
      <div>
        {location.pathname === '/page/0' && <div>SECRET TEXT</div>}
        {pages[Number(params.id)].heading}
        <hr/>
        {pages[Number(params.id)].about}
      </div>
      : <Navigate to={'/page/error'}/>
      // : <Error404/>
  )
}