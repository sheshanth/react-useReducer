/* export interface ProjectState {
  name: string;
  description?: string;
  author: string;
}

export const projectState: Array<ProjectState> = [
  {
    name: "sheshanth",
    author: "alpha"
  }
];

export function ProjectReducer(
  state = projectState,
  action: { type: any; payload: { name: string; author: any } }
): Array<ProjectState> {
  switch (action.type) {
    case "CREATE_PROJECT":
      return [
        ...state,
        {
          name: action.payload.name,
          author: action.payload.author
        }
      ];

    case "DELETE_PROJECT":
      return state.filter(project => project.name !== action.payload.name);

    default:
      return state;
  }
} */

import { createReducer } from "@reduxjs/toolkit";
import { createProject, deleteProject } from "../actions/projectActions";

export const projectState = [
  {
    name: "sheshanth",
    author: "alpha"
  }
];

export const ProjectReducer = createReducer(projectState, {
  [createProject]: (state, action) => [
    ...state,
    {
      name: action.payload.name,
      author: action.payload.author,
      description: action.payload.description
    }
  ],
  [deleteProject]: (state, action) => console.log(state)
  // return state.map(project => project.name !== action.paylaod.name)
});
