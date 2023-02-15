import { Link } from "react-router-dom";
const Profile = (props)=>{
    var user = props.user;
    return(
        <>
        <div className="profCard">
            <div className="profPubDet">
                <img src={user.dp} alt="dp"></img>
                <table className="profPubDetTable">
                    <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{user.address}</td>
                    </tr>
                </table>
            </div>
            <table className="profPrivDetTable">
                    <tr>
                        <td>City: {user.city}</td>
                        <td>State: {user.State}</td>
                        <td>Gender: {user.gender}</td>
                        <td>Occupation: {user.job}</td>
                    </tr>
                    <tr>
                        <td>Religion: {user.religion}</td>
                        <td>DOB: {user.dob}</td>
                        <td>Language: {user.language}</td>
                        <td>Height: 169cm</td>
                    </tr>
                    <tr>
                        
                        <td>Bio:</td>
                        <td colSpan={2} style={{border:"1px solid rgb(200,200,200)"}}>{user.bio} </td>
                        <td>Maritial Status: {user.maritial}</td>
                    </tr>
            </table>
            <div className="profileditbtn"><Link to="/editProf" state={user.phone} style={{textDecoration:"inherit", color:"inherit"}}>Edit Profile</Link></div>
        </div>
        </>
    )
}

export default Profile;