import { getGroups, getUsers } from './asyncGetTest';
import { Groups, Users } from './asyncGetUsers';

describe('return an array in a promise', () => {
  it('return an array in a promise', async () => {
    const actualResult = await getUsers();
    const expectedResult = Users;
    expect(actualResult).toStrictEqual(expectedResult);
  })
  it('return an array in a promise', async () => {
    const actualResult = await getGroups();
    const expectedResult = Groups;
    expect(actualResult).toStrictEqual(expectedResult);
  })
})
