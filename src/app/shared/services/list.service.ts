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
}
