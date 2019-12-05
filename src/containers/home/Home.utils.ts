import { findAllUsers } from '../../client/user.client';
import User from '../../types/user';

export const findAllUsersData = () : Promise<Array<User>> => {
    const promise : Promise<Array<User>> = new Promise((resolve, reject) =>{
        findAllUsers()
        .then((data : Array<User>) => {
            resolve(data);
        })
        .catch((err => {
            reject(err);
        }));
    });
    return promise;
};