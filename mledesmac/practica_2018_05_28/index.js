'use strict';


const tableUsers = document.getElementById('tableUsers');
const closeHTML = document.getElementById('closeModal');
const closeButtonHTML = document.getElementById('closeButtonModal');

const doFetchMau = (urlAddress) => {
    return fetch(urlAddress)
        .then( res => {
            return res.json();
        })
        .then( response => {
            const htmlResponse = (response.results);
            for (const person of htmlResponse) {
                const column = `<tr><td>${person.email}</td><td>${person.name.first}</td><td>${person.name.last}</td></tr>`;
                tableUsers.innerHTML += column;
            }
        })
        .catch(() => {
            showDivModal();
        })
};



const showDivModal = () => {

    const modalHTML = document.getElementById('modalWindow');
    flagModal = true;
    modalHTML.style.display = 'block';

};

const closeModal = () => {
    const modalHTML = document.getElementById('modalWindow');
    modalHTML.style.display = 'none';
    flagModal = false;
};


doFetchMau('https://randomuser.me/api/?results=20');
closeHTML.addEventListener('click', closeModal);
closeButtonHTML.addEventListener('click', closeModal);



