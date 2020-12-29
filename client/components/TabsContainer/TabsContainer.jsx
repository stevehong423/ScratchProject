import React from "react";
import { AddItem } from "./AddItem.jsx";
import { SearchBar } from "./SearchBar.jsx";

export const TabsContainer = () => {
  return (
    <div className="flex flex-row justify-around">
      <AddItem />
      <SearchBar />
    </div>
  );
};
