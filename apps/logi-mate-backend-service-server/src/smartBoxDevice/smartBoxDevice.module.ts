import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SmartBoxDeviceModuleBase } from "./base/smartBoxDevice.module.base";
import { SmartBoxDeviceService } from "./smartBoxDevice.service";
import { SmartBoxDeviceController } from "./smartBoxDevice.controller";
import { SmartBoxDeviceResolver } from "./smartBoxDevice.resolver";

@Module({
  imports: [SmartBoxDeviceModuleBase, forwardRef(() => AuthModule)],
  controllers: [SmartBoxDeviceController],
  providers: [SmartBoxDeviceService, SmartBoxDeviceResolver],
  exports: [SmartBoxDeviceService],
})
export class SmartBoxDeviceModule {}
