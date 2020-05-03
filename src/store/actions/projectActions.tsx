/* import { ProjectState } from "../reducers/projectReduces";

export function CREATE_PROJECT(payload: ProjectState) {
  return {
    type: "CREATE_PROJECT",
    payload
  };
}

export function DELETE_PROJECT(payload: ProjectState) {
  return {
    type: "DELETE_PROJECT",
    payload
  };
}
 */

import { createAction } from "@reduxjs/toolkit";

export const createProject = createAction("CREATE_PROJECT");
export const deleteProject = createAction("DELETE_PROJECT");
