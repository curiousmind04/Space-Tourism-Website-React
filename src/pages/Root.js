import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  const [divClass, setDivClass] = useState();

  const classHandler = (props) => {
    setDivClass(props);
  };

  return (
    <div className={divClass ? divClass : "home"}>
      <MainNavigation />
      <Outlet context={classHandler} />
    </div>
  );
}

export default RootLayout;
