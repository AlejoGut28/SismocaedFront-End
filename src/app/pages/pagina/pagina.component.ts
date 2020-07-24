import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  pagina(): void{
    this.router.navigateByUrl('/login');
  }
}
