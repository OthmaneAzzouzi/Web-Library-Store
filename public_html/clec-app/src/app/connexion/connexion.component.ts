import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  authStatus: boolean = false;
  connexionErreur: boolean = false;
  @Input() username: string = "";
  @Input() password: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuthAdmin;    

  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuthAdmin;
  }

  onSubmitAdmin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    
    this.authService.signInAdmin(username, password).then(
      () => {
        
        this.authStatus = this.authService.isAuthAdmin;
        if(this.authStatus === true) {
          this.router.navigate(['admin-panel']);
          this.connexionErreur = false;
        } else {
          this.connexionErreur = true;
        }
        
      }
    );
  }

  onSubmitUsers(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    
    this.authService.signInUser(username, password).then(
      () => {
        
        this.authStatus = this.authService.isAuthUser;
        if(this.authStatus === true) {
          this.router.navigate(['user-panel']);
          this.connexionErreur = false;
        } else {
          this.connexionErreur = true;
        }
        
      }
    );
  }

  onSubmitSchools(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    
    this.authService.signInSchool(username, password).then(
      () => {
        
        this.authStatus = this.authService.isAuthEcole;
        if(this.authStatus === true) {
          this.router.navigate(['school-panel']);
          this.connexionErreur = false;
        } else {
          this.connexionErreur = true;
        }
        
      }
    );
  }

  loginVerification(form: NgForm) {
    switch(form.value.type) { 
      case "1": { 
         this.onSubmitAdmin(form);
         break; 
      } 
      case "2": { 
        this.onSubmitUsers(form);
         break; 
      } case "3": { 
        this.onSubmitSchools(form);
         break; 
      } 
   } 
  }
}
