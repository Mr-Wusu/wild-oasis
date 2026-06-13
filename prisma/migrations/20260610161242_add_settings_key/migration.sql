/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `settings` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "settings" ADD COLUMN     "key" TEXT NOT NULL DEFAULT 'default';

-- CreateIndex
CREATE UNIQUE INDEX "settings_key_key" ON "settings"("key");
