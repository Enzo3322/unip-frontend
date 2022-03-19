import { useEffect, useState } from 'react';
import './styles.scss';

function Claims() {
	const [claims, setClaims] = useState(null);

	useEffect(() => {
		fetch('https://unip-back.herokuapp.com/claims', {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				setClaims(res.reverse());
			});
	}, []);

	return (
		<div className="claim-container">
			<h1 className="title">Reclamações</h1>
			<div className="grid">
				{claims &&
					claims.map((claim, i) => {
						return (
							<div className="claim" key={i}>
								<p>Referencia: {claim._id}</p>
								<p>Usuário: {claim.name}</p>
								<p>Email: {claim.email}</p>
								<p>Campus: {claim.campus}</p>
								<p>Prioridade: {claim.priority}</p>
								<p>Descrição: {claim.description}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Claims;
