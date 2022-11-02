import { 
	PostCardContainer, 
	PostCardContent, 
	PostCardHeader 
} from './styles';
import { PostCardProps } from './types';

export function PostCard({ post, ...rest }: PostCardProps) {
	return (
		<PostCardContainer {...rest}>
			<PostCardHeader>
				<h3>{post.title}</h3>
				<span>Há 1 dia</span>
			</PostCardHeader>

			<PostCardContent>
				{post.body}
			</PostCardContent>
		</PostCardContainer>
	);
}