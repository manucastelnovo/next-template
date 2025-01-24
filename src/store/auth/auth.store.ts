import { StateCreator, create } from 'zustand';
import type { AuthStatus } from "@/interfaces/auth-status.interfaces";
import { AuthService } from '@/services/auth.service';
// import { User } from "@/interfaces/user.interface";

export interface AuthState {
    status: AuthStatus;
    token?: string;
    // user?: User;

    loginUser: (email: string, password: string) => Promise<void>;
}

const storeApi: StateCreator<AuthState> = (set) => ({
    status: 'unauthorized',
    token: undefined,
    user: undefined,


    loginUser: async (email: string, password: string) => {
        try{
            // const {accessToken, ...user} = await AuthService.login(email, password);
            const {accessToken} = await AuthService.login(email, password);
            set({status: 'authorized', token: accessToken});

        }catch(error){
            set({status: 'unauthorized', token: undefined});
            console.error(error);
        }
    }
});

export const useAuthStore = create<AuthState>()(storeApi);