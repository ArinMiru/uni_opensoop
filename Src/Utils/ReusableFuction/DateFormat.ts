export const formatDateString = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
/**
 *  함수화 Date가 스크린에 있으니 코드가 너무 지저분 해짐.
 * @param selectedStartDate 
 * @param selectedEndDate 
 * @param date 
 * @param setSelectedDate 
 * @param hideDatePicker 
 */
export function handleDateConfirm(
  selectedStartDate: string,
  selectedEndDate: string,
  date: Date,
  setSelectedDate: (date: string) => void,
  hideDatePicker: () => void
) {
  const formattedDate = formatDateString(date.toISOString());
  setSelectedDate(formattedDate);

  if (new Date(formattedDate) >= new Date(selectedEndDate)) {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate());
    const nextFormattedDate = formatDateString(nextDay.toISOString());
    setSelectedDate(nextFormattedDate);
  }
  hideDatePicker();
}
