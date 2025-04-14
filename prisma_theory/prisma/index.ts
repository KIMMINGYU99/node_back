import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const philosophyStudents = await prisma.students.findMany({
    where: {
      majors: {
        name: "철학과",
      },
    },
    include: {
      majors: true, // 전공 정보도 같이 출력하고 싶을 때
    },
  });

  console.log(philosophyStudents);
}

main();
