import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import App from "../App";

const router=createBrowserRouter([
  {
    path:'',
    element:<Home />
  },
  {
    path:'posts',
    element:<Posts />
  }
]);
export default router