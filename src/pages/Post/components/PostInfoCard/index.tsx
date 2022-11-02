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

export function PostInfoCard() {
	return (
		<PostInfoCardContainer>
			<PostInfoCardHeader>
				<Link to={Routes.HOME}>
					<FontAwesomeIcon icon={faChevronLeft} />
					<span>VOLTAR</span>
				</Link>

				<a href='#' target='_blank'>
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					<span>VER NO GITHUB</span>
				</a>
			</PostInfoCardHeader>

			<PostInfoCardTitle>
                Title
			</PostInfoCardTitle>

			<PostInfoCardFooter>
				<span>
					<FontAwesomeIcon icon={faGithub} />
					nick
				</span>
				
				<span>
					<FontAwesomeIcon icon={faCalendarDay} />
						Há um dia
				</span>
                
				<span>
					<FontAwesomeIcon icon={faComment} />
					7 Comentários
				</span>
			</PostInfoCardFooter>
		</PostInfoCardContainer>
	);
}