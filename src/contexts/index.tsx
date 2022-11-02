import { useState, useEffect, useCallback } from 'react';
import { createContext } from 'use-context-selector';

import { api_github } from '@lib/axios/github';
import { 
	GithubContextType,
	GithubProviderProps, 
	GithubUser, 
	Post
} from './types';

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({ children }: GithubProviderProps) {
	const [user, setUser] = useState<GithubUser>({} as GithubUser);
	const [posts, setPosts] = useState<Post[]>([] as Post[]);
	const [selectedPosts, setSelectedPost] = useState<number>();

	const loadUser = useCallback(async () => {
		try {
			const response = await api_github.get('users/Vkin-7');

			setUser(response.data);

			await loadPosts('', response.data.login);
		} catch (error) {
			console.error(error);
		}
	}, []);

    
	useEffect(() => {
		loadUser();
	}, []);

	const loadPosts = useCallback(async (q = '', login = user.login) => {
		try {
			if (user) {
				const response = await api_github.get('search/issues', {
					params: {
						q: `${q}repo:${login}/github-blog`,
					}
				});
	
				setPosts(response.data.items);
			}


		} catch (error) {
			console.error(error);
		}
	}, [user]);

	const selectPost = useCallback((id: number) => {
		setSelectedPost(id);
	}, []);
    
	return (
		<GithubContext.Provider
			value={{
				user,
				posts,
				selectedPosts,
				loadPosts,
				selectPost,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
}