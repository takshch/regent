import optic from './optic'

export function multiply (left: any, right: any): any {
  return left * right // eslint-disable-line
}

/**
 * An optic that returns the result of the multiplication operator.
 *
 * @param  {any} left
 * @param  {any} right
 * @returns any
 * @example
 * import { multiply, plus, lessThanOrEquals } from regent
 *
 * const C_RATIO = 5/9
 * const F_CONST = 32
 * const C_TO_F = plus(multiply('@temperature', C_RATIO), F_CONST)
 * const FREEZING = lessThanOrEquals(C_TO_F, 32)
 * FREEZING({ temperature: 0 }) // true
 * FREEZING({ temperature: 1 }) // false
 *
 */
export default optic(multiply, 'multiply')
