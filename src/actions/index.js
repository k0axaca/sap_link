import { FETCH_SERVICES_SUCCESS } from "../types";
import db from '../config/db';

// actions should only return objects
export const fetchServices = () => {
  return db
      .collection('services')
      .get()
      .then(snapshot => {
        const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        return {
          type: FETCH_SERVICES_SUCCESS,
          services: services
        }
      })
}