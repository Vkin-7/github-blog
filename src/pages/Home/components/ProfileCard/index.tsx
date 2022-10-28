import { 
	ProfileCardContainer, 
	ProfileContent, 
	ProfileFooter, 
	ProfileHeader, 
	ProfileImage 
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faBuilding,
	faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function ProfileCard() {
	return (
		<ProfileCardContainer>
			<ProfileImage 
				src="https://source.unsplash.com/random/?city,night"  
				loading='lazy'
			/>
			<ProfileContent>
				<ProfileHeader>
					<h1>Victor Hugo</h1>
					<a href='#'>GITHUB</a>
				</ProfileHeader>

				<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</p>

				<ProfileFooter>
					<span>
						<FontAwesomeIcon icon={faGithub} />
                        nick
					</span>
					<span>
						<FontAwesomeIcon icon={faBuilding} />
                        work
					</span>
					<span>
						<FontAwesomeIcon icon={faUserGroup} />
                        followers
					</span>
				</ProfileFooter>
			</ProfileContent>
		</ProfileCardContainer>
	);
}