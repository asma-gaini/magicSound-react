import { Outlet } from "react-router-dom";
import VerticalNavigation from "./VerticalNavigation";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <VerticalNavigation />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
