import { ProjectState } from "../reducers/projectReduces";

export function CREATE_PROJECT(payload: ProjectState) {
  return {
    type: "CREATE_PROJECT",
    payload
  };
}

export function DELETE_PROJECT(payload: { name: string }) {
  return {
    type: "DELETE_PROJECT",
    payload
  };
}
