// import { useState, createContext } from 'react';
// import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

// const SingleProjectContext = createContext();

// export const SingleProjectProvider = ({ children }) => {
// 	const [singleProjectData, setSingleProjectData] = useState(
// 		singleProjectDataJson
// 	);

// 	return (
// 		<SingleProjectContext.Provider
// 			value={{ singleProjectData, setSingleProjectData }}
// 		>
// 			{children}
// 		</SingleProjectContext.Provider>
// 	);
// };

// export default SingleProjectContext;

// SingleProjectProvider.js
import { createContext, useContext, useState, useEffect } from 'react';
import { singleProjectData } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ projectId, children }) => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
	// Pastikan perbandingan menggunakan tipe data yang sama
	const project = singleProjectData.find(
	  (project) => parseInt(project.id) === parseInt(projectId)
	);
	console.log('project ' + project.id);
	setProjectData(project || {});
  }, [projectId]);
  

  return (
    <SingleProjectContext.Provider value={{ singleProjectData: projectData }}>
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
