import React from "react";
// import './ShoppingContainer/ShoppingContainer.jsx';
import ShoppingContainer from "./ShoppingContainer/ShoppingContainer.jsx";
import { TabsContainer } from "./TabsContainer/TabsContainer.jsx";
import { Header } from "./Header/Header.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <TabsContainer />
      <ShoppingContainer />
    </div>
  );
};

export default App;
