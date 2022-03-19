import React, { ButtonHTMLAttributes } from 'react';
import { Container, Box } from './styles';

type ClaimProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	loading?: boolean;
	data: Array<any>;
};

const ClaimsGrid: React.FC<ClaimProps> = ({ data, loading }) => (
	<Container>
		{loading ? (
			'Carregando...'
		) : (
			<Box>
				{data.map((e, i) => {
					return (
						<div key={i}>
							<p>Id: {e._id}</p>
							<p>time: {e.created_at}</p>
							<p>Campus: {e.campus}</p>
							<p>Prioridade: {e.priority}</p>
							<p>Coordenador: {e.coordinator}</p>
							<p>Prioridade: {e.priority}</p>
							<p>Descrição: {e.description}</p>
						</div>
					);
				})}
			</Box>
		)}
	</Container>
);

export default ClaimsGrid;
