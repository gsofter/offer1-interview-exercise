import user from './user/sagas'

export default function* rootSaga() {
  yield all([user()])
}
