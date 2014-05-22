class CreateQuizTables < ActiveRecord::Migration
  def change
    create_table :quiz_tables do |t|
      t.integer :quiz_id, null: false
      t.string :hint_header, null: false
      t.string :answer_header, null: false

      t.timestamps
    end
  end
end
