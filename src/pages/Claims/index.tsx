import React, { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import ClaimsGrid from '../../components/Claims';
import api from '../../services/api';

const Claims: React.FC = () => {
	const [claimRes, setClaim] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		api.get('/claims').then((response) => {
			setClaim(response.data);
			setLoading(false);
		});
	}, []);

	return (
		<Container>
			<Content>
				<img width={200} src={logo} alt="ADS UNIP SANTOS" />
				<ClaimsGrid data={claimRes} loading={loading} />
			</Content>
		</Container>
	);
};

export default Claims;
