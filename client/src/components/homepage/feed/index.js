import CardCont from "./cardSec";
import "./index.css";
import SearchSec from "./search";
const Feed = (props)=>{
    return(
        <>
        <div className="feed_cont">
            <CardCont profs={props.profs} uid={props.uid}/>
            <SearchSec/>
        </div>
        
        </>
    )
}

export default Feed;