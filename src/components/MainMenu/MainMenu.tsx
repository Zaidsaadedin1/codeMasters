"use client";
import { Button } from "../ui/button";

function MainMenu() {
  return (
    <div className="p-2">
      <menu className="flex flex-row justify-between">
        <h1>CodeMasters</h1>
        <Button>Book Now</Button>
      </menu>
    </div>
  );
}
export default MainMenu;
