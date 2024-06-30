import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UnlockAttemptService } from "./unlockAttempt.service";
import { UnlockAttemptControllerBase } from "./base/unlockAttempt.controller.base";

@swagger.ApiTags("unlockAttempts")
@common.Controller("unlockAttempts")
export class UnlockAttemptController extends UnlockAttemptControllerBase {
  constructor(
    protected readonly service: UnlockAttemptService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
