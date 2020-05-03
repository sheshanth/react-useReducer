import React, { useReducer } from "react";

import { ProjectReducer, projectState } from "../store/reducers/projectReduces";
import { createProject, deleteProject } from "../store/actions/projectActions";

function ProjectListComponent() {
  const [state, dispatch] = useReducer(ProjectReducer, projectState);

  const projectList = state.map(project => (
    <div key={project.author}>
      {project.name}
      <button onClick={() => dispatch(deleteProject(project))}>X</button>
    </div>
  ));

  return (
    <>
      {projectList}
      <button
        onClick={() =>
          dispatch(createProject({ name: "arturo", author: "lich" }))
        }
      >
        create project
      </button>
    </>
  );
}

export default ProjectListComponent;
