import MainContainer from "./MainContainer/MainContainer.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Input from "./Input/Input.jsx";
import PostContext from "../../Providers/PostContextProvider.jsx";
import usePost from "../hooks/usePost.jsx";

function SocailApp() {
  const [posts, setPosts] = usePost();
  
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <div>
        <Navbar />
        <Input />
        <MainContainer />
      </div>
    </PostContext.Provider>
  );
}

export default SocailApp;
