function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export function formatFullDate(date) {
  const refDate = new Date(date);
  return (
    [
      padTo2Digits(refDate.getDate()),
      padTo2Digits(refDate.getMonth() + 1),
      refDate.getFullYear(),
    ].join("/") +
    " " +
    [
      padTo2Digits(refDate.getHours()),
      padTo2Digits(refDate.getMinutes()),
      padTo2Digits(refDate.getSeconds()),
    ].join(":")
  );
}

export function formatShortDate(date) {
  const refDate = new Date(date);
  return [
    padTo2Digits(refDate.getDate()),
    padTo2Digits(refDate.getMonth() + 1),
    refDate.getFullYear(),
  ].join("/");
}
