import axios from 'axios';

export default {
    fetchAbonents: (link) =>
        axios.get(link ? link : 'http://localhost:3030/abonents?_page=1&_limit=5'),
    deleteAbonent: (id) =>
        axios.delete(`http://localhost:3030/abonents/${id}`),
    editAbonent: (id, data) =>
        axios.put(`http://localhost:3030/abonents/${id}`, data),
    createAbonent: (data) =>
        axios.post(`http://localhost:3030/abonents`, data)
}
