import React, { useState, createContext, useEffect } from 'react';

export const authContext = createContext<any>(undefined);

const AuthProvider = (props: any) => {
	const [isAuthenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		console.log({ isAuthenticated });
	}, [isAuthenticated]);

	let value = {
		isAuthenticated,
		setAuthenticated,
	};

	return (
		<authContext.Provider value={value}>{props.children}</authContext.Provider>
	);
};

export default AuthProvider;
