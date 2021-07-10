import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Motherboards extends BaseSchema {
  protected tableName = 'motherboards'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('brand_id').unsigned()
      table.foreign('brand_id').references('id').inTable('brands')
      table.string('soquet')
      table.string('chipset')
      table.boolean('enabled').defaultTo(false)
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
