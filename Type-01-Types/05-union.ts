{
  /* Union Types: OR */

  type Direction = "left" | "right" | "up" | "down";
  function moves(direction: Direction) {
    console.log(direction);
  }
  moves("down"); // 'left' 'right' 'up' 'down' 중 하나만 사용할 수 있다.

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logge in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> body
  //fail -> reason
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
