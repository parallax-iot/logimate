import { Module } from "@nestjs/common";
import { UserManagementService } from "./usermanagement.service";
import { UserManagementController } from "./usermanagement.controller";
import { UserManagementResolver } from "./usermanagement.resolver";

@Module({
  controllers: [UserManagementController],
  providers: [UserManagementService, UserManagementResolver],
  exports: [UserManagementService],
})
export class UserManagementModule {}
