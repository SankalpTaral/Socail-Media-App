
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function useUserProfile(){
    const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_USERS_API_KEY}/${id}`) // your API endpoint
      .then((res) => setUser(res.data))
  }, []);

  return [user];
}