import BCard from "./card";


const CardCont = (props)=>{

    const data = props.profs;
    
    return(
        <div className="card_cont" id="cscroll">
            {data.map(profile => (
            <BCard prof={profile} uid={props.uid}/>
          ))}
        </div>
    )
}

export default CardCont;