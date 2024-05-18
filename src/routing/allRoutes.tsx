import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
import LoginPage from "../pages/login";
import Users from "../pages/users";
import UserViewOverview from "../pages/users/profile";
import UserView from "../components/templates/login/user/view/UserViewPage";

export const AllRoutesProvider = () => {
  // tail
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/users/profile/:id" element={<UserView />} />


      </Route>

      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<LoginPage  />}
      />
    </Routes>
  );
};
