import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	// Cek apakah data singleProjectData dan ProjectImages ada
	if (!singleProjectData || !singleProjectData.ProjectImages) {
		return null; // Atau bisa tampilkan loading indicator jika diperlukan
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;