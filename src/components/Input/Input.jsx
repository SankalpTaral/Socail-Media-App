import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';

import { useState,useContext} from "react";
import axios from "axios";
import PostContext from "../../../Providers/PostContextProvider";

function Input() {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading , setLoading] = useState(false);
  const {posts , setPosts} = useContext(PostContext)
  


  async function createPost() {
  
    if(postText.trim().length===0  || imageUrl.trim().length===0 ) return;
    setLoading(true);
    console.log("yooo")
    try {
      const response = await axios.post(
        
        "https://6a99957353c0481726b972d3.mockapi.io/Posts",
        {
          image: imageUrl,
          content: postText,
          likes: 0,
          text: postText,
          title: "fetching data from input and creating",
          createdAt : "4 sept 2026"
        },
      );


      setPosts([response.data,...posts])
    } catch (error) {
      console.error(error);
    }
    setPostText("");
    setImageUrl("");
    setLoading(false);

  }

  return (
    <Box sx={{ mt: "1rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="your next post"
        variant="outlined"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        id="outlined-basic"
        label="image for ur post"
        variant="outlined"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
        {
        (loading) ? <LoadingButton loading /> : 
        <Button 
        variant='contained'
        onClick={createPost}>Submit</Button>
      }
    </Box>
  );
}

export default Input;

