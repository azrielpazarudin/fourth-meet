import React, { useState } from "react";

function Servant (props){
    const [like,setLike] = useState(true);
    const [showDesc,setShowDesc] = useState(true);
    function likeChanger (){
        setLike(!like);
    }
    function showDescChanger(){
        setShowDesc(!showDesc);
    }

    return (
        <>
        <div style={{justifyContent:"space-between",backgroundColor:'brown',textAlign:'center',color:'white',textShadow:'inherit',borderRadius:'10px'}}>
            <h1>{props.nama}</h1>
            <img src={props.gambar} alt="" style={{height:'10%',width:'25%'}}/>
            <h2>Servant Class : {props.servantClass}</h2>
            <button style={{background :like ? 'grey':'blue',padding:'10px',width:'200px',height:'50px',fontSize:'30px',borderRadius:'10%',color:'white'}}onClick={()=>likeChanger()}>{like? "Suka":"Batal Suka"}</button>
            <br />
            <br />
            <button style={{background:'lime',padding:'5px',width:'200px',height:'50px',color:'white'}} onClick={()=>showDescChanger()}>Selengkapnya</button>
            <p>{showDesc?"":props.deskripsi}</p>
            <br />
        </div>
        </>
    )
}
export default Servant