import { Message } from "./worker.api";

export interface Client {
    email: string,
    username: string,
    password: string,
}

const _client = {
    id: "123",
    email: "example@email.com",
    username: "john.doe",
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.RzFMgPmanBzZjlXV5OmEMTfgzXfpGTTGyb439YCgleY"
}

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

export async function getChatMessages(chatId: string): Promise<Message[]> {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_messages);
        }, 2000);
    });
}

export async function signUp( formData : Client) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_client);
        }, 6000);
    });
}