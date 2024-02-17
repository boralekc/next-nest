export class CreateArticleDto {
    readonly title: string;
    readonly content: string;
    readonly categoryId?: number; // Опциональное поле, если статья принадлежит категории
  }
  