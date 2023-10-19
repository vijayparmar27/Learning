import { Request, Response, NextFunction } from "express";
import { ValidationChain, validationResult } from "express-validator";
import { ERROR_MESSAGES, STATUS_CODE } from "../constants";

export const validateReq = (validations: ValidationChain[]) => {
    return async (
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<void> => {
        console.log(`=====>> req.body ::  `, request.body);
        await Promise.all(validations.map((validation) => validation.run(request)));

        const errors = validationResult(request);
        if (errors.isEmpty()) {
            return next();
        }
        console.log(`Error in validation: ${errors.array()[0].msg}`);

        response.status(STATUS_CODE.BAD_REQUEST).json({
            message : errors.array()[0].msg,
            status: ERROR_MESSAGES.ERROR,
            statusCode: STATUS_CODE.BAD_REQUEST,
            success: false
        });
    };
};