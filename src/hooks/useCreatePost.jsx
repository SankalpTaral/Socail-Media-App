import axios from "axios";
import {useState ,useContext} from "react";
import PostContext from "../../Providers/PostContextProvider";


export default function useCreatePost() {
  const {setPosts } = useContext(PostContext);
  const [loading, setLoading] = useState(false);

  const createPost = async (postText, imageUrl) => {
    if (!postText.trim() || !imageUrl.trim()) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "https://6a99957353c0481726b972d3.mockapi.io/Posts",
        {
          image: imageUrl,
          content: postText,
          likes: 0,
          title: "fetching data from input and creating",
          createdAt: "4 sept 2026",
        }
      );

      setPosts(prev => [response.data, ...prev]); 
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return {createPost, loading };
}