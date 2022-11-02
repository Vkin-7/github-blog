import { GithubContext } from '@contexts/index';
import { useEffect } from 'react';
import { useContextSelector } from 'use-context-selector';
import { PostList } from './components/PostList';
import { ProfileCard } from './components/ProfileCard';
import { SearchPosts } from './components/SearchPosts';
import { HomeContainer } from './styles';

export function Home() {
	const { posts, loadPosts } = useContextSelector(GithubContext, context => {
		return {
			posts: context.posts,
			loadPosts: context.loadPosts
		};
	});

	useEffect(() => {
		loadPosts();
	}, []);

	return (
		<HomeContainer>
			<ProfileCard />
			
			<SearchPosts />
			<PostList posts={posts} />
		</HomeContainer>
	);
}