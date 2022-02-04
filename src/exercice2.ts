interface Administrateur {
    nom: string,
    email : string ,
    ip : string ,
    dt_connexion : Date ,
    login : string,
    password : string
   }

   
type UtilisateurAnonyme = Partial<Pick<Administrateur, "nom" | "ip">>;

const user:UtilisateurAnonyme= {
    nom:"test",
    ip:'192.168.0.1'
}
const user2:UtilisateurAnonyme= {
    ip:'192.168.0.2'
}