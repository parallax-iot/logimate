import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TamperedStatusResolverBase } from "./base/tamperedStatus.resolver.base";
import { TamperedStatus } from "./base/TamperedStatus";
import { TamperedStatusService } from "./tamperedStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TamperedStatus)
export class TamperedStatusResolver extends TamperedStatusResolverBase {
  constructor(
    protected readonly service: TamperedStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
