export interface Member {
    id: string,
    email: string,
    name: string,
}

const _members = [
    {
        id: "1234",
        email: "examle1@email.com",
        name: "John Deo"
    },
    {
        id: "2345",
        email: "examle2@email.com",
        name: "John Deo"
    },
    {
        id: "3456",
        email: "examle3@email.com",
        name: "John Deo"
    },
]

const _inviteLinks= [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
]

export async function getCompanyMembers(companyId: string) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_members);
        }, 2000);
    });
}

export async function getInviteLinks(companyId: string) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_inviteLinks);
        }, 2000);
    });
}