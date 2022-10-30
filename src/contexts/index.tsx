import { useState, useEffect, useCallback } from 'react';
import { createContext } from 'use-context-selector';

import { api_github } from '@lib/axios/github';
import { 
	GithubContextType,
	GithubProviderProps, 
	GithubUser 
} from './types';

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({ children }: GithubProviderProps) {
	const [user, setUser] = useState<GithubUser>({} as GithubUser);

	const loadUser = useCallback(async () => {
		try {
			const response = await api_github.get('users/Vkin-7');

			setUser(response.data);
		} catch (error) {
			console.error(error);
		}
	}, []); 
    
	useEffect(() => {
		loadUser();
	}, []);
    
	return (
		<GithubContext.Provider
			value={{
				user,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
}