import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/Models/Job';
import { JobService } from "src/app/Services/Job.service";

@Component({
  selector: 'job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})

export class JobListComponent implements OnInit {

  constructor(private router: Router, private jobService: JobService, private ar: ActivatedRoute) { }

  jobListService: Job[] = []
  jobList: Job[] = []
  selectedJobField: string = "all"
  selectedJobArea: any

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(res => {
      this.jobListService = res
      this.jobList = this.jobListService
    })

    this.ar.queryParams.subscribe(jobField => {

      this.selectedJobField = jobField['jobField'];

      if (this.selectedJobField)
        this.jobList = this.jobListService.filter(j => (j.jobField == this.selectedJobField))
    })

  }

  filterByCondition(): void {
    this.jobList = this.jobListService.filter(j => (j.jobField == this.selectedJobField || this.selectedJobField == "all"))
  }

}
