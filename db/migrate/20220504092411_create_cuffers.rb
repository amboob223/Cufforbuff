class CreateCuffers < ActiveRecord::Migration[6.1]
  def change
    create_table :cuffers do |t|
      t.string :name, null: false
      t.string :number, null: false #is a constraint on the migration
      t.timestamps
    end
  end
end
