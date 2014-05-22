class QuizTable < ActiveRecord::Base
  belongs_to :quiz, :class_name => "Quiz", :foreign_key => :quiz_id
  has_many :questions, :class_name => "Question", :foreign_key => :table_id

end
