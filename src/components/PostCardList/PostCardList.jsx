import { useEffect,useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";


function PostCardList() {
    const [posts , setPosts] = useState([]);
    console.log("yp",posts);
    useEffect(()=>{
        console.log("Running effect");
        axios.get(import.meta.env.VITE_POST_API_KEY)
        .then((response)=>{
            console.log(response)
            const responseObject = response.data
               setPosts([...responseObject]);
        })
        
    },[])
    

    return (
        <>
            {posts.length==0 ? "Loading posts"
            :(posts.map((post)=>{
                return <PostCard
                        key = {post.id}
                        title = {post.title}
                        content = {post.content}
                        image={post.image}
                        likeCount = {post.likes}
                        createdAt = {post.createdAt}
                         />
            }))}
        </>
    )


}

export default PostCardList;
