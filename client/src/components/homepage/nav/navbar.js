import SearchIcon from '@mui/icons-material/Search';

const MenuAppBar = (props)=>{
  return(
  <>
  <div className="nav_cont">
    <div  className="nav_detail" style={{width:"16rem"}}>
      <input type="text" className="nav_inp" placeholder='Search Name...'></input>
      <SearchIcon/>
    </div>
    
    <div className="nav_detail">
          <img src={props.user.dp} alt="dp" className="nav_dp"></img>
          <h3>{props.user.name}</h3>
    </div>
  </div>
  </>
  )
}

export default MenuAppBar;