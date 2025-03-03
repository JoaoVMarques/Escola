import api from './api';
import accountLoginInterface from './interfaces/accountInterface';

export async function verifyAccountForLogin(userModel: accountLoginInterface) {
  const response = await api.post('/account/login', userModel);
  return response.data;
}
