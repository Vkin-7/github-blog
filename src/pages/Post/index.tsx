import { GithubContext } from '@contexts/index';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';

import { PostInfoCard } from './components/PostInfoCard';
import { PostBody, PostContainer } from './styles';

export function Post() {
	const { selectedPost, selectPost } = useContextSelector(GithubContext, context => {
		return {
			selectedPost: context.selectedPost,
			selectPost: context.selectPost,
		};
	});

	const { id } = useParams();

	useEffect(() => {
		if (id) {
			selectPost(+id);
		}
	}, []);
	
	return (
		<PostContainer>
			<PostInfoCard />

			<PostBody>
				{selectedPost?.body || ''}
			</PostBody>
		</PostContainer>
	);
}