import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UnlockAttemptServiceBase } from "./base/unlockAttempt.service.base";

@Injectable()
export class UnlockAttemptService extends UnlockAttemptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
