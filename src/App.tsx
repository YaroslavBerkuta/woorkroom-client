import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routes/routeTree";
import { useState } from "react";
import "@/assets/fonts/style.css";

function App() {
  const [auth, setAuth] = useState({ isAuthenticated: false });
  const router = createRouter({
    routeTree,
    context: { auth, setAuth },
  });

  return <RouterProvider router={router} />;
}

export default App;
