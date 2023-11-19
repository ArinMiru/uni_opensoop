export const timeUntilVoteEnds = (dateString: string | undefined): string => {
  if (typeof dateString !== "string") {
    return "올바른 날짜 형식이 아닙니다.";
  }
  const now = new Date();
  const correctedDate = dateString.replace(/ /g, "T") + "Z";
  const future = new Date(correctedDate);

  if (isNaN(future.getTime())) {
    return "올바른 날짜 형식이 아닙니다.";
  }

  const secondsUntil = (future.getTime() - now.getTime()) / 1000;

  if (secondsUntil < 0) {
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
