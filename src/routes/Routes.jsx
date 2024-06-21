import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Common/Profile";
import AddProperty from "../pages/Dashboard/Agent/AddProperty";
import MyListings from "../pages/Dashboard/Agent/AgentAddedProperties";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import MyBookings from "../pages/Dashboard/Users/UserPropertyBought";
import CardDetails from "../pages/Details page/CardDetails";
import AllProperties from "../pages/AllProperties";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-properties',
                element: <AllProperties></AllProperties>
            },
            {
                path: '/property/:id',
                element: (
                    <PrivateRoute>
                        <CardDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: 'profile',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: 'add-property',
                element: (
                    <PrivateRoute>
                        {/* <AgentRoute> */}
                        <AddProperty />
                        {/* </AgentRoute> */}
                    </PrivateRoute>
                ),
            },
            {
                path: 'my-listings',
                element: (
                    <PrivateRoute>
                        {/* <AgentRoute> */}
                        <MyListings />
                        {/* </AgentRoute> */}
                    </PrivateRoute>
                ),
            },
            {
                path: 'my-bookings',
                element: (
                    <PrivateRoute>
                        <MyBookings />
                    </PrivateRoute>
                ),
            },
            {
                path: 'manage-users',
                element: (
                    <PrivateRoute>
                        {/* <AdminRoute> */}
                        <ManageUsers />
                        {/* </AdminRoute> */}
                    </PrivateRoute>
                ),
            }
        ]
    }
])