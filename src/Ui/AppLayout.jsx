import { Outlet } from "react-router-dom";
import VerticalNavigation from "./VerticalNavigation";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* <Header /> */}
        <VerticalNavigation />
        <div>
          <main className="col py-3 rightContent">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
