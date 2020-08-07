import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Publicidad } from 'src/app/models/Publicidad';
import { PublicidadService } from 'src/app/services/publicidad.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { LoginUsuario } from 'src/app/models/login-usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['./login.component.css'],
  providers: [AuthService, TokenService]
})
export class LoginComponent implements OnInit {

  @ViewChild('publicidadInputFile', { static: false }) publicidadFile: ElementRef;
  
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;


  publicidades: Publicidad[] = [];

  constructor(private publicidadService: PublicidadService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private _tokenService: TokenService, 
    private _authService: AuthService) { }

  ngOnInit() {
    this.cargarImagenes();
    if(this._tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = true;
      this.roles = this._tokenService.getAuthorities();
    }
  }
  cargarImagenes(): void {
    this.publicidadService.list().subscribe(
      data => {
        this.publicidades = data;
      }
    );
  }
  borrar(id: number): void {
    this.spinner.show();
    this.publicidadService.delete(id).subscribe(
      data => {
        this.spinner.hide();
        this.cargarImagenes();
      },
      err => {
        this.spinner.hide();
        console.log(err);
      }
    );
  }

  onLogin(): void{
      this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
      this._authService.login(this.loginUsuario).subscribe(
        data => {
           this.isLogged = true;

           Swal.fire(
            'Hecho!',
            'El usuario ha sido logueado con éxito, Bienvenido ' + data.nombreUsuario,
            'success'
          );

           this._tokenService.setToken(data.token);
           this._tokenService.setUserName(data.nombreUsuario);
           this._tokenService.setAuthorities(data.authorities);  //lo almacenamos en el navegador
           this.roles = data.authorities;  //se lo pasamos a la variable authorities
           this.router.navigate(['/dashboard']);
        },
        err => {
          this.isLogged = false;
          this.errMsj = err.error.mensaje;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario no existe en nuestra base de datos!',
            footer: '<a href>Olvidé mi usuario o contraseña?</a>'
          })
          console.log(this.errMsj);
        }
      );
      
  }
}
