import OnClick from '../OnClickButton/OnClick';
import DislikeButton from '../DislikeButton/DislikeButton';
import './Post.css';


const Post = (props) => {

    return ( 
        <table>
            {props.newCurrentPost.map((entry) => {
                return (
                    <div>
                        <div>
                            <h6>{entry.name}</h6>
                        </div>
                        <div>
                            <td>{entry.post}</td>
                        </div>
                        <div class='butn'>
                            <div>
                                <OnClick message='Like'/>
                            </div>
                            <div>
                                <DislikeButton message='Dislike'/>
                            </div>
                        </div>
                        <br />
                        <hr />
                    </div>
                );
            })}
        </table>
     );
}
 
export default Post;