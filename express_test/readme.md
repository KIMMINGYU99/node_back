app.js: routes 폴더 안에 파일을 가져와 사용
routes/productRoutes : CRUD 기능 구현
utils/response : CRUD 기능의 성공,실패 응답 함수
middlewares/validator : CRUD 기능 실행 시 발생할 수 있는 에러 처리
services/productService.js : CRUD 기능을 하는 함수 모음집
prisma/prismaClient.js : prismaClient 를 따로 만들어서 사용 시 import할 수 있게함
