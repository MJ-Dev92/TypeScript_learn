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
  function printLoginStates(state: ResourceLoadState) {
    if (state.state === "loading") {
      console.log(`👀 ${state.state}...`);
    } else if (state.state === "success") {
      console.log(`😃 ${state.response.body}`);
    } else if (state.state === "fail") {
      console.log(`😱 ${state.reason}`);
    } else {
      throw new Error(`wrong staste: ${state}`);
    }
  }

  printLoginStates({ state: "loading" }); // 👀 loading...
  printLoginStates({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginStates({ state: "fail", reason: "no network" }); // 😱 no network
}
