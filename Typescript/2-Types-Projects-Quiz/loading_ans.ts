{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState_ans(input: ResourceLoadState) {
    switch (input.state) {
      case "loading":
        console.log(`👀 loading...`);
        break;
      case "success":
        console.log(`😃 ${input.response.body}`);
        break;
      case "fail":
        console.log(`😱 ${input.reason}`);
        break;
      default:
        throw new Error(`Unknown Error : ${input}`);
    }
  }

  printLoginState_ans({ state: "loading" }); // 👀 loading...
  printLoginState_ans({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState_ans({ state: "fail", reason: "no network" }); // 😱 no network
}
