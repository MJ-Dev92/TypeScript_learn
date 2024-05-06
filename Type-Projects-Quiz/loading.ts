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

  type HoldingState = {
    state: "holding";
    response: {
      body: string;
    };
  };

  type ResourceLoadState =
    | LoadingState
    | SuccessState
    | FailState
    | HoldingState;

  function printLoginStates(state: ResourceLoadState): void {
    if (state.state === "loading") {
      console.log(`👀 ${state.state}...`);
    } else if (state.state === "success") {
      console.log(`😃 ${state.response.body}`);
    } else if (state.state === "fail") {
      console.log(`😱 ${state.reason}`);
    } else {
      throw new Error(`wrong staste: ${state.state}`);
    }
  }

  printLoginStates({ state: "loading" }); // 👀 loading...
  printLoginStates({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginStates({ state: "fail", reason: "no network" }); // 😱 no network
  printLoginStates({ state: "holding", response: { body: "holding" } }); // 😱 holding <- if문 작성을 하지 않아 Error가 뜸
}
