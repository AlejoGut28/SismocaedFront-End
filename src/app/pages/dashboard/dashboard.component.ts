import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

   isLogged = false;
   nombreUsuario = '';

  constructor(private _tokenService: TokenService, private router: Router) { }

  ngOnInit(){
    if(this._tokenService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this._tokenService.getUserName();
    }else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

  onLogOut(): void{
    Swal.fire({
      title: 'Estas seguro que deseas salir',
      text: "Tendrás que volver a logearte!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo salir!'
    }).then((result) => {
      if (result.value) {
        this._tokenService.logOut();
        this.router.navigate[('/login')];
        Swal.fire(
          'Se ha deslogeado!',
          'Usted ha sido deslogeado',
          'success'
        )
      }
    })
  }

}
