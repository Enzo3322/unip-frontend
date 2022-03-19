import React, { useRef, useCallback, useState } from 'react';
import {
	FiLogIn,
	FiMail,
	FiUser,
	FiAlertTriangle,
	FiHome,
	FiUserCheck,
	FiPenTool,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';
import { Container, Content, AnimationContainer, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface SignInFormData {
	name: string;
	email: string;
	campus: string;
	coordinator: string;
	priority: string;
	description: string;
}

const Home: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const { addToast } = useToast();
	const history = useHistory();
	const [loading, setLoading] = useState(false);

	const handleSubmit = useCallback(
		async (data: SignInFormData) => {
			try {
				setLoading(true);
				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					name: Yup.string(),
					email: Yup.string(),
					campus: Yup.string().required('Campus obrigatório.'),
					coordinator: Yup.string().required('Coordenador obrigatório.'),
					priority: Yup.string().required('Prioridade obrigatório.'),
					description: Yup.string().required('Descrição obrigatória.'),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				await api.post('/claims', data).then((res: any) => {
					if (res.status === 201) {
						addToast({
							type: 'success',
							title: 'Reclamação cadastrada com sucesso!',
							description: 'Reclamação cadastrada com sucesso!',
						});
						history.push('/reclamacao');
					}
				});
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErrors(err);
					formRef.current?.setErrors(errors);

					return;
				}
			} finally {
				setLoading(false);
			}
		},
		[history, addToast]
	);

	return (
		<Container>
			<Background>
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
			</Background>

			<Content>
				<AnimationContainer>
					<img width={250} src={logo} alt="ADS UNIP SANTOS" />

					<Form ref={formRef} onSubmit={handleSubmit}>
						<Input name="name" icon={FiUser} type="text" placeholder="Nome" />
						<Input name="email" icon={FiMail} placeholder="E-mail" />
						<Input name="campus" icon={FiHome} placeholder="Campus" />
						<Input
							name="coordinator"
							icon={FiUserCheck}
							placeholder="Coordenador do curso"
						/>
						<Input
							name="priority"
							icon={FiAlertTriangle}
							placeholder="Prioridade"
						/>
						<Input
							name="description"
							icon={FiPenTool}
							placeholder="Descrição da reclamação"
						/>

						<Button loading={loading} type="submit">
							Enviar
						</Button>
					</Form>

					<Link to="/reclamacao">
						<FiLogIn />
						Portal de reclamações
					</Link>
				</AnimationContainer>
			</Content>
		</Container>
	);
};

export default Home;
