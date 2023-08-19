import axios from '../axios';

const userService = {
    handleLogin(email, password) {
        return axios.post('/api/login', {email, password});
    },

    getAllUser(userId) {
        return axios.get(`/api/all-user?id=${userId}`)
    },

    createNewUser(data) {
        return axios.post('/api/create-new-user', data);
    },

    editUser(data) {
        return axios.put('/api/edit-user', data);
    }
};
export default userService;