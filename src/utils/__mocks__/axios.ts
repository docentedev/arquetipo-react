import User from "../../types/user";

export const user : User = {
    name: 'Juan',
    email: 'juan@mail.com',
    username: 'juan',
    address: '',
    company: {
        name: 'string',
        catchPhrase: 'string',
        bs: 'string',
    },
    id: 1,
    phone: '123454325',
    website: 'www.juan.cl',

};


const axios = () => {
    return new Promise((resolve) => {
        resolve({ data: [user] });
    });
};

export default axios;