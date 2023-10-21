import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';
import { env } from 'process';

const octokit = new Octokit({
  auth: process.env.OCTOKIT_TOKEN,
})

const owner = "xCHZx";
const repo = "ftf-tht-frontend";

@Injectable()
export class CommitsService {

  async getAllCommits(): Promise<Object> {

    const result = await octokit.request(`GET /repos/${owner}/${repo}/commits`);
    return result.data
  }

  async findById(sha: String): Promise<Object> {
    const result = await octokit.request(`GET /repos/${owner}/${repo}/commits/${sha}`);
    return result.data;
  }

}
