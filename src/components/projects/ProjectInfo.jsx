import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	// Jika `singleProjectData` belum siap atau tidak ada data, tampilkan pesan loading atau error
	if (!singleProjectData || !singleProjectData.ProjectInfo) {
		return <div>Loading project information...</div>;
	  }

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{singleProjectData.ProjectInfo.OverviewHeading}
					</p>
					<ul className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.OverviewDetails}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.GoalHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.GoalDetails}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				<p className="font-general-regular mb-5 text-primary-dark dark:text-ternary-light">
					{singleProjectData.ProjectInfo.ProjectDetails.description}
				</p>
				<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
					{singleProjectData?.ProjectInfo?.ProjectDetails?.feature?.map((details) => (
						<li
							key={details.id}
							className="font-general-regular mb-2 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.title + ": " + details.details}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProjectInfo;