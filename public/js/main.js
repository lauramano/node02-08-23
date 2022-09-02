'use strict';

// kreiptis ir gauti useri is bac end

const bacEndUrl = 'http://localhost:3000/api/users/';

async function getUsers() {
    const resp = await fetch(bacEndUrl);
    const dataInJs = await resp.json();
    // console.log('data in js ', dataInJs);
}
getUsers();