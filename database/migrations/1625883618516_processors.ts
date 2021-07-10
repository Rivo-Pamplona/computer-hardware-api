import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Processors extends BaseSchema {
  protected tableName = 'processors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('brand_id').unsigned()
      table.foreign('brand_id').references('id').inTable('brands')
      table.string('model')
      table.string('serie')
      table.boolean('enabled').defaultTo(false)
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
