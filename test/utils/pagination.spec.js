import pagination from '../../src/utils/paginator.js'
import { faker } from '@faker-js/faker'

describe('pagination', () => {
  const generateFakeData = (length) =>
    Array.from({ length }, () => ({
      id: faker.string.uuid(),
      title: faker.music.songName(),
      artist: faker.person.fullName()
    }))

  it('debería paginar correctamente', () => {
    const data = generateFakeData(20)

    const result = pagination(data, 5, 2)

    expect(result.results).toHaveLength(5)
    expect(result.next).toEqual({ page: 3, items: 5 })
    expect(result.previous).toEqual({ page: 1, items: 5 })
  })

  it('debería manejar página 1 correctamente', () => {
    const data = generateFakeData(10)

    const result = pagination(data, 5, 1)

    expect(result.results).toHaveLength(5)
    expect(result.previous).toBeUndefined()
    expect(result.next).toEqual({ page: 2, items: 5 })
  })

  it('debería devolver datos vacíos si no hay más resultados', () => {
    const data = generateFakeData(12)

    const result = pagination(data, 10, 2)

    expect(result.results).toHaveLength(2)
    expect(result.next).toBeUndefined()
    expect(result.previous).toEqual({ page: 1, items: 10 })
  })
})
