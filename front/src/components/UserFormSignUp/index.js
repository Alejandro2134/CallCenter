import React, { useState } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Input, Button, Form, Div, Tittle, ContainerInfo, ContainerForm, P } from './styles';

export const UserFormSignUp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const correo = useInputValue('');
    const contraseña = useInputValue('');
    const nombre = useInputValue('');

    let urlencoded = new URLSearchParams();
    urlencoded.append("correo", correo.value);
    urlencoded.append("contraseña", contraseña.value);
    urlencoded.append("nombre", nombre.value);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const res = await fetch('http://localhost:4000/sesion/signup', {
                mode: 'cors',
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlencoded
            })

            const status = await res.json();
            console.log(status);
            setLoading(false);
            setError(null);

        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }

    return (
        <Div>
            <Form disabled={loading} onSubmit={handleSubmit}>
                <ContainerInfo>
                    <Tittle>Unete a la mejor red de Call Center!</Tittle>
                    {error && <P>Un error inesperado a ocurrido 😢, intentalo de nuevo</P>}
                </ContainerInfo>

                <ContainerForm>
                    <Input disabled={loading} type="email" placeholder="Email" {...correo}></Input>
                    <Input disabled={loading} type="password" placeholder="Contraseña" {...contraseña}></Input>
                    <Input disabled={loading} type="text" placeholder="Nombre" {...nombre}></Input>
                    <Button disabled={loading} type="submit">Registrarse</Button>
                </ContainerForm>
            </Form>
        </Div>
    )

}