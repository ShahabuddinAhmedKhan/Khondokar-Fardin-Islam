import {
    createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

export default router