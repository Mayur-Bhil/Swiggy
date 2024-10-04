import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/contact";
import { Error } from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Resmenu from "./components/Resmenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from './components/Grocery';

const Grocery = lazy(() => import("./components/Grocery"));

const Applayout = () => {
  //authentication code  logic
  const [userName, setuserName] = useState();

  useEffect(() => {
    const data = {
      name: "Mayur Bhil",
    };
    setuserName(data.name);
  }, []);
  
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ logedInUser: userName, setuserName }}>
        <div className="app">
                <Header />
                <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/resturants/:resid",
        element: <Resmenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
