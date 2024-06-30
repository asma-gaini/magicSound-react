import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginUser from "./features/login/LoginUser";

import Playlist from "./features/playList/Playlist";
import UploaderMusic from "./features/uploaderMusic/UploaderMusic";
import AppLayout from "./Ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      { path: "/", element: <Playlist /> },

      { path: "/uploadMusic", element: <UploaderMusic /> },
      { path: "/login", element: <LoginUser /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
