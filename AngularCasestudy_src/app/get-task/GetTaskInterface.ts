export interface GetTaskInterface{
    task_ID : number;
    owner_ID : number;
    creator_ID : number;
    name : string;
    description : string;
    status : string;
    priority : string;
    notes : string;
    isBookmarked : string;
    created_On : Date;
    status_Changed_On : Date;

}