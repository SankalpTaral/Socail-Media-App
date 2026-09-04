import MainContainer from "./MainContainer/MainContainer.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Input from "./Input/Input.jsx";
import { useState,useEffect } from "react";
import PostContext from "../../Providers/PostContextProvider.jsx";
import axios from "axios";

function SocailApp() {
  const [posts, setPosts] = useState([]);
   useEffect(()=>{
        axios.get(import.meta.env.VITE_POST_API_KEY)
        .then((response)=>{
            const responseObject = response.data
               setPosts([...responseObject]);
        })
        
    },[])
    
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
