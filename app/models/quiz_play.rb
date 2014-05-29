class QuizPlay < ActiveRecord::Base
  belongs_to :quiz, :class_name => "Quiz", :foreign_key => :quiz_id
  belongs_to :user

end
