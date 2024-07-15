import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./features/aboutUs/AboutUs";
import LoginUser from "./features/login/LoginUser";
import FavoritPlayList from "./features/playList/FavoritPlayList";
import MainPlayList from "./features/playList/MainPlayList";

import Playlist from "./features/playList/Playlist";
import UploaderMusic from "./features/uploaderMusic/UploaderMusic";
import AppLayout from "./Ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      { path: "/", element: <Playlist /> },
      { path: "/favoritSongs", element: <FavoritPlayList /> },

      { path: "/uploadMusic", element: <UploaderMusic /> },
      { path: "/login", element: <LoginUser /> },
      { path: "/aboutUs", element: <AboutUs /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
