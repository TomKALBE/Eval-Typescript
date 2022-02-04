"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let dataUsers;
let dataPosts;
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const reponse = yield fetch("https://jsonplaceholder.typicode.com/users");
    const reponse2 = yield fetch("https://jsonplaceholder.typicode.com/posts");
    dataUsers = (yield reponse.json());
    dataPosts = (yield reponse2.json());
    addAutor(dataUsers);
    function addAutor(dataUsers) {
        let html = "";
        dataUsers.map((item, index) => {
            html += `<div style="width:30%" id="${item.id}">
                <h2 style="color:blue">${item.name}</h2>
                <p>${item.email}</p>
                <h3 style="color:orange">Titre des articles rédigés : </h3>
            <ul>
            `;
            const result = dataPosts.filter((post) => post.userId == item.id);
            result.map((item) => {
                html += `<li>${item.title}</li>`;
            });
            html += "</ul></div>";
        });
        let resultat = document.querySelector('#resultat');
        resultat.innerHTML = html;
    }
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(this);
        let values = {};
        let result;
        for (let [nom, valeur] of data.entries()) {
            values[nom] = valeur;
        }
        if (values['autor']) {
            result = dataUsers.filter((user) => user.name
                .toLowerCase()
                .includes(values['autor'].toLowerCase()));
        }
        else if (values['title']) {
            let tmp = dataPosts.filter((post) => post.title
                .toLowerCase()
                .includes(values['title'].toLowerCase()));
            result = dataUsers.filter((user) => user.id == tmp[0].userId);
        }
        else {
            addAutor(dataUsers);
        }
        addAutor(result);
        this.reset();
    });
}));
//# sourceMappingURL=script.js.map