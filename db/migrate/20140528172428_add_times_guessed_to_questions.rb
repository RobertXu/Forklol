class AddTimesGuessedToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :times_guessed, :integer, :default => 0
    add_column :questions, :times_answered, :integer, :default => 0
  end
end
