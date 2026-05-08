import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,   // 👈 layout wrapper
      errorElement: <h1>404 Not Found</h1>, // 👈 custom error
      children: [
        { index: true, element: <Groups /> },   // default page
        { path: "friends", element: <Friends /> },
        { path: "activity", element: <Activity /> },
        { path: "account", element: <Account /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}