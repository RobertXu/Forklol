class Question < ActiveRecord::Base

  belongs_to :quiz_table, :class_name => "QuizTable", :foreign_key => :table_id

  has_one :quiz, :through => :quiz_table, :source => :quiz
end
