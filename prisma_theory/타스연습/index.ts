import { PrismaClient } from "@prisma/client";
const { Managers } = require("./manager/base.ts");

const prisma = new PrismaClient();

const main = async () => {
  while (true) {
    Managers.prompt.makeConsole("1. 학생 관련 내용");
    Managers.prompt.makeConsole("2. 수강과목 관련 내용");
    const answer = await Managers.prompt.askQuestion("번호입력 :");

    if (answer == "1") {
      Managers.prompt.makeConsole("1. 학생 등록");
      Managers.prompt.makeConsole("2. 학생 수정");
      Managers.prompt.makeConsole("3. 학생 삭제");
      Managers.prompt.makeConsole("4. 학생 조회");

      const workNum = await Managers.prompt.askQuestion("번호입력 :");

      if (workNum == "1") {
        const name = await Managers.prompt.askQuestion("학생 이름 입력: ");
        const ageStr = await Managers.prompt.askQuestion(
          "학생 나이 입력 (기본 20): "
        );
        const age = ageStr ? parseInt(ageStr, 10) : 20;

        const majorIdStr = await Managers.prompt.askQuestion("전공 ID 입력: ");
        const major_id = parseInt(majorIdStr, 10);

        const admissionStr = await Managers.prompt.askQuestion(
          "입학 연도 입력 (예: 2023): "
        );
        const admission = admissionStr ? parseInt(admissionStr, 10) : null;

        try {
          const lastStudent = await prisma.students.findFirst({
            orderBy: { id: "desc" },
          });

          const student = await prisma.students.create({
            data: {
              name,
              age,
              major_id,
              admission,
            },
          });
          Managers.prompt.makeConsole(
            `학생 등록 완료: ${student.name} (ID: ${student.id}) (나이 : ${student.age}) (전공ID : ${student.major_id}) (입학년도 : ${student.admission})`
          );
        } catch (err) {
          Managers.prompt.makeConsole("학생 등록 중 오류 발생!");
          console.error(err);
        }
      } else if (workNum == "2") {
        const idStr = await Managers.prompt.askQuestion(
          "수정할 학생 ID 입력: "
        );
        const id = parseInt(idStr, 10);

        const name = await Managers.prompt.askQuestion(
          "학생 이름 수정 (생략 시 유지): "
        );
        const ageStr = await Managers.prompt.askQuestion(
          "학생 나이 수정 (생략 시 유지): "
        );
        const majorIdStr = await Managers.prompt.askQuestion(
          "전공 ID 수정 (생략 시 유지): "
        );
        const admissionStr = await Managers.prompt.askQuestion(
          "입학 연도 수정 (생략 시 유지): "
        );

        const data: any = {};
        if (name.trim()) data.name = name.trim();
        if (ageStr.trim()) data.age = parseInt(ageStr, 10);
        if (majorIdStr.trim()) data.major_id = parseInt(majorIdStr, 10);
        if (admissionStr.trim()) data.admission = parseInt(admissionStr, 10);

        try {
          const student = await prisma.students.update({
            where: { id },
            data,
          });

          Managers.prompt.makeConsole(
            `학생 정보 수정 완료: ${student.name} (ID: ${student.id}) (나이: ${student.age}) (전공ID: ${student.major_id}) (입학년도: ${student.admission})`
          );
        } catch (err) {
          Managers.prompt.makeConsole("학생 정보 수정 중 오류 발생!");
          console.error(err);
        }
      } else if (workNum == "3") {
        const idStr = await Managers.prompt.askQuestion(
          "삭제할 학생 ID 입력: "
        );
        const id = parseInt(idStr, 10);

        try {
          const student = await prisma.students.findUnique({
            where: { id },
          });

          if (!student) {
            Managers.prompt.makeConsole("해당 ID의 학생을 찾을 수 없습니다.");
            return;
          }

          Managers.prompt.makeConsole("🔎 삭제 대상 학생 정보:");
          Managers.prompt.makeConsole(student);

          const confirm = await Managers.prompt.askQuestion(
            "정말 삭제하시겠습니까? (y/n): "
          );
          if (confirm.toLowerCase() !== "y") {
            Managers.prompt.makeConsole("삭제가 취소되었습니다.");
            return;
          }

          await prisma.students.delete({
            where: { id },
          });

          Managers.prompt.makeConsole(
            `학생(ID: ${id}, 이름 : ${student.name}) 삭제 완료.`
          );
        } catch (err) {
          Managers.prompt.makeConsole("삭제 중 오류 발생!");
          console.error(err);
        }
      } else if (workNum == "4") {
        Managers.prompt.makeConsole("1. ID로 조회");
        Managers.prompt.makeConsole("2. 이름으로 조회");
        const searchType = await Managers.prompt.askQuestion(
          "조회 방식 선택 (1 또는 2): "
        );

        if (searchType === "1") {
          const idStr = await Managers.prompt.askQuestion(
            "조회할 학생 ID 입력: "
          );
          const id = parseInt(idStr, 10);

          try {
            const student = await prisma.students.findUnique({
              where: { id },
            });

            if (!student) {
              Managers.prompt.makeConsole("해당 ID의 학생을 찾을 수 없습니다.");
              return;
            }

            Managers.prompt.makeConsole("조회된 학생 정보:");
            Managers.prompt.makeConsole(JSON.stringify(student, null, 2));
          } catch (err) {
            Managers.prompt.makeConsole("조회 중 오류 발생!");
            console.error(err);
          }
        } else if (searchType === "2") {
          const name = await Managers.prompt.askQuestion(
            "조회할 학생 이름 입력: "
          );

          try {
            const students = await prisma.students.findMany({
              where: {
                name: {
                  contains: name,
                },
              },
            });

            if (students.length === 0) {
              Managers.prompt.makeConsole(
                "해당 이름의 학생을 찾을 수 없습니다."
              );
              return;
            }

            Managers.prompt.makeConsole(
              `'${name}' 이름으로 조회된 학생 수: ${students.length}`
            );
            students.forEach((student) => {
              Managers.prompt.makeConsole("------------");
              Managers.prompt.makeConsole(JSON.stringify(student, null, 2));
            });
          } catch (err) {
            Managers.prompt.makeConsole("이름으로 조회 중 오류 발생!");
            console.error(err);
          }
        } else {
          Managers.prompt.makeConsole("올바른 번호를 입력해주세요.");
        }
      }
    } else if (answer == "2") {
      Managers.prompt.makeConsole("1. 학생 수강과목 등록");
      Managers.prompt.makeConsole("2. 학생 수강과목 철회");
      const workNum = await Managers.prompt.askQuestion("번호입력 :");
      if (workNum == "1") {
        const student = await Managers.prompt.askQuestion("학생 id 입력: ");
        const course = await Managers.prompt.askQuestion("과목 id 입력: ");
        const student_id = parseInt(student, 10);
        const course_id = parseInt(course, 10);
        try {
          const enrollment = await prisma.enrollments.create({
            data: {
              course_id,
              student_id,
            },
          });
          Managers.prompt.makeConsole(
            `수강 정보 등록 완료: (수강과목 : ${enrollment.course_id}) (학생: ${enrollment.student_id})`
          );
        } catch (err) {
          Managers.prompt.makeConsole("학생 등록 중 오류 발생!");
          console.error(err);
        }
      } else if (workNum == "2") {
        const idStr = await Managers.prompt.askQuestion(
          "삭제할 수강정보 ID 입력: "
        );
        const id = parseInt(idStr, 10);

        try {
          const enrollment = await prisma.enrollments.findUnique({
            where: { id },
          });

          if (!enrollment) {
            Managers.prompt.makeConsole("해당 ID의 학생을 찾을 수 없습니다.");
            return;
          }

          Managers.prompt.makeConsole("🔎 삭제 대상 학생 정보:");
          Managers.prompt.makeConsole(enrollment);

          const confirm = await Managers.prompt.askQuestion(
            "정말 삭제하시겠습니까? (y/n): "
          );
          if (confirm.toLowerCase() !== "y") {
            Managers.prompt.makeConsole("삭제가 취소되었습니다.");
            return;
          }

          await prisma.students.delete({
            where: { id },
          });

          Managers.prompt.makeConsole(
            `수강정보 : ${enrollment.id}) 삭제 완료.`
          );
        } catch (err) {
          Managers.prompt.makeConsole("삭제 중 오류 발생!");
          console.error(err);
        }
      }
    }
  }
};

main();
