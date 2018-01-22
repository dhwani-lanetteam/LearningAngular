

export class AuthService {
  loggedIn = false;

  isAuthenticated(){
    console.log("isAuthenticated called");
  }

  login(){
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
