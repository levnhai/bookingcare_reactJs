import axios from '../axios';

const userService = {
    handleLogin(email, password) {
        return axios.post('/api/login', {email, password});
    },

    getAllUser(userId) {
        return axios.get(`/api/all-user?id=${userId}`)
    }
};
export default userService;