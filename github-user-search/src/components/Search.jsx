import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const perPage = 10;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);
    setTotalCount(0);
    setPage(1);
    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: 1,
        perPage,
      });
      setUsers(data.items || []);
      setTotalCount(data.total_count || 0);
    } catch (err) {
      setError("Looks like we can't find any users");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (newPage) => {
    setLoading(true);
    setError(null);
    setUsers([]);
    setPage(newPage);
    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: newPage,
        perPage,
      });
      setUsers(data.items || []);
      setTotalCount(data.total_count || 0);
    } catch (err) {
      setError("Looks like we can't find any users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md mt-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-end"
      >
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g. octocat"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g. San Francisco"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Min Repos
          </label>
          <input
            type="number"
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
      <div className="mt-6">
        {loading && <p className="text-blue-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && users.length > 0 && (
          <>
            <p className="mb-2 text-gray-700">Found {totalCount} users</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded shadow"
                >
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{user.login}</p>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span>Page {page}</span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page * perPage >= totalCount}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
