User.create!([
  {email: "thecrxu@gmail.com", encrypted_password: "$2a$10$FFux23Q9NU6pgDYoNeBRfOV4zvt1Ef1IVFP5rxLxsMUHVqHlm0YMu", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 2, current_sign_in_at: "2014-05-29 04:21:32", last_sign_in_at: "2014-05-29 02:57:27", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"}
])
Question.create!([
  {table_id: 1, hint: "I've got that _____", answer: "Summertime", triggers: "[\"summertime\",\"Summertime\"]", times_guessed: 50, times_answered: 45},
  {table_id: 1, hint: "Summertime _____", answer: "Sadness", triggers: "[\"sadness\",\"Sadness\"]", times_guessed: 50, times_answered: 40},
  {table_id: 1, hint: "S-s-summertime, Summertime _____", answer: "Sadness", triggers: "[\"sadness\",\"Sadness\"]", times_guessed: 50, times_answered: 39},
  {table_id: 1, hint: "Got that _____ _____", answer: "Summertime Sadness", triggers: "[\"summertime sadness\",\"Summertime Sadness\"]", times_guessed: 50, times_answered: 37}
])
Quiz.create!([
  {author_id: 1, description: "Fill in the lyrics to the Lana Del Rey song.", time_limit: "0:10", title: "Summertime Sadness"}
])
QuizPlay.create!([
  {quiz_id: 1, score: 0, num_plays: 3, user_id: 1},
  {quiz_id: 1, score: 1, num_plays: 6, user_id: 1},
  {quiz_id: 1, score: 2, num_plays: 3, user_id: 1},
  {quiz_id: 1, score: 3, num_plays: 3, user_id: 1},
  {quiz_id: 1, score: 4, num_plays: 35, user_id: 1}
])
QuizTable.create!([
  {quiz_id: 1, hint_header: "Preceding Lyrics", answer_header: "Current Lyric"}
])
