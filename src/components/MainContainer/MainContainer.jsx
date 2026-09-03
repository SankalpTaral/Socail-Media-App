import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PostCardList from "../PostCardList/PostCardList";
import UserList from "../UserList/UserList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainContainer() {
  return (
    <Box sx={{ mt: "3rem", width: "100%" }}>
      {/* Parent Grid */}
      <Grid
        container
        columnSpacing={{ xs: 1, sm:3, md: 4 }}
        alignItems={{md: "flex-center"}}
        justifyContent={{xs :"center"}}
         sx={{}}
        
      >
        {/* Users */}
        <Grid item xs={12} md={4} sx={{ }}>
          <Item>
            <UserList />
          </Item>
        </Grid>

        {/* Posts Feed */}
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          alignItems="center"
          rowSpacing={2}
          sx={{ mx: "auto" }} // ✅ THIS IS THE FIX
        >
          <PostCardList />
        </Grid>

        {/* RIGHT EMPTY SPACE (for centering) */}
        <Grid item xs={false} md={3} />
      </Grid>
    </Box>
  );
}
