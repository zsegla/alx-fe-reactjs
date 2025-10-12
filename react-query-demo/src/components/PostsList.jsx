import React from "react";
import usePosts from "../hooks/usePosts";

export default function PostsList() {
  const { data, isLoading, isError, error } = usePosts();

  if (isLoading) return <div>Loading posts…</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {data.slice(0, 20).map((post) => (
        <li
          key={post.id}
          style={{
            marginBottom: 12,
            padding: 12,
            borderRadius: 8,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h3 style={{ margin: "0 0 6px" }}>{post.title}</h3>
          <p style={{ margin: 0 }}>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
