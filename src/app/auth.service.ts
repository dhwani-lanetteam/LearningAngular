
export class AuthService {
  loggedIn = false;

  isAuthenticated(){
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      },800); //-- after this time it will throw user to home page
    });

    return promise;
  }

  login(){
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
