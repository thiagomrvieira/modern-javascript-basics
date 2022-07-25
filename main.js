'use strict';
 
var username = "Thiago"; // window.username is available in the global scope with the value = "Thiago"
// let username = "Thiago"; // window.username is not available 

function init() {
    // if (true) {
    //     // Accessible outside the scope
    //     var email = "thiago@gmail.com"
    // }

    // document.getElementById('output').innerHTML = email


    // if (true) {
    //     //  Limited to the scope
    //     let email = "th iago@gmail.com"
    //     document.getElementById('output').innerHTML = email
        
    // }

    // // It wont work
    // // document.getElementById('output').innerHTML = email


    if (true) {
        let email = "th iago@gmail.com"
        document.getElementById('output').innerHTML = username
        
    }

    
}

init();