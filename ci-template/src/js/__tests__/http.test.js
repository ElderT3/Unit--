import { httpGet, httpPost } from '../http.js';

test('httpGet throws error with url', () => {
  expect(() => httpGet('https://test.com')).toThrow('https://test.com');
});

test('httpPost throws error with url', () => {
  expect(() => httpPost('https://test.com')).toThrow('https://test.com');
});