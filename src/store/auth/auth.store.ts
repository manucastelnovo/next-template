import { StateCreator, create } from 'zustand';
import type { AuthStatus } from "@/interfaces/auth-status.interfaces";
import { User } from "@/interfaces/user.interface";

export interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
}

const storeApi: StateCreator<AuthState> = (set) => ({
    status: 'unauthorized',
    token: undefined,
    user: undefined,
});