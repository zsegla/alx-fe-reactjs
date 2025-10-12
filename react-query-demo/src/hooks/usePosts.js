import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../services/api";

export default function usePosts() {
  return useQuery(["posts"], fetchPosts, {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
}
