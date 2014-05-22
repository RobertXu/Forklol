class Question < ActiveRecord::Base

  belongs_to :quiz_table, :class_name => "QuizTable", :foreign_key => :table_id
end
