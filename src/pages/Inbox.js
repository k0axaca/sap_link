import React,{useEffect} from "react";
import db from "../config/db";
import { Link ,useParams} from "react-router-dom";

const Inbox = () =>{
    let {userid,userName} = useParams();
    let [fireStoreMessages,setFirestoreMessages] = React.useState([]);
    const user = {
        fullName:userName,
        uid:userid
    };

    useEffect(()=>{
        db.collection("messages").where("users","array-contains",userid).onSnapshot((res)=>{
            setFirestoreMessages(res.docs)
          })
    },[])


    const _renderLastMesssage = (message,user,detailsOfSender) =>{
        const lastMessage = message[message.length-1];
        const [name,msg] = lastMessage.split(":");
        console.log("CHAT",user,name,detailsOfSender)
        const SenderId = detailsOfSender.users.filter((e)=> e != user.uid);
        console.log("CHAT",SenderId)
        
        return (
          <Link to={`/message/${user.fullName}/${user.uid}/${SenderId[0]}`}>
              <h1 style={{fontWeight:"bold"}}>{name}</h1>
              <p>{msg}</p>
          </Link>
        )
        //Kristina: Hi!
      }

   
  if(fireStoreMessages.length == 0){
    return <div className="navbar-item">No Messages :(</div>
  }else{
  return (
      <div>
        {
          fireStoreMessages?.map((ele)=>_renderLastMesssage(ele.data().chat,user,ele.data()))
        }
      </div>
    )
  }
}

export default Inbox;