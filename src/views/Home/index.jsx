import { useState, useEffect } from 'react';
import './styles.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';

import campusData from './campus.json';

function Home() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [option, setOption] = useState('');
	const [coordinator, setCoordinator] = useState('');
	const [description, setDescription] = useState('');
	const [validated, setValidated] = useState(true);

	const campusMap = campusData.map((campus) => {
		return campus.campus;
	});

	const submitData = () => {
		if (name && email && option && coordinator && description) {
			setValidated(true);
		} else {
			setValidated(false);
		}
	};

	return (
		<section id="hero">
			<div className="left">
				<h1>Portal de reclamações não oficial da Unip</h1>
			</div>

			<div className="right">
				<div className="form-container">
					<TextField
						id="outlined-basic"
						label="Nome"
						required
						style={{ width: 300 }}
						variant="outlined"
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						id="outlined-basic"
						className="email"
						label="Email"
						style={{ width: 300 }}
						variant="outlined"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Autocomplete
						disablePortal
						className="search-campus"
						options={campusMap}
						required
						sx={{ width: 300 }}
						renderInput={(params) => <TextField {...params} label="Campus" />}
						onChange={(event) => setOption(event.target.innerText)}
					/>
					<TextField
						id="outlined-basic"
						label="Coordenador do curso"
						required
						style={{ width: '300px' }}
						variant="outlined"
						onChange={(e) => setCoordinator(e.target.value)}
					/>

					<TextareaAutosize
						maxRows={4}
						aria-label="maximum height"
						required
						placeholder="Descreva o problema"
						style={{
							width: '300px',
							marginTop: '20px',
							padding: '15px',
							borderRadius: '3px',
							maxWidth: '400px',
							maxHeight: '200px',
							outline: 0,
						}}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<Button
						className="submit"
						variant="contained"
						disableElevation
						size="large"
						onClick={() => {
							submitData();
						}}
					>
						Enviar
					</Button>
					{validated ? (
						''
					) : (
						<Alert
							variant="filled"
							severity="error"
							style={{
								marginTop: '30px',
								position: 'relative',
								paddingRight: '40px',
							}}
						>
							Preencha todos os campos
							<CloseIcon
								style={{
									right: '10px',
									position: 'absolute',
									top: '12px',
									cursor: 'pointer',
								}}
								onClick={() => {
									setValidated(true);
								}}
							/>
						</Alert>
					)}
				</div>
			</div>
		</section>
	);
}

export default Home;
