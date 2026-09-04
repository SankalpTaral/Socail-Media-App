import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';
import useCreatePost from "../../hooks/useCreatePost";
import { useState } from "react";


function Input() {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { createPost, loading } = useCreatePost();

  const handleSubmit = async () => {
    await createPost(postText, imageUrl);
    setPostText("");
    setImageUrl("");
  };

  return (
    <Box sx={{ mt: "1rem" }}>
      <TextField
        fullWidth
        label="your next post"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />

      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        label="image for ur post"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      {loading ? (
        <LoadingButton loading />
      ) : (
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      )}
    </Box>
  );
}
export default Input;

