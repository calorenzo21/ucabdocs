import React from 'react'
import logo from '../assets/img/logos.png'
const Register = () => {
    return (
        <div>
            <section class="bg-gray-50 min-h-screen flex items-center justify-center">
                <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div class="md:w-1/2 px-8 md:px-16">
                        <h2 class="font-bold text-2xl text-[#002D74]">Registro</h2>
                        <form action="" class="flex flex-col gap-4">
                            <input class="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Nombre Completo" />
                            <input class="p-2 mt- rounded-xl border" type="" name="email" placeholder="Email" />
                            <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Contraseña" />

                            <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Registrar</button>
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
