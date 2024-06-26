/**
 * validateEmail.ts
 * Copyright (c) 2024 CLB DevTeam.
 * Licensed under the MIT License.
 */


/**
 * validate email
 * @param email 
 * @returns True if email is valid and false otherwise.
 */
export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};