import apiConfig from '../config/api.config';
import httpRequest from '../utils/http-request.facade';
import User from '../types/user';

const RESOURCE = 'users';

export const findAllUsers = async () : Promise<Array<User>> => {
    const promise : Promise<Array<User>> = httpRequest(`${apiConfig.jsonPlaceholder}/${RESOURCE}`);
    return await promise;
};