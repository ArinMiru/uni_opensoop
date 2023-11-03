export const timeSince = (dateString: string): string => {
  const now = new Date();
  const correctedDate = dateString.replace(/ /g, "T") + "Z";
  const past = new Date(correctedDate);

  if (isNaN(past.getTime())) {
    console.error(`잘못된 날짜 형식: ${correctedDate}`);
    return "올바른 날짜 형식이 아닙니다.";
  }

  const secondsPast = (now.getTime() - past.getTime()) / 1000;

  if (secondsPast < 60) {
    return "방금 전";
  } else if (secondsPast < 3600) {
    // 1분 이상 1시간 미만일 때
    return `${Math.floor(secondsPast / 60)}분 전`;
  } else if (secondsPast < 86400) {
    // 1시간 이상 1일 미만일 때
    return `${Math.floor(secondsPast / 3600)}시간 전`;
  } else if (secondsPast < 2592000) {
    // 1일 이상 1개월 미만일 때
    const daysPast = Math.floor(secondsPast / 86400);
    return `${daysPast}일 전`;
  } else {
    // 1개월 이상일 때
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const localeDateString = past.toLocaleDateString("ko-KR", options);
    return localeDateString;
  }
};
