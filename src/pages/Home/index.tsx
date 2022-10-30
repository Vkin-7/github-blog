import { ProfileCard } from './components/ProfileCard';
import { SearchPosts } from './components/SearchPosts';
import { HomeContainer } from './styles';

export function Home() {
	return (
		<HomeContainer>
			<ProfileCard />
			<SearchPosts />
		</HomeContainer>
	);
}