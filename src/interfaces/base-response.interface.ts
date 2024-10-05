/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BaseResponse {
    success:    boolean;
    message:    string;
    statusCode: number;
}

export interface BadResponse {
    message:    string;
    error:      string;
    statusCode: number;
}


export interface ResponseLogin extends BaseResponse {
    userData:   any;
}

// export interface UserData {
//     id:       number;
//     name:     string;
//     lastname: string;
//     username: string;
//     email:    string;
//     age:      string;
//     rolId:    number;
//     roles:    typeRoles;
// }

// export type typeRoles = 'Profesor' | 'Administrador' | 'Estudiante';