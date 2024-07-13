import postsDetails from "@/data/Post";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className="lg:mt-[-62px]">
            {
                postsDetails.map((post) => <Post key={post.id} postTitle={post.title} postBody={post.body} />)
            }
        </div>
    );
};

export default Posts;