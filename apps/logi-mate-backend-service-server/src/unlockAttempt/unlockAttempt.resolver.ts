import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UnlockAttemptResolverBase } from "./base/unlockAttempt.resolver.base";
import { UnlockAttempt } from "./base/UnlockAttempt";
import { UnlockAttemptService } from "./unlockAttempt.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UnlockAttempt)
export class UnlockAttemptResolver extends UnlockAttemptResolverBase {
  constructor(
    protected readonly service: UnlockAttemptService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
