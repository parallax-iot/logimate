import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LocationHistoryResolverBase } from "./base/locationHistory.resolver.base";
import { LocationHistory } from "./base/LocationHistory";
import { LocationHistoryService } from "./locationHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LocationHistory)
export class LocationHistoryResolver extends LocationHistoryResolverBase {
  constructor(
    protected readonly service: LocationHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
