-- CreateTable
CREATE TABLE "Category" (
    "id_category" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "Article" (
    "id_article" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "id_category" INTEGER,
    "author_id" INTEGER,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id_article")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Session" (
    "session_id" TEXT NOT NULL,
    "user_id" INTEGER,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("session_id")
);

-- CreateTable
CREATE TABLE "CategoryArticle" (
    "id" SERIAL NOT NULL,
    "id_category" INTEGER NOT NULL,
    "id_article" INTEGER NOT NULL,

    CONSTRAINT "CategoryArticle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_category_key" ON "Category"("id_category");

-- CreateIndex
CREATE UNIQUE INDEX "Article_id_article_key" ON "Article"("id_article");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_user_id_key" ON "Session"("user_id");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "Category"("id_category") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryArticle" ADD CONSTRAINT "CategoryArticle_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "Category"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryArticle" ADD CONSTRAINT "CategoryArticle_id_article_fkey" FOREIGN KEY ("id_article") REFERENCES "Article"("id_article") ON DELETE RESTRICT ON UPDATE CASCADE;
