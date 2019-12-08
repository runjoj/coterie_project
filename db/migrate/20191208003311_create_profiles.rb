class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name, null: false
      t.date :birthday, null: false
      t.string :address, null: false
      t.string :email, null: false
      t.integer :salary, null: false
      t.integer :coverage, null: false
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
