import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faChevronLeft, 
	faArrowUpRightFromSquare,
	faCalendarDay,
	faComment
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { 
	PostInfoCardContainer, 
	PostInfoCardFooter, 
	PostInfoCardHeader, 
	PostInfoCardTitle 
} from './styles';
import { Routes } from '@router/types';
import { useContextSelector } from 'use-context-selector';
import { GithubContext } from '@contexts/index';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';


export function PostInfoCard() {  
	const { selectedPost } = useContextSelector(GithubContext, context => {
		return {
			selectedPost: context.selectedPost
		};
	});

	const createdAtRelativeToNow = selectedPost && formatDistanceToNow(new Date(selectedPost.created_at),  {
		locale: ptBR,
		addSuffix: true,
	});

	return (
		<PostInfoCardContainer>
			{
				selectedPost
					? (
						<>
							<PostInfoCardHeader>
								<Link to={Routes.HOME}>
									<FontAwesomeIcon icon={faChevronLeft} />
									<span>VOLTAR</span>
								</Link>

								<a href={selectedPost.html_url} target='_blank' rel="noreferrer">
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									<span>VER NO GITHUB</span>
								</a>
							</PostInfoCardHeader>

							<PostInfoCardTitle>
								{selectedPost.title}
							</PostInfoCardTitle>

							<PostInfoCardFooter>
								<span>
									<FontAwesomeIcon icon={faGithub} />
									{selectedPost.user.login}
								</span>
				
								<span>
									<FontAwesomeIcon icon={faCalendarDay} />
									{createdAtRelativeToNow}
								</span>

								<span>
									<FontAwesomeIcon icon={faComment} />
									{selectedPost.comments} Comentários
								</span>
							</PostInfoCardFooter>
						</>
					)
					: (
						<></>
					)
			}
		</PostInfoCardContainer>
	);
}