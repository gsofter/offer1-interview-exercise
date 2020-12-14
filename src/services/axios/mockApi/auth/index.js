import jwt from 'jsonwebtoken'
import mock from '../mock'

const users = [
  {
    id: 1,
    email: 'test@test.com',
    password: 'test',
    name: 'Adelin Ionut',
    avatar: '',
    role: 'admin',
  },
]

const jwtConfig = {
  secret: 'RM8EPpgXwovR9fp6ryDIoGHAB6iHsc0fb',
  expiresIn: 1 * 24 * 60 * 60 * 1000,
}

mock.onPost('/api/auth/login').reply((request) => {
  const { email, password } = JSON.parse(request.data)
  const user = users.find((item) => item.email === email && item.password === password)
  const error = user ? 'Something went wrong.' : 'Login failed, please try again'

  if (user) {
    const userData = Object.assign({}, user)
    delete userData.password
    userData.accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn,
    }) // generate jwt token

    return [200, userData]
  }

  return [401, error]
})