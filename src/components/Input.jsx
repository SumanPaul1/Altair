import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/chatContext';
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from 'uuid';

const Input = () => {
    const [text, setText] = useState("");
    const [ img, setImg ] = useState(null);

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    const handleSend = async () => {
        console.log("Message sending...")
        if(img){
            const storageRef = ref(storage, uuid());
            await uploadBytesResumable(storageRef, img).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    await updateDoc(doc(db,"chats",data.chatId),{
                        messages: arrayUnion({
                            id: uuid(),
                            text,
                            senderId: currentUser.uid,
                            date: Timestamp.now(),
                            img: downloadURL,
                        }),
                    })
                });
              });
        } else {
            console.log("Only text")
            await updateDoc(doc(db,"chats",data.chatId),{
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            })
        }

        await updateDoc(doc(db,"userChats",currentUser.uid),{
            [data.chatId + ".lastMessage"]:{
                text,
            },
            [data.chatId + ".date"]:serverTimestamp(),
        });
        await updateDoc(doc(db,"userChats",data.user.uid),{
            [data.chatId + ".lastMessage"]:{
                text,
            },
            [data.chatId + ".date"]:serverTimestamp(),
        });

        setText("")
        setImg(null)
    }

    return (
        <div className='input'>
            <input type="text" placeholder='Message' onChange={(e) => setText(e.target.value)} value={text}/>
            <div className="send">
                <i class="fa-solid fa-paperclip"></i>
                <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])}/>
                <label htmlFor="file">
                    <i class="fa-regular fa-image"></i>
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}

export default Input;