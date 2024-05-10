import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const About = lazy(()=>import('./components/About'));


const AppLayout = () => {

const [userName, setUserName] = useState();

useEffect(() => {
  const data = {
    name : 'Vijay Reddy'
  };
  setUserName(data.name)
},[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
      <div>
        <Header /> 
        <Outlet />
        {/* <p>footer</p> */}
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: 
        <Suspense fallback={<h2>About Page is loading....</h2>}>
          <About />,
        </Suspense>
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const heading = React.createElement('h1',
// {
//     id: 'heading',
//     aaa: 'xyz'
// },
// 'Sample Text for React Heading...');

{
  /* <div classname="parent">
    <div classname="child">
        <h1>Main Heading H1</h1>
        <h2>Child Heading H2</h2>
    </div>
</div> */
}

// const text = document.createElement('h1');

// document.getElementById('toplace').innerHTML = 'hello text..........'

// const parent = React.createElement(
//     'div',
//     {id: 'parent'},
//     [
//         React.createElement(
//             'div',
//             {id: 'child'},
//             [
//                 React.createElement('h1', {class: 'h1'}, ' Heading H1'),
//                 React.createElement('h2', {class: 'h2'}, ' Heading H2')
//             ]
//         ),
//         React.createElement(
//             'div',
//             {id: 'child'},
//             [
//                 React.createElement('h3', {class: 'h1'}, ' Heading H3'),
//                 React.createElement('h4', {class: 'h2'}, ' Heading H4')
//             ]
//         )
//     ]
// )
