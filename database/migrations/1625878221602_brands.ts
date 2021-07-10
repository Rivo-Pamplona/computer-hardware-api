import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Brands extends BaseSchema {
  protected tableName = 'brands'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('website')
      table.boolean('enabled').defaultTo(false)
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
