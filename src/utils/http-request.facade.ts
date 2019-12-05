import axios from 'axios';

const httpRequest = (config : string) : Promise<any> => {
    const promise : Promise<any> = new Promise((resolve, reject) => {
        axios(config).then((data) => {
            resolve(data.data);
        }).catch((err) => {
            reject(err);
        });
    });
    return promise;
};

export default httpRequest;