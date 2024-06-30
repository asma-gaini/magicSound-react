import { Outlet } from "react-router-dom";
import VerticalNavigation from "./VerticalNavigation";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      // {/* <div className="container-fluid"> */}
      {/* <div className="row flex-nowrap"> */}
      <Header />
      <VerticalNavigation />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      {/* </div> */}
    </div>
  );
}

export default AppLayout;
