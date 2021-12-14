class StubUserService {
  async login(id, password) {
    return { id: "Billy@naver.com", password: "12345" };
  }
}

module.exports = StubUserService;
