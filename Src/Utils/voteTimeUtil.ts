export const timeUntilVoteEnds = (dateString: string | undefined): string => {
  if (typeof dateString !== "string") {
    console.error("dateString 인자가 제공되지 않았습니다.");
    return "올바른 날짜 형식이 아닙니다.";
  }
  console.log(`원본 dateString: ${dateString}`);
  const now = new Date();
  const correctedDate = dateString.replace(/ /g, "T") + "Z";
  const future = new Date(correctedDate);

  console.log(`수정된 dateString: ${correctedDate}`);
  console.log(`현재 날짜 및 시간: ${now}`);
  console.log(`투표 종료 예정 날짜 및 시간: ${future}`);

  if (isNaN(future.getTime())) {
    console.error(`잘못된 날짜 형식: ${correctedDate}`);
    return "올바른 날짜 형식이 아닙니다.";
  }

  const secondsUntil = (future.getTime() - now.getTime()) / 1000;

  if (secondsUntil < 0) {
    console.log("투표가 이미 종료되었습니다. 과거 날짜 반환.");
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return future.toLocaleDateString("ko-KR", options); // "년 월 일" 형식으로 변환
  }
  if (secondsUntil < 60) {
    return `${Math.round(secondsUntil)}초 남음`;
  }
  if (secondsUntil < 3600) {
    return `${Math.round(secondsUntil / 60)}분 남음`;
  }
  if (secondsUntil < 86400) {
    return `${Math.round(secondsUntil / 3600)}시간 남음`;
  }
  const daysUntil = Math.round(secondsUntil / 86400);
  if (daysUntil <= 30) {
    return `${daysUntil}일 남음`;
  }
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const localeDateString = future.toLocaleDateString("ko-KR", options);
  return `투표 종료일: ${localeDateString}`;
};
