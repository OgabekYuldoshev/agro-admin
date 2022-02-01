import axios from 'axios'
const url = 'https://guarded-cliffs-29944.herokuapp.com/api'
const accessToken = localStorage.getItem("accessToken") && JSON.parse(localStorage.getItem("accessToken"))
const headerProp = {
  Authorization: `Bearer ${accessToken}`,
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8'
}

export const http = axios.create({
  baseURL: url,
  headers: headerProp,
  params: {}
})