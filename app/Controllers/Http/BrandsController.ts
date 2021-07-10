import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Brand from 'App/Models/Brand'
export default class BrandsController {
  public async list({ response }: HttpContextContract) {
    const data = await Brand.all()
    return response.send(data)
  }

  public async getById({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const data = await Brand.find(id)
    return response.send(data)
  }
  public async create({ request, response }: HttpContextContract) {
    const values: any = request.only(['name'])
    const data = await Brand.create(values)
    return response.send(data)
  }
  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const values: any = request.only(['name'])
    await Brand.query().where('id', id).update(values)
    const data = await Brand.find(id)
    return response.send(data)
  }
  public async remove({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const data = await Brand.findOrFail(id)
    await data.delete()
    return response.send(true)
  }
}
