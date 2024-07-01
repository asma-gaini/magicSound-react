import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "./features/playList/Example";

import Playlist from "./features/playList/Playlist";
import UploaderMusic from "./features/uploaderMusic/UploaderMusic";
import AppLayout from "./Ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      { path: "/", element: <Playlist /> },
      { path: "/test", element: <Example /> },

      { path: "/uploadMusic", element: <UploaderMusic /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
