import Route from '@ioc:Adonis/Core/Route'

Route.get('brands', 'BrandsController.list')

Route.get('brands/:id', 'BrandsController.getById')
Route.post('brands', 'BrandsController.create')
Route.put('brands/:id', 'BrandsController.update')
Route.delete('brands/:id', 'BrandsController.remove')
