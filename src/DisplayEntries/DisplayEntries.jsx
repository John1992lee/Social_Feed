import OnClick from '../OnClickButton/OnClick';
import DislikeButton from '../DislikeButton/DislikeButton';


const DisplayEntries = (props) => {
    return ( 
        <table>
            {props.parentEntries.map((entry) => {
                return (
                        <div>
                            <div>
                                <td>{entry.name}</td>
                            </div>
                            <div>
                                <td>{entry.post}</td>
                            </div>
                            <OnClick message='Like'/>
                            <DislikeButton message='Dislike'/>
                            <hr />
                        </div>
                );
            })}
        </table>
     );
}
 
export default DisplayEntries;