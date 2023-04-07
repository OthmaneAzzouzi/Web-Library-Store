import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProduitAcceuilComponent } from './produit-acceuil/produit-acceuil.component';
import { DropdownToggleHeaderComponent } from './dropdown-toggle-header/dropdown-toggle-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ConnexionComponent } from './connexion/connexion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { InscriptionEcoleComponent } from './inscription-ecole/inscription-ecole.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ListeProduitsComponent } from './shopping-cart/liste-produits/liste-produits.component';
import { ProduitComponent } from './shopping-cart/liste-produits/produit/produit.component';
import { PageProduitComponent } from './page-produit/page-produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { PanierComponent } from './panier/panier.component';
import { MessengerService } from './services/messenger.service';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { HttpClientModule } from '@angular/common/http';
import { BdService } from './services/bd.service';
import { AuthService } from './services/auth.service';
import { AuthGuardEcolesService } from './services/auth-guard-ecole.service';
import { AuthGuardUsersService } from './services/auth-guard-users.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ShoolPanelComponent } from './shool-panel/shool-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { FormsModule } from '@angular/forms';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ClubComponent } from './club/club.component';
import { SearchPageComponent } from './search-page/search-page.component';



@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    CarrouselComponent,
    ProduitAcceuilComponent,
    DropdownToggleHeaderComponent,
    ConnexionComponent,
    InscriptionClientComponent,
    InscriptionEcoleComponent,
    ShoppingCartComponent,
    ListeProduitsComponent,
    ProduitComponent,
    PageProduitComponent,
    AccueilComponent,
    FooterComponent,
    PanierComponent,
    PageErreurComponent,
    AdminPanelComponent,
    ShoolPanelComponent,
    UserPanelComponent,
    ContactPageComponent,
    ClubComponent,
    SearchPageComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [BdService, MessengerService, AuthService, AuthGuardService, AuthGuardUsersService, AuthGuardEcolesService],
  bootstrap: [AppComponent]

})

export class AppModule { }
