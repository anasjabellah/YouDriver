import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {

  utilisateurs: any[] | undefined ;

  constructor(private utilisateurService: UtilisateurService , private route: ActivatedRoute ){}

  ngOnInit(): void {
    this.utilisateurService.getAll().subscribe(
      data => {
        this.utilisateurs = data ;
      }
    )
  }


}
