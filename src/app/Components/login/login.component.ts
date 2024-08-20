import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User.service'
import { JobService } from 'src/app/Services/Job.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private userService: UserService) { }

  name: string = ""
  password: string = ""
  user: User | null = null

  enter(): void {
    if (this.nameValid() && this.passwordValid()) {
      try {
        this.userService.getUser(this.name, this.password).subscribe(res => {
          this.user = res
          if (this.user) {
            this.userService.set(this.user)
            this.router.navigate(['/jobList'])
          }
          else {
            alert("user doesnt exist")
          }
        })
      } catch (error) {
        alert("user not found")
      }
    }
  }

  nameValid(): boolean {
    if (this.name != null && this.name.length > 0)
      return true
    alert("no name")
    return false
  }

  passwordValid(): boolean {
    if (this.password.length < 8) {
      alert("the password is short then 8 characters")
      return false
    }
    if (this.password.includes(" ")) {
      alert("the password contain space")
      return false
    }
    return true
  }

}
