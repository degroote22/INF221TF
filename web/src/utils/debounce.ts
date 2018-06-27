export function debounce(func: () => void, wait = 50) {
  let h: number;
  return () => {
    clearTimeout(h);
    h = setTimeout(() => func(), wait) as any;
  };
}
