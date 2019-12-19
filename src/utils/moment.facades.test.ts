import { formatDate } from './moment.facades';

it('formatDate is correct', () => {
    const expected = '01/12/2011';
    const actual = formatDate(new Date(2010, 12, 12));

    expect(actual).toEqual(expected);

});