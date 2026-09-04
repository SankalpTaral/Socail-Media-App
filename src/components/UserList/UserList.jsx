import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import { memo } from "react";

function UserList() {
  const [users] = useUsers();
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
              <Link
                to={`/users/${user.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
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
              </Link>
            );
          })}
    </List>
  );
}
export default memo(UserList);
