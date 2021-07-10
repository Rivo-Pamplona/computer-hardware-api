import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MotherboardHasProcessors extends BaseSchema {
  protected tableName = 'motherboard_has_processors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('motherboard_id').unsigned()
      table.foreign('motherboard_id').references('id').inTable('motherboards')
      table.integer('processors_id').unsigned()
      table.foreign('processors_id').references('id').inTable('processors')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
