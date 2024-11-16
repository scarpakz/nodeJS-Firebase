import request from "supertest";
import server from "../../index.js";

afterAll(async () => { server.close() })

describe("POST /login", () => {
    test("userAuth Controller should return 200 and token", async () => {
        const response = await request(server).post("/api/login").send({
            email: "",
            password: ""
        })
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("token");
    })
})