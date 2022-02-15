import React,{useEffect} from "react";
import {useParams} from "react-router-dom";
import db from "../config/db"

const MessagePage = () =>{
    let {myuserid,senderId,userName} = useParams();
    let [getDetails,setDetails] = React.useState();
    let [userMessage,setUserMessage] = React.useState("");
    let [docId, setDocId] = React.useState();
   
    useEffect(()=>{
        db.collection("messages").where("users","array-contains-any",[myuserid,senderId]).onSnapshot((res)=>{
            res.docs.map((el)=>{
                setDetails(el.data())
                setDocId(el.id)
            })

        })
    },[])
    console.log("get details",getDetails)

    const _renderMessages = (details) =>{
        const _details = details.chat.map((el)=>{
            const [name,message] = el.split(":")
            return (
                <div>
                    <h1 style={{fontWeight:"bold"}}>{name}</h1>
                    <p>{message}</p>
                </div>
            )
        })
        return _details;
    }

    const sendHandler = () =>{
       
        var Tempchat = getDetails.chat;
        Tempchat.push(`${userName}:${userMessage}`);
        setUserMessage("");
        db.collection("messages").doc(docId).update({ chat:Tempchat}).then(()=>{
        }).catch(()=>{
            alert("Sorry there was an error!")
        })

    }

    return (
        <div>
            {getDetails &&_renderMessages(getDetails)}

            <input value={userMessage} onChange={(e)=>setUserMessage(e.target.value)} />
            <button onClick={sendHandler}>Send</button>

        </div>
    )
}

export default MessagePage;