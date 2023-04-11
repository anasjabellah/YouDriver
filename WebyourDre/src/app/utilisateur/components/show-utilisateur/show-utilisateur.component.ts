import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../../services/utilisateur.service';
import { utilisateur } from 'src/app/interface/utilisateur';

@Component({
  selector: 'app-show-utilisateur',
  templateUrl: './show-utilisateur.component.html',
  styleUrls: ['./show-utilisateur.component.css']
})
export class ShowUtilisateurComponent implements OnInit {

  utilisateur?: utilisateur | undefined ;
  data: any ;
  id!: number ;

  constructor(private utilisateurService: UtilisateurService , private route: ActivatedRoute ){}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.params['id']);
    this.utilisateurService.getOne(this.id).subscribe(
      data => {
        this.utilisateur = {
          id: data.id ,
          userName: data.userName ,
          email: data.email ,
          tel: data.tel ,
          address: data.address ,
          firstName: data.firstName ,
          lastName: data.lastName ,
          password: data.password ,
          role: data.role 
        }
      }
      
    )

  }
}
