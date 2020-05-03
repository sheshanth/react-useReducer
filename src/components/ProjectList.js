import React from "react";
import { useSelector } from "react-redux";

function ProjectListComponent() {
  const projectState = useSelector(state => state.ProjectReducer);

  const projectList = projectState.map(project => <div>{project.name}</div>);

  return <>{projectList}</>;
}

export default ProjectListComponent;
