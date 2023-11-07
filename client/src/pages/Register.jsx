import React, { useContext, useState } from 'react'
import logo from '../assets/img/logos.png'
import { AuthContext } from '../context/authContext'

const Register = () => {
    
    const [ form, setForm ] = useState({
        email: '',
        password: '',
        username: ''
    })

    const { register } = useContext(AuthContext)

    const handleChange = ({ target }) => {
        
        const { name, value } = target

        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit = async ( ev ) => {
        ev.preventDefault()
        
        const ok = await register( form.username, form.email, form.password )
    }

    const checkFormFields = () => {
        return ( form.email.length > 0 && form.password.length > 0 && form.username.length > 0) ? true : false
    }
    
    return (
        <div>
            <section class="bg-gray-50 min-h-screen flex items-center justify-center">
                <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div class="md:w-1/2 px-8 md:px-16">
                        <h2 class="font-bold text-2xl text-[#002D74]">Registro</h2>
                        <form action="" class="flex flex-col gap-4" onSubmit={ onSubmit }>
                            <input class="p-2 mt-8 rounded-xl border" type="" name="username" placeholder="Nombre de Usuario" 
                                    value={ form.username } 
                                    onChange={ handleChange }
                            />
                            <input class="p-2 mt- rounded-xl border" type="email" name="email" placeholder="Email" 
                                    value={ form.email }
                                    onChange={ handleChange }
                            />
                            <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Contraseña"
                                    value={ form.password }
                                    onChange={ handleChange }
                             />

                            <button 
                                class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
                                type='submit'
                                disabled={ !checkFormFields() }
                            >Registrar</button>
                        </form>
                    </div>
                    <div class="md:block hidden w-1/2">
                        <img class="rounded-2xl" src={logo} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register
