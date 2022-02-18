import React,{useEffect} from "react";
import db from "../config/db";
import { Link ,useParams} from "react-router-dom";

const Inbox = () =>{
    let {userid,userName} = useParams();
    let [fireStoreMessages,setFirestoreMessages] = React.useState([]);
    let [userIdArray, setuserIdArray] = React.useState([])
    const user = {
        fullName:userName,
        uid:userid
    };
    const getid = async (id) =>{
        var res = await db.collection("profiles").where("uid","==",id).get();
        return res.docs[0].data();
      }
  

    useEffect(()=>{
        db.collection("messages").where("users","array-contains",userid).onSnapshot((res)=>{

            setFirestoreMessages(res.docs)
            var associateArray = []
            res.docs.map((el,i)=>{
                var senderid = el.data().users.filter((e)=>e != userid);
                 getid(senderid[0]).then((re)=>{
                     associateArray.push(re)
                      if(i == res.docs.length-1){
                        setuserIdArray(associateArray);
                      }
                    });
               
            })
           
          })
    },[])

  
 

   

    const _renderLastMesssage =  (message,user,detailsOfSender) =>{
        const lastMessage = message[message.length-1];
        var [name,msg] = lastMessage.split(":");
        
        const SenderId = detailsOfSender.users.filter((e)=> e != user.uid);
        const fullNames = userIdArray.filter((el)=>el.uid == SenderId)
    
        
        
            return (
              <Link className="inbox" to={`/message/${user.fullName}/${user.uid}/${SenderId[0]}`}>
                <div className="inbox-content">
                  <h1 style={{fontWeight:"bold"}}>{fullNames[0].fullName}</h1>
                  <p>{msg}</p>
                </div>
              </Link>
            )
        
        //Kristina: Hi!
      }

   
  if(fireStoreMessages.length == 0 && userIdArray.length == 0){
    return <div className="navbar-item">No Messages :(</div>
  }else{
  return (
      <div>
        {
          userIdArray.length > 0 && fireStoreMessages?.map((ele)=>_renderLastMesssage(ele.data().chat,user,ele.data()))
        }
      </div>
    )
  }
}

export default Inbox;