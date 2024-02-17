import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ArticlesService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(createArticleDto: CreateArticleDto) {
    try {
      const article = await this.prisma.article.create({
        data: createArticleDto,
      });
      return article;
    } catch (error) {
      throw new Error('Unable to create article');
    }
  }

  async findAll() {
    try {
      const articles = await this.prisma.article.findMany();
      return articles;
    } catch (error) {
      throw new Error('Unable to fetch articles');
    }
  }

  async findOne(id_article: number) {
    try {
      const article = await this.prisma.article.findUnique({
        where: { id_article },
      });
      return article;
    } catch (error) {
      throw new Error(`Unable to fetch article with id ${id_article}`);
    }
  }

  async update(id_article: number, updateArticleDto: UpdateArticleDto) {
    try {
      const updatedArticle = await this.prisma.article.update({
        where: { id_article },
        data: updateArticleDto,
      });
      return updatedArticle;
    } catch (error) {
      throw new Error(`Unable to update article with id ${id_article}`);
    }
  }

  async remove(id_article: number) {
    try {
      await this.prisma.article.delete({
        where: { id_article },
      });
      return `Article with id ${id_article} deleted successfully`;
    } catch (error) {
      throw new Error(`Unable to delete article with id ${id_article}`);
    }
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}
