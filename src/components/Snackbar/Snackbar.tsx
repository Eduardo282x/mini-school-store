import React, { FC, useEffect } from 'react'
import { ISnackbar } from './snackbar.data'

export const Snackbar: FC<ISnackbar> = ({ baseResponse, open, close }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            close(false);
        }, 1500);

        return () => clearTimeout(timer); // Limpia el timeout al desmontar
    }, [open, close]);

    return (
        <div className={`fixed bottom-0 left-0 right-0 mx-auto w-3/4 transition-transform duration-300 ease-out ${open ? 'transform -translate-y-4' : 'transform translate-y-full'}`}>
            <div className={`rounded-xl font-semibold px-4 py-2 ${baseResponse.success ? 'bg-green-800' : 'bg-red-700'} text-white`}>
                <p>{baseResponse.message}</p>
            </div>
        </div>
    )
}
