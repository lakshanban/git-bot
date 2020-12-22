import { Context }  from "probot";
import { sheetEmail,sheetId, sheetPrivateKey, sheetRange } from "../config";
import { fetchData, SheetResponse } from "./google-sheets"

export const checkDepreacatedTags = async (context: Context) => {
  context = context
  const repoName: string = context.payload.repository.name;
  const repoOwner: string = context.payload.repository.owner.login;
  const pullNumber: number = context.payload.number;

  const listFiles = await context.octokit.pulls.listFiles({
      repo: repoName,
      owner: repoOwner,
      pull_number: pullNumber
  })

  const deprecatedTags: SheetResponse = await fetchData({
    token: {
        clientEmail: sheetEmail,
        privateKey: sheetPrivateKey
    },
    spreadSheetId: sheetId,
    range: sheetRange}
  )

  if(deprecatedTags.data) {
    listFiles.data.forEach( file => {
      deprecatedTags.data![0].forEach( tag => {
        const regex = new RegExp(tag, "g")
        const result = file.patch.match(regex)
        if(result){
          context.octokit.issues.createComment({ 
            repo: repoName,
            owner: repoOwner,
            issue_number: pullNumber,
            body: " :x: :x: :x: Deprecated :x: :x: :x:",       
          }) 
        }
      })
    })
  }
}