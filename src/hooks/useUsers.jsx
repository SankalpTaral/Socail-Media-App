import axios from "axios";
import { useEffect, useState } from "react";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const userApiKey = import.meta.env.VITE_USERS_API_KEY;
  useEffect(() => {
    axios
      .get(userApiKey)
      .then((response) => {
        setUsers(response.data); // ✅ store all users
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return [users];
}
