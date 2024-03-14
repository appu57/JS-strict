function person(name)
{
    this.name=name;
}

person();
console.log("No strict");

"use strict"
function persons(name)
{
    this.name=name;   //cannot set propert of name that is undefined solution is to use new persons()
}

persons();
console.log("With strict")


//alternate way

function persons(name)
{
    if(!new.target)
    {
        throw new Error("error")
    }
}

new persons();
console.log("With strict")