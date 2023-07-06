import { setCookie } from "cookies-next";

export const cookieSaveName = (value) => {
    setCookie('name', value);
};

export const cookieSavePresence = (value) => {
    setCookie('presence', value);
};

export const cookieSaveSausages = (value) => {
    setCookie('sausages', value);
};

export const cookieSaveApproach = (value) => {
    setCookie('approach', value);
};

export const cookieSaveAccomodation = (value) => {
    setCookie('accomodation', value);
};

export const cookieSaveUser = (value) => {
    setCookie('loginValid', value);
};