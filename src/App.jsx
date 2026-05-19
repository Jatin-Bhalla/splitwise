import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Groups from "./Pages/Groups";
import Friends from "./Pages/Friends";
import Activity from "./Pages/Activity";
import Account from "./Pages/Account";

function Page({ children }) {
//router can't access this function
  return (
    <>
      <Header />
      <section id="spacer"></section>
      <Navbar />
      {children}
      <section id="spacer"></section>
      <Footer />
    </>
  );
}

export default function App() {
  const [events, setEvents] = useState([]);
  const [log ,setLog]= useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Page>
          <Home  events={events} setEvents={setEvents} />
        </Page>
      )
    },
    {
      path: "/groups",
      element: (
        <Page>
          <Groups events={events} setEvents={setEvents} />
        </Page>
      )
    },
    {
      path: "/friends",
      element: (
        <Page>
          <Friends events={events} setEvents={setEvents} />
        </Page>
      )
    },
    {
      path: "/activity",
      element: (
        <Page>
          <Activity  logs ={log} setLog={setLog} />
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
    }
  ]);

  return <RouterProvider router={router} />;
}