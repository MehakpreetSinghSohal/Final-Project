import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Sidebar = (props)=>{

  const navigate = useNavigate();
  const uid = props.user.phone;
  console.log(uid);

  function logout(uid){
    Axios.post("http://localhost:5000/logout", { uid })
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          if(err.response.statusText==="Conflict"){
            alert("Phone Number already exist");
          }
        });
  }
    return(
    <>
    <div className="side_cont">
      <h1 className="side_logo">Milan</h1>
      <div className="side_navCont">
        <h3><Link to="/home" state={uid} style={{textDecoration:"none",color:"inherit"}}>Home</Link></h3>
        <h3><Link to="/requests" state={props.user.phone} style={{textDecoration:"none",color:"inherit"}}>Requests</Link></h3>
        <h3><Link to="/sent" state={uid} style={{textDecoration:"none",color:"inherit"}}>Sent</Link></h3>
        <h3><Link to="/matches" state={props.user.phone} style={{textDecoration:"none",color:"inherit"}}>Matches</Link></h3>
        <h3><Link to="/plans" state={props.user.phone} style={{textDecoration:"none",color:"inherit"}}>Plans</Link></h3>
        <h3><Link to="/myProfile" state={props.user.phone} style={{textDecoration:"none",color:"inherit"}}>Your Profile</Link></h3>
        <h3 onClick={() => logout(props.user.phone)}>Log Out</h3>
      </div>
    </div>
    </>
    )
  }
  
  export default Sidebar;