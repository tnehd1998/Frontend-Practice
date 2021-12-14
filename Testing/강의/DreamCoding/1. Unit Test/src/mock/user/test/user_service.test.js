const UserService = require("../user_service");
const UserClient = require("../user_client");
const StubUserService = require("./stub_user_service.js");

// My Solution

describe("UserService", () => {
  let userService;

  beforeEach(() => {
    userService = new UserService(new StubUserService());
  });

  it("should filter out only available users", async () => {
    const userInfo = await userService.login("Billy@naver.com", "12345");
    expect(userInfo).toEqual(true);
  });
});

// Answer

jest.mock("../user_client");

describe("UserService-Answer", () => {
  const login = jest.fn(async () => "success");
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });
  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("Billy@naver.com", "12345");
    expect(login).toHaveBeenCalledTimes(1);
  });

  it("should not call login() on UserClient again if already logged in", async () => {
    await userService.login("Billy@naver.com", "12345");
    await userService.login("Billy@naver.com", "12345");

    expect(login).toHaveBeenCalledTimes(1);
  });
});
