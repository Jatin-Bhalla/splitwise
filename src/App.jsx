import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";


import Home from "./Pages/Home";
import Groups from "./Pages/Groups";
import Friends from "./Pages/Friends";
import Activity from "./Pages/Activity";
import Account from "./Pages/Account";

function Page({ children }) {
  return (
    <div className="app-layout">
      <Header />
      <Navbar />

      <main className="page-content">
        {children}
      </main>

      
    </div>
  );
}

export default function App() {
  const [events, setEvents] = useState([]);
  const [logs, setLogs] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Page>
          <Home
            logs={logs}
            setLogs={setLogs}
            events={events}
            setEvents={setEvents}
          />
        </Page>
      )
    },
    {
      path: "/groups",
      element: (
        <Page>
          <Groups logs={logs} setLogs={setLogs} events={events} setEvents={setEvents} />
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
          <Activity logs={logs} setLogs={setLogs} />
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