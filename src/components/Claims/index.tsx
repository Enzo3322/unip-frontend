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
							<p>
								<b>Id:</b> {e._id}
							</p>
							<p>
								<b>Time:</b> {new Date(e.created_at).toLocaleString('pt')}
							</p>
							<p>
								<b>Campus:</b> {e.campus}
							</p>
							<p>
								<b>Coordenador:</b> {e.coordinator}
							</p>
							<p>
								<b>Prioridade:</b> {e.priority}
							</p>
							<p>
								<b>Descrição:</b> {e.description}
							</p>
						</div>
					);
				})}
			</Box>
		)}
	</Container>
);

export default ClaimsGrid;
