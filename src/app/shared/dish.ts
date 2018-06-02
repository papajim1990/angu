import { Comments } from "./Comments";

export class Dish{
    id:number;
    feautured:boolean;
    name:string;
    price:string;
    description:string;
    comment:Comments[];
    image:string;
    category:string;
    label:string;
}
