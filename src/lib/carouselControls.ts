interface CarouselControl<T> {
  currentCount: number;
  content: T[];
}

export function goForward<T>({
  currentCount,
  content,
}: CarouselControl<T>): number {
  return (currentCount + 1) % content.length;
}

export function goBackward<T>({
  currentCount,
  content,
}: CarouselControl<T>): number {
  return (currentCount - 1 + content.length) % content.length;
}
