json.extract! quiz_table, :id, :quiz_id, :hint_header, :answer_header, :updated_at, :created_at

json.questions quiz_table.questions.sort_by(&:id), partial: 'api/questions/question', as: :question