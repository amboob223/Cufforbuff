class CreateBluffers < ActiveRecord::Migration[6.1]
  def change#migration are file that allows us to connect sql to ruby the usie active record mthos undert the hood
    create_table :bluffers do |t|
      t.string :name, null: false
      t.string :number, null:false
      t.timestamps
    end
  end
end
