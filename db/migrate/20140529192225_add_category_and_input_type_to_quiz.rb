class AddCategoryAndInputTypeToQuiz < ActiveRecord::Migration
  def change
    add_column :quizzes, :input_type, :string, :default => 'typing', null: false
    add_column :quizzes, :category, :string, :default => 'Just For Fun', null:false
  end
end
