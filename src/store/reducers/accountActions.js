export const SAVE_CREDENTIALS = 'SAVE_CREDENTIALS';
export const saveCredentials = (payload) => ({
    type: SAVE_CREDENTIALS,
    payload,
});

export const SIGN_OUT = 'SIGN_OUT';
export const removeInfo = () => ({
    type: SIGN_OUT,
});