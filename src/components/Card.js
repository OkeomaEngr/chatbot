import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../components/Contact";
import Navigate from "../components/Navigate";

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navigate />}>
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default Card;
