class CreateQuizzes < ActiveRecord::Migration
  def change
    create_table :quizzes do |t|
      t.integer :author_id, null: false
      t.text :description, null: false
      t.string :time_limit, null: false
      t.string :title, null: false

      t.timestamps
    end
  end
end
