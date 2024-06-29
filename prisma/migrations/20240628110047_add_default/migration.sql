-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "steamid" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Server" (
    "id" SERIAL NOT NULL,
    "IP" TEXT NOT NULL,
    "Port" INTEGER NOT NULL,
    "Platform" TEXT NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_steamid_key" ON "User"("steamid");
