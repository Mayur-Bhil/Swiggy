import { sum } from "../components/Sum";


test("Some Function Should Calculate Sum oF two Numbers",()=>{
   const result =  sum(3,3);
    //Assertion
    expect(result).toBe(6);
})  

