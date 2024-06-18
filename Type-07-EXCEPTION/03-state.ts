// 좀 더 세부적인 에러를 사용하고 싶을 때 state를 사용하는 게 좋다.

{
  type networkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | networkErrorState;

  class NetworkCliennt {
    tryConnect(): ResultState {
      throw new Error("no network");
    }
  }

  class UserService {
    constructor(private client: NetworkCliennt) {}

    login() {
      this.client.tryConnect();
      // login....
    }
  }

  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const client = new NetworkCliennt();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
