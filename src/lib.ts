export function conditional(
  fnA: Function,
  fnB: Function,
  condition: boolean | ((...args: any[]) => boolean)
): Function | Promise<Function> {
  if (typeof condition === 'function') {
    return condition() ? fnA : fnB;
  }

  return condition ? fnA : fnB;
}
