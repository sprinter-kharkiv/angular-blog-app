import { Action } from '@ngrx/store';
import { PostModel } from "../models/post.model";

export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILED = 'GET_POST_FAILED';

export class GetEntities implements Action {
  readonly type = GET_POST;

  constructor() {
  }
}

export class GetEntitiesSuccess implements Action {
  readonly type = GET_POST_SUCCESS;

  constructor(public payload: PostModel) {
  }
}

export class GetEntitiesFailed implements Action {
  readonly type = GET_POST_FAILED;

  constructor(public payload: string) {
  }
}

export type Action = GetEntities | GetEntitiesSuccess | GetEntitiesFailed;
