/*
  Warnings:

  - The primary key for the `settings` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "settings" DROP CONSTRAINT "settings_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "settings_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "settings_id_seq";
