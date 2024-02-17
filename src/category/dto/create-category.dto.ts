export class CreateCategoryDto {
    readonly name: string;
    readonly articleId?: number; // Опциональное поле, если статья принадлежит категории
  }
  