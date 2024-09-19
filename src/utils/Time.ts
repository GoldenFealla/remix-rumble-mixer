export function formatSecond(second: number) {
  const mins = Math.floor(second / 60);
  const seconds = Math.floor(second - mins * 60);

  return `${String(mins).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
