import React,{useEffect} from "react";
import {useParams} from "react-router-dom";
import db from "../config/db"

const MessagePage = () =>{
    let {myuserid,senderId,userName} = useParams();
    let [getDetails,setDetails] = React.useState();
    let [userMessage,setUserMessage] = React.useState("");
    let [docId, setDocId] = React.useState();
    //array-contains-any
    //myuserid,senderId
   
    useEffect(()=>{
        db.collection("messages").where("users","array-contains-any",[myuserid]).onSnapshot((res)=>{
            //for the new users that they haven't talked before
            console.log("checker",res.docs.length ,res)
            var counter = 0;
            var result=false;
            res.docs.map((el)=>{
                if(el.data().users.includes(senderId)){
                    setDetails(el.data())
                    setDocId(el.id)
                    result=true;
                }
                counter++;
            })
            if(counter==res.docs.length){
                console.log("checker",true)
                if(result == false){
                    db.collection("messages").add({
                                users:[myuserid,senderId],
                                chat:[""]
                            }).then((id)=>{
                                setDocId(id.id)
                            })
                }
            }
            // if(res.docs.length === 0){
            //     // var random = Math.random()*10000;
            //     // db.collection("messages").doc(random).set({
            //     //     users:[myuserid,senderId],
            //     //     chat:[""]
            //     // }).then((res)=>{
            //     //     setDocId(random)
            //     // })
                    
                
            // }else{
                
            //     res.docs.map((el)=>{
            //         setDetails(el.data())
            //         setDocId(el.id)
            //     })
            // }

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
       
        if(getDetails?.chat?.length){
            var Tempchat = getDetails.chat;
            Tempchat.push(`${userName}:${userMessage}`);
            setUserMessage("");
            db.collection("messages").doc(docId).update({ chat:Tempchat}).then(()=>{
            }).catch(()=>{
                alert("Sorry there was an error!")
            })
        }else{
            var Tempchat2 = [`${userName}:${userMessage}`];
            setUserMessage("");
            db.collection("messages").doc(docId).update({ chat:Tempchat2}).then(()=>{
            }).catch(()=>{
                alert("Sorry there was an error!")
            })
        }
        

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