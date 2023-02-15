import MenuAppBar from "../homepage/nav/navbar";
import Sidebar from "../homepage/nav/sidebar";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import FileBase from 'react-file-base64';

const EditProf = () => {
  const stateData = useLocation();
  let uid = stateData.state;
  console.log(uid);
  
  const navigate = useNavigate();
  const [display, setDispaly] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: uid,
    address: "",
    city: "",
    State: "",
    job: "",
    gender: "male",
    religion: "Hindu",
    dob: "",
    language: "Hindi",
    maritial: "Single",
    bio: "",
    dp: "",
  });


  const handleInputs = (e) => {
    let name, value;

    console.log(e.target.name + " " + e.target.value);
    
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();

    console.log(user);
    Axios.post("http://localhost:5000/updateinfo", { user })
      .then((res) => {
        console.log(res);
        navigate("/home",{state:uid});
        
      })
      .catch((err) => {
        console.log(err);
        if (err.response.statusText === "Conflict") {
          alert("Phone Number already exist");
        }
      });
  };

  function getInfo() {
    Axios.post("http://localhost:5000/getinfo", { uid })
      .then((res) => {

        setDispaly(res.data);
        setUser(res.data);
        
      })
      .catch((err) => {
        console.log(err);
        if (err.response.statusText === "Conflict") {
          alert("Phone Number already exist");
        }
      });
  }
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <Sidebar user={display} />
      <MenuAppBar user={display} />
      <div className="editForm">
        <div className="editCard">
          <table>
            <tr>
              <th>Name:</th>
              <td>
                <input
                  type="text"
                  name="name"
                  value={user.name} onChange={handleInputs}
                ></input>
              </td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>
                <input type="mail" name="email"  value={user.email} onChange={handleInputs}></input>
              </td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                <input type="text" name="address"  value={user.address} onChange={handleInputs}></input>
              </td>
            </tr>
            <tr>
              <th>City:</th>
              <td>
                <input type="text"  name="city"  value={user.city} onChange={handleInputs}></input>
              </td>
            </tr>
            <tr>
              <th>State:</th>
              <td>
                <input type="text"  name="State"  value={user.State} onChange={handleInputs}></input>
              </td>
            </tr>
            <tr>
              <th>Occupation:</th>
              <td>
                <input type="text"  name="job"  value={user.job} onChange={handleInputs}></input>
              </td>
            </tr>
          </table>
          <div className="editHor"  name="gender"  value={user.gender} onChange={handleInputs}>
            <div>Gender:</div>
            <div>
              <label>Male</label>
              <input type="radio" name="gender" value="male" className="marLeft" />
            </div>
            <div>
              <label>Female</label>
              <input type="radio" name="gender"  value="female" className="marLeft" />
            </div>
          </div>
          <div className="editHor">
            <div>
              <label>Religion</label>
              <select className="marLeft" name="religion"  value={user.religion} onChange={handleInputs}>
              <option value="Hindu">Hindu</option>
              <option value="Musilm">Musilm</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Parsi">Parsi</option>
              <option value="Jain">Jain</option>
              <option value="Buddist">Buddhist</option>
              <option value="Athiest">Athiest</option>
              <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label>DOB</label>
              <input type="date" name="dob" value={user.dob} onChange={handleInputs} className="marLeft" />
            </div>
            <div>
              <label>Language</label>
              <select className="marLeft" name="language"  value={user.language} onChange={handleInputs}>
                <option value="Other">Other</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Bengali">Bengali</option>
                <option value="Gujrati">Gujarati</option>
                <option value="Urdu">Urdu</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="Kanada">Kanada</option>
                
              </select>
            </div>
          </div>
          <div className="editHor">
            <label>Bio</label>
            <textarea
              cols={85}
              rows={6}
              className="marLeft" name="bio" value={user.bio} onChange={handleInputs}
            ></textarea>
          </div>
          <div className="editHor">
            <div>
              <label>Maritial Status</label>
              <select className="marLeft" name="maritial" value={user.maritial} onChange={handleInputs}>
                <option name="single">Single</option>
                <option name="widowed">Widowed</option>
                <option name="divorced">Divorced</option>
              </select>
            </div>
            <div>
              <label>Photo</label>
              <FileBase type="file" multiple={false} onDone={({base64})=>setUser({...user,dp:base64})}/>
            </div>
            <div className="saveinfo" onClick={postData}>
              Save Info
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProf;
