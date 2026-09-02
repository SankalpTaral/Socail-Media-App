import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CheckboxListSecondary() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users); // ✅ store all users
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
                    src={user.image} // ✅ real image from API
                  />
                </ListItemAvatar>

                <ListItemText
                  primary={`${user.firstName} ${user.lastName}`} // ✅ real name
                />
              </ListItemButton>
            );
          })}
    </List>
  );
}
