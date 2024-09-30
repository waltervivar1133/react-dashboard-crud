import { createRoot } from "react-dom/client";

import UserManagementPage from "@/pages/UserManagementPage/UserManagementPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.scss";
import "@/styles/variables.scss";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <UserManagementPage />
  </QueryClientProvider>
);
