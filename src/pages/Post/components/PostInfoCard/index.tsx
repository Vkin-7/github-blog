import { Link, useParams } from 'react-router-dom';
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
import { useEffect, useState } from 'react';
import { Post } from '@contexts/types';

export function PostInfoCard() {
	const [post, setPost] = useState<Post>();
    
	const { posts } = useContextSelector(GithubContext, context => {
		return {
			posts: context.posts
		};
	});

	const { id } = useParams();

	useEffect(() => {
		if (posts.length > 0 && posts) {
			setPost(posts.find(post => `${post.number}` == id));
		}
	}, [posts]);

	return (
		<PostInfoCardContainer>
			{
				post
					? (
						<>
							<PostInfoCardHeader>
								<Link to={Routes.HOME}>
									<FontAwesomeIcon icon={faChevronLeft} />
									<span>VOLTAR</span>
								</Link>

								<a href={post.html_url} target='_blank' rel="noreferrer">
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									<span>VER NO GITHUB</span>
								</a>
							</PostInfoCardHeader>

							<PostInfoCardTitle>
								{post.title}
							</PostInfoCardTitle>

							<PostInfoCardFooter>
								<span>
									<FontAwesomeIcon icon={faGithub} />
									{post.user.login}
								</span>
				
								<span>
									<FontAwesomeIcon icon={faCalendarDay} />
						Há um dia
								</span>

								<span>
									<FontAwesomeIcon icon={faComment} />
									{post.comments} Comentários
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