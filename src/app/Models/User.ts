import { JobFields } from "./JobFields"

export class User {
    userId: number = 0
    userName: string | null = null
    userPassword: string | null = null
    userJobField: JobFields | null = null
    userResumes: number = 0
    resumes: string[] = []
}