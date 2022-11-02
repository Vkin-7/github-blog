import { Routes } from '@router/types';
import { PostCard } from '../PostCard';
import { PostListContainer } from './styles';
import { PostListProps } from './types';

export function PostList ({ posts }: PostListProps) {
	return (
		<PostListContainer>
			{posts.map(post => (
				<PostCard 
					key={post.id} 
					post={post} 
					to={`${Routes.POST}/${post.number}`} 
				/>
			))}
		</PostListContainer>
	);
}