import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	// Cek apakah data singleProjectData dan RelatedProject ada
	if (!singleProjectData || !singleProjectData.RelatedProject) {
		return null; // Atau tampilkan loading indicator jika diperlukan
	}

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{singleProjectData.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{singleProjectData.RelatedProject.Projects.map((project) => (
					<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, delay: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.7,
						delay: 0.15,
					}}
				>
					<Link to={`/projects/single-project/${project.id}`} key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer hover:shadow-lg"
							alt={project.title}
						/>
					</Link>
				</motion.div>
				))}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
