import { Outlet } from "react-router-dom";
import VerticalNavigation from "./VerticalNavigation";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="">
      <div className="">
        {/* <Header /> */}
        <VerticalNavigation />
        <div>
          <main className="">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
