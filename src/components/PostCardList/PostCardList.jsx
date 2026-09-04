import { useContext } from "react";
import PostCard from "../PostCard";

import PostContext from "../../../Providers/PostContextProvider";

function PostCardList() {
  const { posts } = useContext(PostContext);
  return (
    <>
      {posts.length == 0
        ? "Loading posts"
        : posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
    </>
  );
}

export default PostCardList;
