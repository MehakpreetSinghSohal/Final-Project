import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/mainPage';
import Signup from './components/signup'
import Login from './components/login';
import Home from "./components/homepage/home";
import Requests from "./components/requests/request";
import Sent from "./components/sent/sent";
import Matches from "./components/matches";
import Plans from "./components/plans";
import Myprofile from "./components/myProfile";
import EditProf from "./components/editProfile/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/requests" element={<Requests />}></Route>
        <Route path="/sent" element={<Sent />}></Route>
        <Route path="/matches" element={<Matches />}></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route path="/myProfile" element={<Myprofile />}></Route>
        <Route path="/editProf" element={<EditProf />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
