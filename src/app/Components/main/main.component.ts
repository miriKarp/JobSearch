import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) { }

  user: User | null = null

  ngOnInit(): void {
    if (!this.user) {
      this.router.navigate(['/login'])
    }
    this.userService.get().subscribe(u => {
      this.user = u;
    })
  }

  filterByJobField(): void {
    if (this.user)
      this.router.navigate(["/jobList"], { queryParams: { jobField: this.user?.userJobField } })
    else
      alert("sorry, register before logging in")
  }

}
