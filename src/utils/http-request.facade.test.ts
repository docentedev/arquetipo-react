import httpRequest from './http-request.facade';
import { user } from './__mocks__/axios';
import User from '../types/user';

jest.mock('axios');

it('httpRequest is correct', () => {
    const expected = user;
    const actual = httpRequest('/any/url');

    actual.then((us : Array<User>) => {
        expect(us[0].name).toEqual(expected.name);
    })
});