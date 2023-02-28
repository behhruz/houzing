// import React, { Children } from "react";

import { PropertiesProvider } from "./properties";

export const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>{children}</PropertiesProvider>
    </>
  );
};
