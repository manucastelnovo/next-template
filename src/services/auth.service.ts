import { AxiosError } from "axios";
import { nestApi } from "./http.service";

export interface LoginResponse {
    accessToken: string;
}


export class AuthService {
    static async login(email:string, password:string) : Promise<LoginResponse> {

        try {
            const response = await nestApi.post('/auth/login', { email, password });
            return response.data;
            
        } catch (error) {
            if ( error instanceof AxiosError){
                console.log(error.response?.data);
                throw new Error(error.response?.data.message);
            }
            throw new Error('Failed to login');
            
        }
        const response = await nestApi.post('/auth/login', { email, password });
        return response.data;
    }
}