json.extract! quiz, :title, :id, :author_id, :description, :time_limit, :created_at, :updated_at, :input_type, :category

json.quiz_tables quiz.quiz_tables, partial: 'api/quiz_tables/quiz_table', as: :quiz_table

json.author User.find(quiz.author_id).email

json.quiz_plays quiz.quiz_plays
