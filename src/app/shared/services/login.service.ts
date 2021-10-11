import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private apollo: Apollo) { }
  
  login(data) {
    const payload: any = {
      mutation: gql`
      mutation {
        tokenAuth(username: "${data.username}", password: "${data.password}") {
          success,
          errors,
          token,
          user {
            id,
            username,
          }
        }
      }`
    };
    return this.apollo.mutate<any>(payload);
  }
  register(data) {
    const payload: any = {
      mutation: gql`
      mutation {
        register(
          email: "${data.email}",
          username: "${data.username}",
          password1: "${data.password}",
          password2: "${data.password}",
        ) {
          success,
          errors,
          token
        }
      }`
    };
    return this.apollo.mutate<any>(payload);
  }
}
