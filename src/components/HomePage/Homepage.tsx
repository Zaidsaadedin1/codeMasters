"use client";
import ListOfCards from "../ListOfCards/ListOfCards";
import MainMenu from "../MainMenu/MainMenu";

function Homepage() {
  return (
    <>
      <div>
        <MainMenu />
        <ListOfCards />
      </div>
    </>
  );
}
export default Homepage;
