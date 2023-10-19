export interface ErrorHttpException {
    status?: number;
    message?: string;
}

export interface SuccessHttpException {
    status?: number;
    message?: string;
    data: any;
}