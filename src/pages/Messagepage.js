import React,{useEffect} from "react";
import {useParams} from "react-router-dom";
import db from "../config/db"

const MessagePage = () =>{
    let {myuserid,senderId} = useParams();
   
    useEffect(()=>{
        db.collection("messages").where("users","array-contains-any",[myuserid,senderId]).get().then((res)=>{
            res.docs.map((element)=>console.log("data",element.data()))
        })
    },[])
    return (
        <div>
            <h1>Hello</h1>

        </div>
    )
}

export default MessagePage;