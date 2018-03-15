import {login, logout, startLogin, startLogout} from '../../actions/auth'
import configureStore from 'redux-mock-store' 


test('should setup state when login', () => {
  uid = "123"
  const action = login(uid);

  expect(action).toEqual(
    { 
      type: 'LOGIN',
      uid
    })
});

test('should setup state when logout', () => {

  const action = logout();

  expect(action).toEqual(
    { 
      type: 'LOGOUT'
    })
});
