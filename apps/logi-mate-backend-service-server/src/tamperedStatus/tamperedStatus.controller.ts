import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TamperedStatusService } from "./tamperedStatus.service";
import { TamperedStatusControllerBase } from "./base/tamperedStatus.controller.base";

@swagger.ApiTags("tamperedStatuses")
@common.Controller("tamperedStatuses")
export class TamperedStatusController extends TamperedStatusControllerBase {
  constructor(
    protected readonly service: TamperedStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
