import authReducer from '../../reducers/auth';

test('should setup default reducer values', () => {
  const state = authReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({})
});

test('should setup login info', () => {
  const uid = "123"
  const state = authReducer(undefined, {type: 'LOGIN', uid});

  expect(state).toEqual({
   uid
  })
});

test('should setup logout info and clear the state', () => {
  const uid = "123"
  const state = authReducer({uid}, {type: 'LOGOUT'});
  expect(state).toEqual({})
});
