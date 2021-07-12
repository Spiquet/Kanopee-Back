import express, { Router } from 'express';
import getConnection, { closeConnection } from '../src/loaders/typeorm';
import request from 'supertest'
import { Connection } from 'typeorm';


describe("POST /users", () => {

    const authRouter: Router = express.Router();
    let connection: Connection;

    beforeAll(async () => {
        connection = await getConnection();
    });

    beforeEach(async () => {
        // Drop everything and recreate db
        await connection.synchronize(true);
    });

    afterAll(async () => {
        await closeConnection();
    });
    describe("given a username and password", () => {
        test("should respond with a 200 status code", async () => {
            const response = await request(authRouter).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.statusCode).toBe(200)
        })
        xit("should specify json in the content type header", async () => {
            const response = await request(authRouter).post("/auth/signup").send({
                username: "username",
                password: "password"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        xit("response has userId", async () => {
            const response = await request(authRouter).post("/auth/signup").send({
                username: "username",
                password: "password"
            })
            expect(response.body.userId).toBeDefined()
        })
    })

    describe("when the username and password is missing", () => {
        test("should respond with a status code of 400", async () => {
            const bodyData = [
                { username: "username" },
                { password: "password" },
                {}
            ]
            for (const body of bodyData) {
                const response = await request(authRouter).post("/auth/signup").send(body)
                expect(response.statusCode).toBe(400)
            }
        })
    })

})