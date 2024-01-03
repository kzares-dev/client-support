export interface Worker {
    name: string,
    email: string,
    password: string,
    companyId: string,
}

export interface Chat {
    id: string,
    name: string,
    email: string,
    lastMsg: string,
}

export interface Message {
    fromClient: boolean,
    id: string,
    text: string,
    date: Date,
}

// dummy data for offline developement
const _worker = {
    email: "example@email.com",
    name: "John Doe",
    companyId: "BlastRock",
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.m9kzd-j4MsVM9_8rGHdPHgH3BOcRjvAWzj9PNaKW1Gw"
}

const _activeChats = [
    {
        id: "123",
        name: "John Doe",
        email: "example@email.com",
        lastMsg: "lorem ipsum dolor is ameth consecutor sit dolor"
    },
    {
        id: "1234",
        name: "John Doe",
        email: "example@email.com",
        lastMsg: "lorem ipsum dolor is ameth consecutor sit dolor"
    },
    {
        id: "1235",
        name: "John Doe",
        email: "example@email.com",
        lastMsg: "lorem ipsum dolor is ameth consecutor sit dolor"
    },
    {
        id: "12366",
        name: "John Doe",
        email: "example@email.com",
        lastMsg: "lorem ipsum dolor is ameth consecutor sit dolor"
    },
    {
        id: "1237",
        name: "John Doe",
        email: "example@email.com",
        lastMsg: "lorem ipsum dolor is ameth consecutor sit dolor"
    },
    {
        id: "1238",
        name: "John Doe",
        email: "example@email.com",
        lastMsg: "lorem ipsum dolor is ameth consecutor sit dolor"
    },
    {
        id: "1239",
        name: "John Doe",
        email: "example@email.com",
        lastMsg: "lorem ipsum dolor is ameth consecutor sit dolor"
    },
]

const _messages = [
    {
        fromClient: true,
        id: "123",
        text: "lorem i[sum dolor is ameth consecutor",
        date: new Date(),
      },
      {
        fromClient: false,
        id: "1234",
        text: "lorem i[sum dolor is ameth consecutor lorem i[sum dolor is ameth consecutor lorem i[sum dolor is ameth consecutor ",
        date: new Date(),
      },
      {
        fromClient: true,
        id: "1235",
        text: "lorem i[sum dolor is ameth consecutor",
        date: new Date(),
      },
      {
        fromClient: true,
        id: "1236",
        text: "lorem i[sum dolor is ameth consecutor",
        date: new Date(),
      },
      {
        fromClient: false,
        id: "1237",
        text: "lorem i[sum dolor is ameth consecutor",
        date: new Date(),
      },
]

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


export async function getActiveChats(): Promise<Chat[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_activeChats);
        }, 6000);
    });

}

export async function getChatMessages(chatId: string): Promise<Message[]> {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_messages);
        }, 2000);
    });
}