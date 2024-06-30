import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SmartBoxDeviceResolverBase } from "./base/smartBoxDevice.resolver.base";
import { SmartBoxDevice } from "./base/SmartBoxDevice";
import { SmartBoxDeviceService } from "./smartBoxDevice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SmartBoxDevice)
export class SmartBoxDeviceResolver extends SmartBoxDeviceResolverBase {
  constructor(
    protected readonly service: SmartBoxDeviceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
