import { 
	ProfileCardContainer, 
	ProfileContent, 
	ProfileHeader, 
	ProfileImage 
} from './styles';

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

				<footer>
					<span>nick</span>
					<span>work</span>
					<span>followers</span>
				</footer>
			</ProfileContent>
		</ProfileCardContainer>
	);
}