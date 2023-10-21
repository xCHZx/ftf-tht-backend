import { Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from '../services/commits.service';
@Controller()
export class CommitsController {
    constructor(private readonly commitsService: CommitsService) { }

    @Get('/commits')
    getCommits(): Object {
        return this.commitsService.getAllCommits();
    }

    @Get('commits/:id')
    getComitById(@Param('id') id: String): Object {
        return this.commitsService.findById(id);
    }

}