import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SmartBoxDeviceServiceBase } from "./base/smartBoxDevice.service.base";

@Injectable()
export class SmartBoxDeviceService extends SmartBoxDeviceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
