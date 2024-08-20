import { Component, Input, OnInit, Output } from '@angular/core';
import { Job } from 'src/app/Models/Job';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})

export class JobComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() jobData!: Job
  user!: User

  ngOnInit(): void {
    this.userService.get().subscribe(u => {
      this.user = u;
    })
  }

  showDetails: boolean = false
  moreDetails(): void {
    this.showDetails = !this.showDetails
  }

  upload: boolean = false
  sendResume(): void {
    this.upload = !this.upload
    if (this.upload) {
      this.user = JSON.parse(localStorage.getItem("user")!)
      this.user.userResumes++
      this.user.resumes.push(this.jobData.jobName?.toString()!)
      this.userService.set(this.user)
      console.log(this.user);
      
    }
  }

}

