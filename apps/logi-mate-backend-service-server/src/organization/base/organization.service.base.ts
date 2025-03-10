/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Organization as PrismaOrganization } from "@prisma/client";

export class OrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.OrganizationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.organization.count(args);
  }

  async organizations(
    args: Prisma.OrganizationFindManyArgs
  ): Promise<PrismaOrganization[]> {
    return this.prisma.organization.findMany(args);
  }
  async organization(
    args: Prisma.OrganizationFindUniqueArgs
  ): Promise<PrismaOrganization | null> {
    return this.prisma.organization.findUnique(args);
  }
  async createOrganization(
    args: Prisma.OrganizationCreateArgs
  ): Promise<PrismaOrganization> {
    return this.prisma.organization.create(args);
  }
  async updateOrganization(
    args: Prisma.OrganizationUpdateArgs
  ): Promise<PrismaOrganization> {
    return this.prisma.organization.update(args);
  }
  async deleteOrganization(
    args: Prisma.OrganizationDeleteArgs
  ): Promise<PrismaOrganization> {
    return this.prisma.organization.delete(args);
  }
}
