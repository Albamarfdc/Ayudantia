import { getSongsModel } from '../../src/models/songs.model.js'

describe('getSongsModel', () => {
  it('deberia de traer todos datos', async () => {
    // Llamamos a la función getSongsModel
    const songs = await getSongsModel()

    expect(songs).toHaveLength(18) // Verificamos que la longitud sea correcta
    expect(songs[0]).toHaveProperty('id') // Verificamos que tenga la propiedad id
    expect(songs[0]).toHaveProperty('name') // Verificamos que tenga la propiedad name
    expect(Array.isArray(songs)).toBe(true)
  })
})
