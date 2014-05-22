class Quiz < ActiveRecord::Base

  belongs_to :author, :class_name => "User", :foreign_key => :author_id
  has_many :quiz_tables, :class_name => "QuizTable", :foreign_key => :quiz_id

  has_many :questions, :through => :quiz_tables, :source => :questions
end
