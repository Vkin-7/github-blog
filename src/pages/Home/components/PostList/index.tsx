import { PostCard } from '../PostCard';
import { PostListContainer } from './styles';

export function PostList () {
	return (
		<PostListContainer>
			{[0, 1, 2, 3].map(post => (
				<PostCard key={post} />
			))}
		</PostListContainer>
	);
}