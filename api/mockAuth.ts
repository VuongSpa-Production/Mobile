import { authData } from "../data/type";
import * as mockAuthData from "../data/authData.json";

const generateToken = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tokenLength = 32;
    let token = '';

    for (let i = 0; i < tokenLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
    }

    return token;
};

const processLogin = async (user: authData): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            const foundUser = mockAuthData.mockAuthData.find((item: any) => item.email === user.email && item.password === user.password);
            if (foundUser) {
                const token = generateToken();
                resolve(token);
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1000);
    });
};

const processSignUp = async (user: authData): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            const foundUser = mockAuthData.mockAuthData.find((item: any) => item.email === user.email);
            if (foundUser) {
                reject(new Error('Email already exists'));
            } else {
                mockAuthData.mockAuthData.push({
                    username: 'random',
                    email: user.email,
                    password: user.password
                });
                const token = generateToken();
                resolve(token);
            }
        }, 1000);
    });
}

export { processLogin, processSignUp };