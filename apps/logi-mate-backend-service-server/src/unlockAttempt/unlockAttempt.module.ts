import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UnlockAttemptModuleBase } from "./base/unlockAttempt.module.base";
import { UnlockAttemptService } from "./unlockAttempt.service";
import { UnlockAttemptController } from "./unlockAttempt.controller";
import { UnlockAttemptResolver } from "./unlockAttempt.resolver";

@Module({
  imports: [UnlockAttemptModuleBase, forwardRef(() => AuthModule)],
  controllers: [UnlockAttemptController],
  providers: [UnlockAttemptService, UnlockAttemptResolver],
  exports: [UnlockAttemptService],
})
export class UnlockAttemptModule {}
