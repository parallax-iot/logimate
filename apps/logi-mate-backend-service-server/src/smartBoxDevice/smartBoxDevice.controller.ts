import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SmartBoxDeviceService } from "./smartBoxDevice.service";
import { SmartBoxDeviceControllerBase } from "./base/smartBoxDevice.controller.base";

@swagger.ApiTags("smartBoxDevices")
@common.Controller("smartBoxDevices")
export class SmartBoxDeviceController extends SmartBoxDeviceControllerBase {
  constructor(
    protected readonly service: SmartBoxDeviceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
