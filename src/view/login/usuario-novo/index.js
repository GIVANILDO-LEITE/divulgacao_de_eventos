import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

import './usuario-novo.css';

function NovoUsuario() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar() {
        setCarregando(1)
        setMsgTipo(null);

        if(!email || !senha){
            setMsgTipo('erro')
            setMsg('Você precisa informar o email e senha para fazer o cadastro!')
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso')
        }).catch( erro => {
            setCarregando(0);
            setMsgTipo('erro')
            if ('Password should be at least 6 characters'){
                setMsg('A senha deve ter pelo menos 6 caracteres!');
            }
            if ('The email address is already in use by another account!'){
                 setMsg('O endereço de e-mail já está sendo usado por outra conta!')
             }
            if ('The email address is badly formatted!'){
                setMsg('O endereço de e-mail está formatado incorretamente!'); 
            } else {
                setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
            }

        })
   
    }

    return (
        <div className='form-cadastro'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='h3 mb-3 text-black font-weight-bold'>Cadastro</h1>

                <input onChange={(e) => setEmail(e.target.value) } type='email' className='form-control my-2' placeholder='Email' />
                <input onChange={(e) => setSenha(e.target.value) } type='password' className='form-control my-2' placeholder='Senha' />

                <button onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro w-100'>Cadastrar</button>

                <div className='msg-login text-black text-center my-5'>
                    {msgTipo === 'sucesso' && <span><strong>WoW!</strong>Usuário cadastrado com sucesso! &#128526;</span>}
                    {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg} &#128532;</span>}
            </div>

            </form>
        </div>
    )
}

export default NovoUsuario;