type User = {
    address: any,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    },
    email: string,
    id: number;
    name: string,
    phone: string,
    username: string,
    website: string,
};

export default User;