import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function Input() {
  return (
    <Box sx={{ mt: "1rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="your next post"
        variant="outlined"
      />
      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        id="outlined-basic"
        label="image for ur post"
        variant="outlined"
      />
      <Button variant="contained">Submit</Button>
    </Box>
  );
}

export default Input;
