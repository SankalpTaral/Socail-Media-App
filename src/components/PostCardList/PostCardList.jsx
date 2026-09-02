import { useEffect,useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";


function PostCardList() {
    const [posts , setPosts] = useState([]);
    useEffect(()=>{
        console.log("Running effect");
        axios.get("https://dummyjson.com/posts")
        .then((response)=>{
            console.log(response.data.posts)
            const responseObject = response.data.posts
            setPosts([...responseObject]);
        })
        
    },[])

    return (
        <>
            {posts.length==0 ? "Loading posts"
            :(posts.map((post)=>{
                return <PostCard
                        key = {post.id}
                        // content = {post.}
                        title = {post.title}
                        content = {post.body}
                          image={`https://picsum.photos/500/300?random=${post.id}`}
                          likeCount = {post.reactions.likes}
                         />
            }))}
        </>
    )


}

export default PostCardList;
