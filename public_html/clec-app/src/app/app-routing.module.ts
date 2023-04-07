import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PanierComponent } from './panier/panier.component';
import { PageProduitComponent } from './page-produit/page-produit.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuardUsersService } from './services/auth-guard-users.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ShoolPanelComponent } from './shool-panel/shool-panel.component';
import { AuthGuardEcolesService } from './services/auth-guard-ecole.service';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ClubComponent } from './club/club.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path: '', component: AccueilComponent  },
  {path: 'accueil', component: AccueilComponent  },
  {path: 'contact', component: ContactPageComponent  },
  {path: 'club', component: ClubComponent  },
  {path: 'search', component: SearchPageComponent  },
  {path: 'panier', component: PanierComponent  },
  {path: 'product/:id', component: PageProduitComponent },
  {path: '404', component: PageErreurComponent },
  { path: 'admin-panel', canActivate: [AuthGuardService], component: AdminPanelComponent},
  { path: 'school-panel', canActivate: [AuthGuardEcolesService], component: ShoolPanelComponent},
  { path: 'user-panel', canActivate: [AuthGuardUsersService], component: UserPanelComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
