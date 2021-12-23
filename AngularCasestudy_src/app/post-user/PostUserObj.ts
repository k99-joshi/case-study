export class PostData{
    user_Id! : number;
    password! : string;
    username! : string;
    email! : string;
    first_Name! : string;
    last_Name! : string;
    contact_Number! : number;
    role! : string;
    isactive! : boolean;
    dob! : Date;
    created_on! : Date;
}

export interface RespData{
    user_Id : number;
    password : string;
    username : string;
    email : string;
    first_Name : string;
    last_Name : string;
    contact_Number : number;
    role : string;
    isactive : boolean;
    dob : Date;
    created_on : Date;
}