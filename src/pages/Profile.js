import { useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'

const Profile = () => {
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, 'users');
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);

  const createUser = async () => {
    await addDoc(userCollectionRef, {
      name: newName,
      age: Number(newAge)
    });
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newField = {age: age + 1};
    await updateDoc(userDoc, newField);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {

    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };

      getUser();
    }, [createUser]);

  return (
    <div className="profile">
      <input placeholder='Name' onChange={(event) => {setNewName(event.target.value)}}/>
      <input type="number" placeholder='Age'onChange={(event) => {setNewAge(event.target.value)}}/>

      <button onClick={createUser}>Create User</button>
      {user.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
            <button onClick={() => {updateUser(user.id, user.age)}}>Increase Age</button>
            <button onClick={() => {deleteUser(user.id)}}>Delete User</button>
          </div>
        )
      })}
    </div>
  );
}

export default Profile;