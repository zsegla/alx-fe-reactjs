import React from 'react'
import { useQuery } from '@tanstack/react-query'

// --- fetcher function (uses browser fetch API) ---
async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

export default function PostsComponent() {
  // queryKey is an array; good practice to include resource name and params if any
  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
    status,
  } = useQuery(['posts'], fetchPosts, {
    // optional per-query config (overrides defaults from QueryClient)
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false, // don't refetch automatically on window focus
  })

  return (
    <section>
      <div style={{ marginBottom: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <button
          onClick={() => refetch()}
          style={{
            padding: '8px 12px',
            borderRadius: 8,
            border: '1px solid #ddd',
            cursor: 'pointer',
            background: '#fff',
          }}
        >
          Refetch posts
        </button>

        <small style={{ color: '#666' }}>
          {isFetching ? 'Updating...' : `Status: ${status}`}
        </small>
      </div>

      {isLoading && <div>Loading posts...</div>}

      {isError && (
        <div style={{ color: 'crimson' }}>
          Error loading posts: {error?.message ?? 'Unknown error'}
        </div>
      )}

      {posts && (
        <ul style={{ padding: 0, listStyle: 'none', maxWidth: 900 }}>
          {posts.slice(0, 20).map(post => (
            <li
              key={post.id}
              style={{
                border: '1px solid #eee',
                padding: 12,
                marginBottom: 8,
                borderRadius: 8,
                background: '#fafafa',
              }}
            >
              <strong style={{ display: 'block', marginBottom: 6 }}>{post.title}</strong>
              <p style={{ margin: 0, color: '#333' }}>{post.body}</p>
              <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>ID: {post.id}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
