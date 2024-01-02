export interface Worker {
    name: string,
    email: string,
    password: string,
    companyId: string,
}

// dummy data for offline developement
const _worker = {
    email: "example@email.com",
    name: "John Doe",
    companyId: "BlastRock",
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.m9kzd-j4MsVM9_8rGHdPHgH3BOcRjvAWzj9PNaKW1Gw"
}

export async function signIn({ email, password }: { email: string, password: string }) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_worker);
        }, 2000);
    });
}

export async function signUp(data: Worker) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_worker);
        }, 6000);
    });
}

export async function validateInvitation(token: string) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ companyId: "123" });
        }, 6000);
    });
}