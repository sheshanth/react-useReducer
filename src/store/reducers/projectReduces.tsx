export interface ProjectState {
  name: string;
  description?: string;
  author: string;
}

const projectState: Array<ProjectState> = [
  {
    name: "sheshanth",
    author: "alpha"
  }
];

export function ProjectReducer(
  state = projectState,
  action
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
}
