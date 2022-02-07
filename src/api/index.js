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
