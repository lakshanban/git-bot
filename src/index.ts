import { Probot } from "probot";
import { checkDepreacatedTags } from "./services/pull-request-check"

export = ({ app }: { app: Probot }) => {
  app.log.info("GIT-BOT at your service")

  /** handle depreacated tags in the andi PR's */
  app.on("pull_request.opened", checkDepreacatedTags)
};
