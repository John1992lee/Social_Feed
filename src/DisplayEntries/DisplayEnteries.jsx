

const DisplayEntries = (props) => {
    return ( 
        <div>
            {props.parentEntries.map((entry) => {
                return (
                    <tr>
                        <div>
                            <td>{entry.name}</td>
                        </div>
                        <div>
                            <td>{entry.post}</td>
                        </div>
                        
                    </tr>
                );
            })}
        </div>
     );
}
 
export default DisplayEntries;