import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AboutUs from './Components/About us/AboutUs';
import UserMain from './Components/User Information/User main/UserMain';
import MyOffer from './Components/User Information/My Offer/MyOffer';
import OtherStatus from './Components/User Information/Other Status/OtherStatus';
import OderDetails from './Components/User Information/Order Status Details/OderDetails';
import SignUp from './Components/Sign Up/SignUp';
import SignIn from './Components/Sign In/SignIn';
import Profile from './Components/User Information/Profile/Profile';
import ActiveAccount from './Components/Active Account/ActiveAccount';
import SaveMeals from './Components/User Information/Save Meals/SaveMeals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [


      {
        path : "/",
        element : <Home></Home>
      },

      {
        path : "/about",
        element : <AboutUs></AboutUs>
      },

      {
        path : "/signup",
        element : <SignUp></SignUp>
      },

      {
        path : "/signup/active_account",
        element : <ActiveAccount></ActiveAccount>
      },

      {
        path : "/signin",
        element : <SignIn></SignIn>
      },


      {
        path : "/user",
        element : <UserMain></UserMain>,
        children : [

          {
            path : "/user/profile",
            element : <Profile></Profile>
          },

          {
            path : "/user/save-meals",
            element : <SaveMeals></SaveMeals>
          },

          {
            path : "/user/my-offer",
            element : <MyOffer></MyOffer>
          },

          {
            path : "/user/order-status",
            element : <OtherStatus></OtherStatus>
          },

          {
            path : "/user/order-status/:id",
            element : <OderDetails></OderDetails>
          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
