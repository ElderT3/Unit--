import { loadUser, saveUser } from '../user.js';
import * as http from '../http.js';

jest.mock('../http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should load user and parse JSON', () => {
  http.httpGet.mockReturnValue(JSON.stringify({ name: 'Alex' }));

  const result = loadUser(1);

  expect(http.httpGet).toHaveBeenCalledWith(
    'http://server:8080/users/1'
  );

  expect(result).toEqual({ name: 'Alex' });
});

test('saveUser should throw error', () => {
  expect(() => saveUser({ id: 1 })).toThrow('Unimplemented');
});