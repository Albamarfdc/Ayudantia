import { findError } from '../../src/utils/find.error.utils.js'

describe('findError', () => {
  it('debería devolver error 500 si el código no existe', () => {
    const result = findError('99999')
    expect(result.code).toBe('500')
  })

  it('debería devolver error 500 si el código es undefined', () => {
    const result = findError(undefined)
    expect(result.code).toBe('500')
  })
})
