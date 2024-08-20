import { JobFields } from "./JobFields"

export class Job {
    jobField: JobFields | null = null
    jobName: string | null = null
    scopeHours: number | null = null
    area: string | null = null
    requirement: string | null = null
    home: boolean = false
}