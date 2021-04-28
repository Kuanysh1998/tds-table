import * as axios from 'axios'
const instance = axios.create({
    baseURL: "https://randomuser.me/api/",
    //withCredentials: true
})


export const usersAPI = {
    getUsers(count = 20) {
        return instance.get(`?results=${count}`)
    },

}
