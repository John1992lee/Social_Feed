import Post from "../Post/Post";




const PostList = (props) => {

    const postArry = props.newPost

    return (
        <div className='display-form'>
            <Post newCurrentPost={postArry}/>
        </div>

     );
}
 
export default PostList;
