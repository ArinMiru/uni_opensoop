export const isEmailValid = (email: string): boolean => {
  // 간단한 이메일 형식 검증을 위한 정규 표현식
  const emailPattern = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+(ac\.kr)$/;
  return emailPattern.test(email);
};
