class RemovePositionFromQuestions < ActiveRecord::Migration
  def change
      remove_column :questions, :position
  end
end
