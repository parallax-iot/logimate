/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SmartBoxDevice } from "./SmartBoxDevice";
import { SmartBoxDeviceCountArgs } from "./SmartBoxDeviceCountArgs";
import { SmartBoxDeviceFindManyArgs } from "./SmartBoxDeviceFindManyArgs";
import { SmartBoxDeviceFindUniqueArgs } from "./SmartBoxDeviceFindUniqueArgs";
import { DeleteSmartBoxDeviceArgs } from "./DeleteSmartBoxDeviceArgs";
import { SmartBoxDeviceService } from "../smartBoxDevice.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SmartBoxDevice)
export class SmartBoxDeviceResolverBase {
  constructor(
    protected readonly service: SmartBoxDeviceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SmartBoxDevice",
    action: "read",
    possession: "any",
  })
  async _smartBoxDevicesMeta(
    @graphql.Args() args: SmartBoxDeviceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SmartBoxDevice])
  @nestAccessControl.UseRoles({
    resource: "SmartBoxDevice",
    action: "read",
    possession: "any",
  })
  async smartBoxDevices(
    @graphql.Args() args: SmartBoxDeviceFindManyArgs
  ): Promise<SmartBoxDevice[]> {
    return this.service.smartBoxDevices(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SmartBoxDevice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SmartBoxDevice",
    action: "read",
    possession: "own",
  })
  async smartBoxDevice(
    @graphql.Args() args: SmartBoxDeviceFindUniqueArgs
  ): Promise<SmartBoxDevice | null> {
    const result = await this.service.smartBoxDevice(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SmartBoxDevice)
  @nestAccessControl.UseRoles({
    resource: "SmartBoxDevice",
    action: "delete",
    possession: "any",
  })
  async deleteSmartBoxDevice(
    @graphql.Args() args: DeleteSmartBoxDeviceArgs
  ): Promise<SmartBoxDevice | null> {
    try {
      return await this.service.deleteSmartBoxDevice(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
