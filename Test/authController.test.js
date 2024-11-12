import userAuth from "../Controllers/authController.js";

describe("POST /login", () => {
    describe("Email and Password Provided", () => {

        test("Should respond with a 200 status code", async () => {
            const response = await request.post("/login").send({
                email: "",
                password: ""
            })
            expect(response.statusCode).toBe(200)
        })
    })
})