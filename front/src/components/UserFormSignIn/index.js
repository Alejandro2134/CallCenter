import React, { useContext, useState } from 'react';

import { useInputValue } from '../../hooks/useInputValue';
import { Context } from '../../Context';

import { Input, Button, Form, Div, Tittle, Select, Option, P } from './styles';

export const UserFormSignIn = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { activateAuth } = useContext(Context);

    const correo = useInputValue('');
    const contraseña = useInputValue('');
    const tipo = useInputValue('');

    let urlencoded = new URLSearchParams();
    urlencoded.append("correo", correo.value);
    urlencoded.append("contraseña", contraseña.value);
    urlencoded.append("tipo", tipo.value);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const res = await fetch('http://localhost:4000/sesion/signin', {
                mode: 'cors',
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlencoded
            })

            const { id } = await res.json();
            activateAuth(id.toString());

            setLoading(false);

        } catch (err) {

            setError(err);
            setLoading(false);
        }
    }

    return (
        <Div>
            <Form disabled={loading} onSubmit={handleSubmit}>
                <Tittle>Inicia sesión!</Tittle>
                <Input disabled={loading} type="email" placeholder="Correo" {...correo}></Input>
                <Input disabled={loading} type="password" placeholder="Contraseña" {...contraseña}></Input>
                <Select disabled={loading} value="0" {...tipo} >
                    <Option value="0" hidden>Escoge tu tipo de usuario!</Option>
                    <Option>usuario</Option>
                    <Option>empleado</Option>
                </Select>
                {error && <P>Un error inesperado a ocurrido 😢, intentalo de nuevo</P> }
                <Button disabled={loading} type="submit">Iniciar sesión</Button>
            </Form>
        </Div>
    )

}