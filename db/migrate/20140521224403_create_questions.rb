class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :position, null: false
      t.integer :table_id, null: false
      t.text :hint
      t.text :answer, null: false
      t.text :triggers, null: false

      t.timestamps
    end
  end
end
