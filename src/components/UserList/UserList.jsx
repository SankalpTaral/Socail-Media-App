import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CheckboxListSecondary() {
  const [users, setUsers] = useState([]);
  const userApiKey = import.meta.env.VITE_USERS_API_KEY
  useEffect(() => {
    axios
      .get(userApiKey)
      .then((response) => {
       console.log(userApiKey);
        setUsers(response.data); // ✅ store all users
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
        Users
      {users.length == 0
        ? "Loading users"
        : users.map((user) => {
            return (
              <ListItemButton key={user.id}>
                <ListItemAvatar>
                  <Avatar
                    alt={user.firstName}
                    src={user.avatar} // ✅ real image from API
                  />
                </ListItemAvatar>

                <ListItemText
                  primary={`${user.name}`} // ✅ real name
                />
              </ListItemButton>
            );
          })}
    </List>
  );
}
