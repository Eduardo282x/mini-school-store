import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultValues, loginValidationSchame, UserLogin } from "./login.data";
import { useForm } from "react-hook-form";
import { BaseResponse, ResponseLogin } from "../../../interfaces/base-response.interface";
import { postDataApi } from "../../../Backend/BaseAPI";
import { zodResolver } from "@hookform/resolvers/zod";
import { Snackbar } from "../../../components/Snackbar/Snackbar";

export const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<BaseResponse>({} as BaseResponse);

    const { register, handleSubmit } = useForm({
        defaultValues,
        resolver: zodResolver(loginValidationSchame)
    });

    const onSubmit = (data: UserLogin) => {
        console.log(data);

        const goodResponse: BaseResponse = {
            message: 'Usuario no encontrado.',
            success: true,
            statusCode: 200
        }
        setMessage(goodResponse);
        setOpen(true);

        // postDataApi('/auth/login', data).then((response: ResponseLogin) => {
        //     setOpen(true);
        //     if (response.success) {
        //         setMessage(response);
        //         localStorage.setItem('token', JSON.stringify(response.userData))
        //         setTimeout(() => {
        //             navigate('/home');
        //         }, 1500);
        //     }
        // }).catch(err => {
        //     setMessage(err)
        // })
    };

    return (
        <div className='flex items-center justify-center w-[100vw] h-[100vh]'>

            <div className="rounded-2xl w-full h-full flex items-center md:justify-end justify-center py-8">
                <div className="md:w-[40%] w-full mx-2">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-5">
                        {/* <h1 className='text-[2rem] font-bold text-white'>Jorge Washington</h1> */}
                        <div className="imgSchool"></div>
                        <div className="m-4 flex flex-col md:w-full w-[90%]">
                            <label className=' text-white ml-1'>Nombre de usuario</label>
                            <input type="text" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none"  {...register('username')} />
                        </div>
                        <div className="m-4 flex flex-col md:w-full w-[90%]">
                            <label className=' text-white ml-1'>Contraseña</label>
                            <div className="flex items-center justify-between bg-gray-100 rounded-md px-2">
                                <input type={showPassword ? 'text' : 'password'} className=" bg-transparent w-[80%] h-12 text-black outline-none"  {...register('password')} />
                                <span className="material-icons-outlined cursor-pointer text-black mx-2" onClick={() => setShowPassword((show) => !show)}>{showPassword ? 'visibility' : 'visibility_off'}</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-5">
                            <button
                                className='text-white bg-blue-500 hover:bg-blue-600 rounded-md px-8 py-3 text-sm font-bold'
                                type='submit'
                            >Iniciar sesión</button>
                        </div>
                    </form>
                </div>
            </div>


            <Snackbar open={open} close={setOpen} baseResponse={message}></Snackbar>
        </div>
    )
}
