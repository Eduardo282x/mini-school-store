import { BaseResponse } from "../../interfaces/base-response.interface";

export interface ISnackbar {
    baseResponse: BaseResponse;
    open: boolean;
    close: (close: boolean) => void;
}