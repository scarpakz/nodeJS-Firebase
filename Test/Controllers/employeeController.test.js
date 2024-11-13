import request from 'supertest'
import app from '../../index.js'

let token

beforeAll(async () => {
    const response = await request(app).post('/api/login').send({
        email: 'test@email.com',
        password: 'testpassword'
    })
    token = response.body.token
})

describe('GET /employees', () => {
    describe('Get all list of employees', () => {
        test('getEmployees Controller should return 200 and array of employees', async () => {
            const response = await request(app)
            .get('/api/employees')
            .set('Authorization', `Bearer ${token}`)

            expect(response.statusCode).toBe(200)
            expect(response.body).toEqual(expect.any(Array))
        })
    })
})