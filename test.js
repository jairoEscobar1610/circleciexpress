const assert = require("assert");
const httpMocks = require("node-mocks-http");
const exampleRouteHandler = require("./example-router");
describe("Example Test 1", () => {
  it("should return 'Goodbye Earthling!' for GET /example", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/example"
    });
    const mockResponse = httpMocks.createResponse();
    exampleRouteHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    const expectedResponseBody = "Goodbye Earthling!";
    assert(actualResponseBody, expectedResponseBody);
  });
  it("should not return an empty string for GET /example", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/example"
    });
    const mockResponse = httpMocks.createResponse();
    exampleRouteHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    const notExpectedResponseBody = "";
    assert.notEqual(actualResponseBody, notExpectedResponseBody);
  });
});
describe("Root route Tests", () => {
  it("should return 'Hello Worlds!' for GET /", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/"
    });
    const mockResponse = httpMocks.createResponse();
    exampleRouteHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    const expectedResponseBody = "Hello Worlds!";
    assert(actualResponseBody, expectedResponseBody);
  });
  it("should not return an empty string for GET /", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/"
    });
    const mockResponse = httpMocks.createResponse();
    exampleRouteHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    const notExpectedResponseBody = "";
    assert.notEqual(actualResponseBody, notExpectedResponseBody);
  });
});