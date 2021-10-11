import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor( private apollo: Apollo) { }

  getList () {
    const payload: any = {
      query: gql`
      {
        TodoLists{
          id
          title
          content
          }
      }`,
      fetchPolicy: 'network-only'
    };
    return this.apollo.query<any>(payload);
  }
  createList(data) {
    const payload: any = {
      mutation: gql`
      mutation {
        create_todo: createTodo(input: {title:"${data.title}",content: "${data.content}", user: "${data.userName}"}){
          todo {
            id,
            title,
            content
          }
        }
      }`
    };
    return this.apollo.mutate<any>(payload);
  }
}
