import { useContextSelector } from 'use-context-selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faBuilding,
	faUserGroup,
	faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


import { 
	ProfileCardContainer, 
	ProfileContent, 
	ProfileFooter, 
	ProfileHeader, 
	ProfileImage 
} from './styles';
import { GithubContext } from '@contexts/index';

export function ProfileCard() {
	const { user } = useContextSelector(GithubContext, context => {
		return {
			user: context.user
		};
	});

	return (
		<ProfileCardContainer>
			<ProfileImage 
				src={user.avatar_url} 
				loading='lazy'
			/>
			<ProfileContent>
				<ProfileHeader>
					<h1>{user?.name}</h1>
					<a href={user.html_url} target='_blank' rel="noreferrer">
						<span>GITHUB</span> 
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</a>
				</ProfileHeader>

				<p>{user?.bio || 'Sem bio :('}</p>

				<ProfileFooter>
					<span>
						<FontAwesomeIcon icon={faGithub} />
						{user.login}
					</span>
					{user?.company && (
						<span>
							<FontAwesomeIcon icon={faBuilding} />
							{user.company}
						</span>
					)}
					<span>
						<FontAwesomeIcon icon={faUserGroup} />
						{`${user.followers} seguidores`}
					</span>
				</ProfileFooter>
			</ProfileContent>
		</ProfileCardContainer>
	);
}