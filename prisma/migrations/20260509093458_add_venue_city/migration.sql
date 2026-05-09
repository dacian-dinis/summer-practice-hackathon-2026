-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Venue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL DEFAULT 'bucharest',
    "lat" REAL NOT NULL,
    "lng" REAL NOT NULL,
    "pricePerHour" INTEGER NOT NULL,
    "address" TEXT NOT NULL
);
INSERT INTO "new_Venue" ("address", "id", "lat", "lng", "name", "pricePerHour") SELECT "address", "id", "lat", "lng", "name", "pricePerHour" FROM "Venue";
DROP TABLE "Venue";
ALTER TABLE "new_Venue" RENAME TO "Venue";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
