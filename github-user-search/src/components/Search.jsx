import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null);
    try {
      const data = await fetchUserData(input);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={input}
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-result">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && (
          <div className="user-card">
            <img src={user.avatar_url} alt={user.login} width={80} />
            <h3>{user.name || user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
