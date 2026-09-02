import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { useState } from "react";

function PostCard({ title, content,image }) {

  const[isLiked,setIsLiked] = useState(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"  onClick ={()=>setIsLiked(!isLiked)} >
          {isLiked=== false ? <FavoriteBorderSharpIcon /> 
          :   
          <FavoriteIcon  
          sx = {{color:red[500]}}/>}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;
