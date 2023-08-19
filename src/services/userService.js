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
    },

    deleteUser(userId) {
        console.log('data: ', userId);
        return axios.delete('/api/delete-user', {
            data : {
                id : userId
            }
        });
    }
};
export default userService;