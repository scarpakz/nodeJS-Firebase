import request from "supertest";
import app from "../../index.js";

describe("POST /login", () => {
    describe("Email and Password Provided", () => {
        test("userAuth Controller should return 200 and token", async () => {
            const response = await request(app).post("/api/login").send({
                email: "",
                password: ""
            })
            expect(response.statusCode).toBe(200);
            expect(response.body)
        })
    })
})