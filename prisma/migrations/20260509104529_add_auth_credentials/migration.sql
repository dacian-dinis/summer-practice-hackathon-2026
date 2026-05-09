-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "bio" TEXT,
    "photoUrl" TEXT,
    "skill" INTEGER NOT NULL DEFAULT 3,
    "onboardedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("bio", "createdAt", "email", "id", "name", "onboardedAt", "passwordHash", "photoUrl", "skill")
SELECT
    "bio",
    "createdAt",
    lower(replace(trim("name"), ' ', '-')) || '@showup2move.dev',
    "id",
    "name",
    "onboardedAt",
    '$2b$10$PLArxPET0QPsIhHduFXEfOJNDFF07NJ80TUqzxerFebeM976e6P86',
    "photoUrl",
    "skill"
FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
