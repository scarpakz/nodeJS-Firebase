import request from 'supertest'
import server from '../../index.js'

let token

beforeAll(async () => {
    const response = await request(server).post('/api/login').send({
        email: 'test@email.com',
        password: 'testpassword'
    })
    token = response.body.token
})
afterAll(async () => { server.close() })

describe('GET /employees', () => {
    test('getEmployees Controller should return 200 and array of employees', async () => {
        const response = await request(server)
        .get('/api/employees')
        .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(expect.any(Array))
    })
})