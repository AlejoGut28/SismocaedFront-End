import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AuthService, TokenService]
})
export class RegistroComponent implements OnInit {

  isLogged = false;
  nuevoUsuario: NuevoUsuario;
  nombre: string;
  nombreUsuario: string;
  password: string;
  errMsj: string;
  
  constructor( private _tokenService: TokenService, 
    private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this._tokenService.getToken()){
      this.isLogged = true;
    }
  }
  
  onRegister(): void{
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.password);
    this._authService.nuevo(this.nuevoUsuario).subscribe(
      data => {

        Swal.fire(
          'Hecho!',
          'El usuario ha sido registrado con éxito',
          'success'
        );

        this.router.navigate(['/registro']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario invalido, por favor vuela a intentarlo',
          footer: '<a href>Why do I have this issue?</a>'
        })
        console.log(this.errMsj);
      }
    );
    
}

}
