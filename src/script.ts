let dataUsers : any ; 
let dataPosts : any ; 
document.addEventListener("DOMContentLoaded", async () => {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users") 
    const reponse2 = await fetch("https://jsonplaceholder.typicode.com/posts") 
    
    
    dataUsers = (await reponse.json()) as Array<Partial<User>>;
    dataPosts = (await reponse2.json()) as Array<Post>;

    addAutor(dataUsers)
    
    function addAutor(dataUsers:Array<Partial<User>>){
        let html = "";
        dataUsers.map((item:any,index:number)=>{
            html += `<div style="width:30%" id="${item.id}">
                <h2 style="color:blue">${item.name}</h2>
                <p>${item.email}</p>
                <h3 style="color:orange">Titre des articles rédigés : </h3>
            <ul>
            `
            const result = dataPosts.filter((post:any )=> post.userId == item.id);
            result.map((item:any)=>{
                html+= `<li>${item.title}</li>`
            })
            html += "</ul></div>";
        })
        let resultat:HTMLElement = document.querySelector('#resultat')!;
        resultat.innerHTML = html;
    }
    (document.querySelector("form") as HTMLFormElement).addEventListener("submit" , function(e :Event){
        e.preventDefault()
        const data = new FormData(this)

        let values:any = {};
        let result:any;
        for(let [nom,valeur] of data.entries()){
            values[nom] = valeur
        }

        if(values['autor']){
             result = dataUsers.filter((user:any )=> user.name
             .toLowerCase()
             .includes(values['autor'].toLowerCase()));
        }
        else if(values['title']){
            let tmp = dataPosts.filter((post:any )=> post.title
            .toLowerCase()
            .includes(values['title'].toLowerCase()));

            result = dataUsers.filter((user:any )=> user.id == tmp[0].userId);

        }else{
            addAutor(dataUsers)
        }
        addAutor(result);
        this.reset()
    })
})

interface User{
    id:number,
    name:string,
    email:string,
}
interface Post{
    userId:number,
    id:number,
    title:string,
    body:string
}