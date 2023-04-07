import {ActivatedRoute} from "@angular/router";
import adminListe from '../../assets/data/usagers.json';
import usersListe from '../../assets/data/usagers.json';
import ecolesListe from '../../assets/data/ecoles.json';

interface user {
  username: string;
  password: string;
}

export class AuthService {
  logoutAdmin = false;
  logoutUser = false;
  logoutEcole = false;
  isAuthAdmin = false;
  isAuthUser = false;
  isAuthEcole = false;
  admins: user[] = adminListe;
  users: user[] = usersListe;
  ecoles: user[] = ecolesListe;
 
  signInAdmin(userId: string, password: string) {

    return new Promise(
      (resolve, reject) => {
        setTimeout(
          
          () => {
            for (let index = 0; index < 2; index++) {
              if(userId === this.admins[index].username && password === this.admins[index].username) {
                this.isAuthAdmin = true; 
              }
            }
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signInUser(userId: string, password: string) {

    return new Promise(
      (resolve, reject) => {
        setTimeout(
          
          () => {
            for (let index = 1; index < this.users.length; index++) {
              if(userId === this.users[index].username && password === this.users[index].username) {
                this.isAuthUser = true; 
              }
            }
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signInSchool(userId: string, password: string) {

    return new Promise(
      (resolve, reject) => {
        setTimeout(
          
          () => {
            for (let index = 0; index < this.ecoles.length; index++) {
              if(userId === this.ecoles[index].username && password === this.ecoles[index].username) {
                this.isAuthEcole = true; 
              }
            }
            resolve(true);
          }, 2000
        );
      }
    );
  }
  
  signOut() {
    this.isAuthAdmin = false;
  }
  

}
