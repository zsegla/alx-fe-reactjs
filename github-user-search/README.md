# GitHub User Search Application

This project allows users to search for GitHub profiles using the GitHub API. It features a search input, displays results with basic user information, and links to their GitHub profiles.

## Project Structure

- `src/components/`: React components
- `src/services/`: API service files
- `App.jsx`: Main application file

## Setup

1. Install dependencies:
   ```sh
   npm install
   npm install axios
   ```
2. Create a `.env` file in the root directory for environment variables (e.g., API keys).
3. Run the development server:
   ```sh
   npm run dev
   ```

## Environment Variables

- `VITE_APP_GITHUB_API_KEY` (optional): Your GitHub API key for authenticated requests.

## License

MIT
