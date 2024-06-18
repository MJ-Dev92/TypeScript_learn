// catch에 잡힌 에러는 any타입이기 때문에 타입에 대한 정보가 사라진다.
// 그렇기 때문에 최대한 예상하지 못한곳에서 에러가 발생하는 상황에 사용하는 것이 좋다.

class TimeoutError extends Error {}
class OfflineError extends Error {}

class NetworkCliennt {
  tryConnect(): void {
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
