import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar";
import NavbarUttils from "../utilities/navbar";
// import { Navbar } from "../components/navbar";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {NavbarUttils.map(({ path, element, id }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="/" element={<Navigate to={"home"} />} />
        <Route path="*" element={<h1>404 Not a found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
