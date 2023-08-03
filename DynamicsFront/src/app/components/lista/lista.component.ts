import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  users: any[];

  constructor(private usersService: UsersService) {
    this.users = [];
  }

  async ngOnInit() {
    try {
      this.users = await this.usersService.getAll();
      console.log(this.users);
    } catch (err) {
      console.log(err);
    }
  }

}
