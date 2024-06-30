import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TamperedStatusServiceBase } from "./base/tamperedStatus.service.base";

@Injectable()
export class TamperedStatusService extends TamperedStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
