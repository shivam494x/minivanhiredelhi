import axios from 'axios'

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: 'https://minivan-delhi-new.onrender.com/api', 
  })
  return {
    provide: {
      axios: api,
    },
  }
})
