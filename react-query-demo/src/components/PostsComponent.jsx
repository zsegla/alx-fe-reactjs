import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (page, limit = 10) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function PostsComponent() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const {
    data = [],
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
  } = useQuery(["posts", page], () => fetchPosts(page, limit), {
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 5, // keep in cache 5 minutes
    staleTime: 1000 * 30, // consider fresh for 30s
    refetchOnWindowFocus: false, // don't refetch automatically when window regains focus
  });

  if (isLoading) return <div>Loading posts…</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <div>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={isPreviousData || (data && data.length < limit)}
            style={{ marginLeft: 8 }}
          >
            Next
          </button>
        </div>
        <div>
          Page: {page}{" "}
          {isFetching ? (
            <small style={{ marginLeft: 8 }}>(fetching…)</small>
          ) : null}
        </div>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map((post) => (
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

      <div style={{ marginTop: 12 }}>
        <small>
          Note: keepPreviousData=true keeps the previous page visible while the
          next page is loading. cacheTime={1000 * 60 * 5} keeps results cached
          for 5 minutes.
        </small>
      </div>
    </section>
  );
}
