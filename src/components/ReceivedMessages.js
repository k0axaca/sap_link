import {useEffect,useState} from "react"
import db from "../config/db"
import { Link } from "react-router-dom";


const _renderLastMesssage = (message,user,detailsOfSender) =>{
  const lastMessage = message[message.length-1];
  const [name,msg] = lastMessage.split(":");
  console.log("CHAT",user,name,detailsOfSender)
  const SenderId = detailsOfSender.users.filter((e)=> e != user.uid);
  console.log("CHAT",SenderId)
  if(user.fullName == name){
    return <></>;
  }
  return (
    <Link to={`/message/${user.fullName}/${user.uid}/${SenderId[0]}`}>
        <h1 style={{fontWeight:"bold"}}>{name}</h1>
        <p>{msg}</p>
    </Link>
  )
  //Kristina: Hi!
}

const RenderMessages = ({user}) => {
  let [fireStoreMessages, setFirestoreMessages] =useState([]);

  useEffect(()=>{
    console.log("called",user)
    

    //collection Messages -> docs -> users["kristina","mustafa"]
    db.collection("messages").where("users","array-contains",user.uid).onSnapshot((res)=>{
      setFirestoreMessages(res.docs)
    })
  },[])
  

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

  export default RenderMessages;
