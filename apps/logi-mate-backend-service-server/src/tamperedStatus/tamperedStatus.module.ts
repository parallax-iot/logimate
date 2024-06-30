import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TamperedStatusModuleBase } from "./base/tamperedStatus.module.base";
import { TamperedStatusService } from "./tamperedStatus.service";
import { TamperedStatusController } from "./tamperedStatus.controller";
import { TamperedStatusResolver } from "./tamperedStatus.resolver";

@Module({
  imports: [TamperedStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [TamperedStatusController],
  providers: [TamperedStatusService, TamperedStatusResolver],
  exports: [TamperedStatusService],
})
export class TamperedStatusModule {}
