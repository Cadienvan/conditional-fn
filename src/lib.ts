export function conditional<T>(
  fnA: Function,
  fnB: Function,
  condition: boolean | ((...args: any[]) => boolean)
): Function {
  return function (...args: any[]): T {
    if (typeof condition === 'function') {
      return condition(...args) ? fnA(...args) : fnB(...args);
    }

    return condition ? fnA(...args) : fnB(...args);
  };
}
