import { Injectable } from '@angular/core';

interface User {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  public database: Array<User> = [{ email: 'hm@gmail.com', password: 'uffizi' }];

  login(email: string, password: string): boolean {
    return !!this.database.find(
      (user) => user.email === email && user.password === password
    );
  }

  register(email: string, password: string) {
    this.database.push({ email, password });
  }
}
