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
import { TamperedStatus } from "./TamperedStatus";
import { TamperedStatusCountArgs } from "./TamperedStatusCountArgs";
import { TamperedStatusFindManyArgs } from "./TamperedStatusFindManyArgs";
import { TamperedStatusFindUniqueArgs } from "./TamperedStatusFindUniqueArgs";
import { DeleteTamperedStatusArgs } from "./DeleteTamperedStatusArgs";
import { TamperedStatusService } from "../tamperedStatus.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TamperedStatus)
export class TamperedStatusResolverBase {
  constructor(
    protected readonly service: TamperedStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TamperedStatus",
    action: "read",
    possession: "any",
  })
  async _tamperedStatusesMeta(
    @graphql.Args() args: TamperedStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TamperedStatus])
  @nestAccessControl.UseRoles({
    resource: "TamperedStatus",
    action: "read",
    possession: "any",
  })
  async tamperedStatuses(
    @graphql.Args() args: TamperedStatusFindManyArgs
  ): Promise<TamperedStatus[]> {
    return this.service.tamperedStatuses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TamperedStatus, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TamperedStatus",
    action: "read",
    possession: "own",
  })
  async tamperedStatus(
    @graphql.Args() args: TamperedStatusFindUniqueArgs
  ): Promise<TamperedStatus | null> {
    const result = await this.service.tamperedStatus(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TamperedStatus)
  @nestAccessControl.UseRoles({
    resource: "TamperedStatus",
    action: "delete",
    possession: "any",
  })
  async deleteTamperedStatus(
    @graphql.Args() args: DeleteTamperedStatusArgs
  ): Promise<TamperedStatus | null> {
    try {
      return await this.service.deleteTamperedStatus(args);
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
