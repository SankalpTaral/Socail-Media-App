import axios from "axios";
import { useEffect, useState } from "react";

export default function usePost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(import.meta.env.VITE_POST_API_KEY).then((response) => {
      const responseObject = response.data;
      setPosts([...responseObject]);
    });
  }, []);
  return [posts,setPosts];
}
