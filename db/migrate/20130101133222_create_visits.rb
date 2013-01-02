class CreateVisits < ActiveRecord::Migration
  def change
    create_table :visits do |t|
      t.string :Agenda
      t.text :Description
      t.string :time
      t.text :customers

      t.timestamps
    end
  end
end
