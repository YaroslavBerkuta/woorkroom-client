import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routes/routeTree";
import { useEffect } from "react";
import "@/assets/fonts/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotificationProvider, useStore } from "./shared";

const queryClient = new QueryClient();

function App() {
  const { isAuthenticated, company } = useStore();
  const router = createRouter({
    routeTree,
    context: { isAuthenticated, company },
  });

  useEffect(() => {
    router.navigate({ to: "/" });
    router.invalidate();
  }, [isAuthenticated, company]);

  return (
    <NotificationProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} context={{ isAuthenticated }} />
      </QueryClientProvider>
    </NotificationProvider>
  );
}

export default App;
