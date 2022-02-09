import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from '../config/db';

export const fetchServiceById = serviceId =>
  db.collection('services')
    .doc(serviceId)
    .get()
    .then(snapshot => ({...snapshot.data(), id: snapshot.id}))  

export const fetchServices = () => {
  return db
    .collection('services')
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      return services
  })
}

// AUTH //

const createUserProfile = (userProfile) => 
  db.collection('profile')
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

export const onAuthStateChanged = () => firebase.auth().onAuthStateChanged(authUser => authUser)

export const getUserProfile = uid =>
  db.collection('profiles')
    .doc(uid)
    .get()
    .then(snapshot => ({uid, ...snapshot.data()}))



