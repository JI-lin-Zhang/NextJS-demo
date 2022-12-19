import axios from 'axios';
import { IEventInterface } from '../constant/events.interface';


axios.defaults.baseURL = 'http://localhost:9080/api/v1/events'

export async function getAllEvents(){
  const res = await axios.get('/');
  
  if (res.status === 200) {
    return res.data.data
  }
}

export async function getFeaturedEvents(){
  const allEvents = await getAllEvents() as IEventInterface[];
  return allEvents.filter(event => event.isFeatured)
}