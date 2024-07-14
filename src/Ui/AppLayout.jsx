import { Outlet } from "react-router-dom";
import VerticalNavigation from "./VerticalNavigation";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row flex-nowrap">
        <VerticalNavigation />
        <div className="col py-3">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
