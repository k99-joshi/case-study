export class postData{
    task_ID!: number;
  owner_ID!: number;
  creator_ID!:number;
  name!: string;
  description!: string;
  status!: string;
  priority!: string;
  notes!: string;
  isBookmarked!: boolean;
  created_On!: Date;
  status_Changed_On!: Date;
  
}
export interface respData{
    task_ID: number;
    owner_ID: number;
    creator_ID:number;
    name: string;
    description: string;
    status: string;
    priority: string;
    notes: string;
    isBookmarked: boolean;
    created_On: Date;
    status_Changed_On: Date;
    
}