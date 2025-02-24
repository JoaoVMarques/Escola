import api from './api';
import accountLoginInterface from './interfaces/accountInterface';

export async function verifyAccountForLogin(userModel: accountLoginInterface) {
  await api.post('/account/login', userModel);
}
