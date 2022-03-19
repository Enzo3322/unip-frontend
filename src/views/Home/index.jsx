import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import './styles.scss';

import campusData from './campus.json';

function Home() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [campus, setCampus] = useState('');
	const [coordinator, setCoordinator] = useState('');
	const [description, setDescription] = useState('');
	const [priority, setPriority] = useState('Baixa');
	const [validated, setValidated] = useState(true);

	const navigate = useNavigate();

	const campusMap = campusData.map((campus) => {
		return campus.campus;
	});

	const handleScale = (event) => {
		setPriority(event.target.value);
	};

	const submitData = () => {
		if (campus && coordinator && description && priority) {
			fetch('https://unip-back.herokuapp.com/claims', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					campus,
					priority,
					coordinator,
					description,
				}),
			})
				.then((response) => response.json())
				.then((res) => {
					console.log(res);
					if (res._id) {
						navigate('/reclamacao');
					}
				});
		} else {
			console.log({ campus, coordinator, description, priority });
			setValidated(false);
		}
	};

	return (
		<section id="hero">
			<nav>
				<img src="/logo.svg" alt="ADS Unip Santos" />
			</nav>
			<div className="left">
				<h1>Portal de reclamações não oficial da Unip.</h1>
				<p>
					Se você já presenciou ou está passando por problemas no campus, sejam
					eles de infraestrutura ou com docentes, esse espaço é dedicado para
					sua reclamação.
					<br />
					<br />
					<em>
						- <b>Nome</b> e <b>Email</b> são opicionais.
					</em>
				</p>
			</div>

			<div className="right">
				<div className="form-container">
					<TextField
						id="outlined-basic"
						label="Nome"
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
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Autocomplete
						disablePortal
						className="search-campus"
						options={campusMap}
						required
						sx={{ width: 300 }}
						renderInput={(params) => <TextField {...params} label="Campus" />}
						onChange={(event) => setCampus(event.target.innerText)}
					/>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						renderInput={(params) => <TextField {...params} label="Escala" />}
						value={priority}
						onChange={handleScale}
						style={{ marginBottom: '20px', width: 300 }}
					>
						<MenuItem value={'Baixa'}>Baixa</MenuItem>
						<MenuItem value={'Média'}>Média</MenuItem>
						<MenuItem value={'Alta'}>Alta</MenuItem>
					</Select>
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
