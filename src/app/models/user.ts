export class User {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: number;

    constructor(id: number, firstName: string, lastName: string, phoneNumber: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}
