import { app, request, expect, BASE_URL } from "./testConfig";
import { testUser, testUserUpdate } from "../utils/testHelpers";
describe("Users", () => {
  describe("POST /api/v1/users/register", () => {
    it("should create user", async () => {
      try {
        /**create user */
        let { body } = await request(app)
          .post(`${BASE_URL}/users/register`)
          .set("Accept", "application/json")
          .send(testUser);

        /** Tests */
        expect(body.status).to.eql(201);
      } catch (error) {}
    });
  });

  describe("POST /api/v1/users/login", () => {
    it("should login registered user", async () => {
      try {
        /**create user */
        let { body } = await request(app)
          .post(`${BASE_URL}/users/login`)
          .set("Accept", "application/json")
          .send(testUser);

        /** Tests */
        expect(body.status).to.eql(200);
        expect(body).to.have.property("token");
        expect(body).to.have.property("message", "OK");
        expect(body.token).to.be.a("string");
      } catch (error) {}
    });
  });
});
