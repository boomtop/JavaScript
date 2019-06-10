"use strict";

function chekAge(age){
    if (age>18) {
        return true;
    } else {
        return confirm("What???");
    
    }
}

function checkAge2(age){
    return (age>18) ? true : confirm("What?");
}

function checkAge3(age) {
    return (age>18) || confirm("What?");
}