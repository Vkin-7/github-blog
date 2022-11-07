import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { 
	PostCardContainer, 
	PostCardContent, 
	PostCardHeader 
} from './styles';
import { PostCardProps } from './types';

export function PostCard({ post, ...rest }: PostCardProps) {
	const createdAtRelativeToNow = formatDistanceToNow(new Date(post.created_at),  {
		locale: ptBR,
		addSuffix: true,
	});
	
	return (
		<PostCardContainer {...rest}>
			<PostCardHeader>
				<h3>{post.title}</h3>
				<span>{createdAtRelativeToNow}</span>
			</PostCardHeader>

			<PostCardContent>
				{post.body}
			</PostCardContent>
		</PostCardContainer>
	);
}