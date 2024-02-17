import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CategoryService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.prisma.category.create({
        data: createCategoryDto,
      });
      return category;
    } catch (error) {
      throw new Error('Unable to create category');
    }
  }

  async findAll() {
    try {
      const categories = await this.prisma.category.findMany(); // Исправлено на findMany
      return categories;
    } catch (error) {
      throw new Error('Unable to fetch categories');
    }
  }

  async findOne(id_category: number) {
    try {
      const category = await this.prisma.category.findUnique({
        where: { id_category },
      });
      return category;
    } catch (error) {
      throw new Error(`Unable to fetch category with id ${id_category}`);
    }
  }

  async update(id_category: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const updatedCategory = await this.prisma.category.update({
        where: { id_category },
        data: updateCategoryDto,
      });
      return updatedCategory;
    } catch (error) {
      throw new Error(`Unable to update category with id ${id_category}`);
    }
  }

  async remove(id_category: number) {
    try {
      await this.prisma.category.delete({
        where: { id_category },
      });
      return `Category with id ${id_category} deleted successfully`;
    } catch (error) {
      throw new Error(`Unable to delete category with id ${id_category}`);
    }
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}
