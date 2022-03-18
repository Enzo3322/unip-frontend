import { useEffect, useState } from 'react';
import './styles.scss';

function Claims() {
	const [claims, setClaims] = useState(null);

	useEffect(() => {
		setClaims([
			{
				name: 'Enzo Spagnolli',
				email: 'enzo@gmail.com',
				campus: 'Campus de São Paulo',
				created: '2020-06-01',
				description: 'Ar condicionado parou de funcionar',
			},
			{
				name: 'Samuel Alves',
				email: 'samuel@gmail.com',
				campus: 'Campus Santos',
				created: '2020-06-01',
				description: 'Bebedouro parou de funcionar',
			},
			{
				name: 'Samuel Alves',
				email: 'samuel@gmail.com',
				campus: 'Campus Santos',
				created: '2020-06-01',
				description: 'Bebedouro parou de funcionar',
			},
			{
				name: 'Samuel Alves',
				email: 'samuel@gmail.com',
				campus: 'Campus Santos',
				created: '2020-06-01',
				description: 'Bebedouro parou de funcionar',
			},
			{
				name: 'Samuel Alves',
				email: 'samuel@gmail.com',
				campus: 'Campus Santos',
				created: '2020-06-01',
				description:
					'In reprehenderit mollit amet Lorem culpa aute. Dolore reprehenderit exercitation sit cillum elit commodo sint labore ea fugiat nulla elit est adipisicing. Sunt sint qui duis culpa non culpa consequat. Eu sit tempor ullamco ipsum veniam et deserunt.',
			},
		]);
	}, []);

	return (
		<div className="claim-container">
			<h1 className="title">Reclamações</h1>
			<div className="grid">
				{claims &&
					claims.map((claim, i) => {
						return (
							<div className="claim" key={i}>
								<p>Usuário: {claim.name}</p>
								<p>Email: {claim.email}</p>
								<p>Campus: {claim.campus}</p>
								<p>Data: {claim.created}</p>
								<p>Descrição: {claim.description}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Claims;
