class CreateTools < ActiveRecord::Migration[7.1]
  def change
    create_table :tools do |t|
      t.string :title
      t.string :link
      t.string :description
      t.string :tags, array: true, default: []

      t.timestamps
    end
  end
end
