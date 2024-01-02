export interface Admin {
    name: string,
    email: string,
    password: string,
    plan: string,
    company: string,
}

// dummy data for offline developement
const _admin = {
    email: "example@email.com",
    name: "John Doe",
    plan: "free",
    company: "BlastRock",
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJleGFtcGxlQGVtYWlsLmNvbSIsInBsYW4iOiJmcmVlIiwiY29tcGFueSI6IkJsYXN0Um9jayIsImlhdCI6MTUxNjIzOTAyMn0.qyCNS2Sber4FoMoi96opOmSbASDE-S24Gsai9htaSOE"
}

export async function signIn({ email, password }: { email: string, password: string }) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_admin);
        }, 2000);
    });
}

export async function signUp(data: Admin) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_admin);
        }, 6000);
    });
}