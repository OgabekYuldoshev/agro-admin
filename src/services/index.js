import axios from 'axios'
const url = 'https://guarded-cliffs-29944.herokuapp.com/api'
export const http = axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  },
  params: {}
})