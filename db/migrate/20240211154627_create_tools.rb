class CreateTools < ActiveRecord::Migration[7.1]
  def change
    create_table :tools do |t|
      t.string :title
      t.text :description
      t.string :link
      t.text :tags, array: true, default: []

      t.timestamps
    end
  end
end
