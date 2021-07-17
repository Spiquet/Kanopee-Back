import express, { Application, Router } from 'express';
import getConnection, { closeConnection } from '../../src/loaders/typeorm';
import request from 'supertest'
import { Connection } from 'typeorm';
import * as app from "../loaders/express"

describe("POST /users", () => {
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
    describe("create a User", () => {
        const authRouter: Router = express.Router();

        it("should respond with a 200 status code", async () => {
            const response = await request(app).post("/auth/signup").send({
                firstName: "username",
                lastName: "username",
                birth_date: "17/04/1991",
                home: "2",
                password: "password",
                tel: "0298765434",
                email: "simon@yahoo.fr"
            })
            expect(response.statusCode).toBe(200)
        })

    //     test("should specify json in the content type header", async () => {
    //         const response = await request(app).post("/auth/signup").send({
    //             firstName: "username",
    //             lastName: "username",
    //             birth_date: "17/04/1991",
    //             home: "2",
    //             password: "password",
    //             tel: "0298765434",
    //             email: "simon@yahoo.fr"
    //         })
    //         expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    //     })

    // })

    // describe("when the user already exists ", () => {
    //     test("should respond with a status code of 409", async () => {
    //         const response = await request(app).post("/auth/signup").send({
    //             firstName: "username",
    //             lastName: "username",
    //             birth_date: "17/04/1991",
    //             home: "2",
    //             password: "password",
    //             tel: "0298765434",
    //             email: "simon@yahoo.fr"

    //         })
    //         expect(response.statusCode).toBe(409)
    //     })
    // })

    // describe("when the username and password is missing", () => {
    //     test("should respond with a status code of 400", async () => {
    //         const bodyData = [
    //             { username: "username" },
    //             { password: "password" },
    //             {}
    //         ]
    //         for (const body of bodyData) {
    //             const response = await request(app).post("/auth/signup").send(body)
    //             expect(response.statusCode).toBe(400)
    //         }
    //     })
    })
})