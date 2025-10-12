import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsList from "./components/PostsList";

const queryClient = new QueryClient();

function PostsComponent() {
  return <PostsList />;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
        <h1>Posts</h1>
        <PostsComponent />
      </main>
    </QueryClientProvider>
  );
}
