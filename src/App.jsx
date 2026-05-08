import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Groups from "./Pages/Groups";
import Friends from "./Pages/Friends";
import Activity from "./Pages/Activity";
import Account from "./Pages/Account";

function Page({ children }) {
  return (
    <>
      <Header />
      <div></div>
      <Navbar />
      {children}
      <div></div>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Page>
        <Home />
      </Page>
    )
  },
  {
    path: "/groups",
    element: (
      <Page>
        <Groups />
      </Page>
    )
  },
  {
    path: "/friends",
    element: (
      <Page>
        <Friends />
      </Page>
    )
  },
  {
    path: "/activity",
    element: (
      <Page>
        <Activity />
      </Page>
    )
  },
  {
    path: "/account",
    element: (
      <Page>
        <Account />
      </Page>
    )
  },
  {
    path: "*",
    element: (
      <Page>
        <h1>404 - Page Not Found</h1>
      </Page>
    )
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}