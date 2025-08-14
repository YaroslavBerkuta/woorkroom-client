import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routes/routeTree";
import { useState } from "react";
import "@/assets/fonts/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [auth, setAuth] = useState({ isAuthenticated: false });
  const router = createRouter({
    routeTree,
    context: { auth, setAuth },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
