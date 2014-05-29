class QuizPlays < ActiveRecord::Migration
  def change
    create_table :quiz_plays do |t|
      t.integer :quiz_id, null: false
      t.integer :score, null: false
      t.integer :num_plays, null: false, :default => 0
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :quiz_plays, :quiz_id
    add_index :quiz_plays, :user_id
  end
end
