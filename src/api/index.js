import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from '../config/db';

// --------- SERVICES ----------

export const fetchServiceById = serviceId => 
  db.collection('services')
    .doc(serviceId)
    .get()
    .then(snapshot => ({id: snapshot.id, ...snapshot.data()}))


export const fetchServices = () => 
  db.collection('services')
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      return services
    })

export const fetchUserServices = userId => 
db.collection('services')
  .where("user", "==", userId)
  .get()
  .then(snapshot => {
    const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    return services
  })

export const createService = newService => {
  return db
    .collection('services')
    .add(newService)
    .then(docRef => docRef.id)
}

// --------- SERVICES END ----------


// --------- AUTH ----------

const createUserProfile = (userProfile) => 
  db.collection('profiles')
    .doc(userProfile.uid)
    .set(userProfile)

export const register = async ({email, password, fullName, avatar}) => {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    const { user } = res
    const userProfile = { uid: user.uid, fullName, email, avatar, services: [], description: ''}
    await createUserProfile(userProfile)
    return userProfile
  } catch(error) {
    return Promise.reject(error.message)
  }
}

export const login = ({email, password}) => 
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => Promise.reject(error.message))

export const logout = () => firebase.auth().signOut()

export const onAuthStateChanged = onAuthCallback => 
  firebase.auth().onAuthStateChanged(onAuthCallback)


export const getUserProfile = uid =>
  db.collection('profiles')
    .doc(uid)
    .get()
    .then(snapshot => ({uid, ...snapshot.data()}))

export const createRef = (collection, docId) => db.doc(`${collection}/` + docId) 

// --------- AUTH END ----------

// --------- MESSAGES ----------

  export const sendMessage = message => 
  db.collection('profiles')
    .doc(message.toUser)
    .collection('messages')
    .add(message)


export const subscribeToMessages = (userId, callback) =>
  db.collection('profiles')
    .doc(userId)
    .collection('messages')
    .onSnapshot(snapshot => {
      const messages = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      callback(messages)
  })

  export const markMessageAsRead = message =>
  db.collection('profiles')
    .doc(message.toUser)
    .collection('messages')
    .doc(message.id)
    .update({isRead: true})

// OFFERS START

export const createOffer = offer => db.collection('offers').add(offer)

