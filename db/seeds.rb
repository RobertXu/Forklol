User.create!([
  {email: "thecrxu@gmail.com", encrypted_password: "$2a$10$FFux23Q9NU6pgDYoNeBRfOV4zvt1Ef1IVFP5rxLxsMUHVqHlm0YMu", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 2, current_sign_in_at: "2014-05-29 04:21:32", last_sign_in_at: "2014-05-29 02:57:27", current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1"}
])
Question.create!([
  {table_id: 1, hint: "I've got that _____", answer: "Summertime", triggers: "[\"summertime\",\"Summertime\"]", times_guessed: 120, times_answered: 98},
  {table_id: 1, hint: "Summertime _____", answer: "Sadness", triggers: "[\"sadness\",\"Sadness\"]", times_guessed: 120, times_answered: 84},
  {table_id: 1, hint: "S-s-summertime, Summertime _____", answer: "Sadness", triggers: "[\"sadness\",\"Sadness\"]", times_guessed: 120, times_answered: 78},
  {table_id: 1, hint: "Got that _____ _____", answer: "Summertime Sadness", triggers: "[\"summertime sadness\",\"Summertime Sadness\"]", times_guessed: 120, times_answered: 71},
  {table_id: 2, hint: "C", answer: "Samuel Dalembert", triggers: "[\"Samuel Dalembert\"]", times_guessed: 1, times_answered: 1},
  {table_id: 2, hint: "SF", answer: "Shawn Marion", triggers: "[\"Shawn Marion\"]", times_guessed: 1, times_answered: 1},
  {table_id: 2, hint: "PG", answer: "Jose Calderon", triggers: "[\"Jose Calderon\"]", times_guessed: 1, times_answered: 1},
  {table_id: 2, hint: "PF", answer: "Dirk Nowitzki", triggers: "[\"Dirk Nowitzki\"]", times_guessed: 1, times_answered: 1},
  {table_id: 2, hint: "SG", answer: "Monta Ellis", triggers: "[\"Monta Ellis\"]", times_guessed: 1, times_answered: 1},
  {table_id: 3, hint: "Squirtle", answer: "Blastoise", triggers: "[\"Blastoise\"]", times_guessed: 7, times_answered: 7},
  {table_id: 3, hint: "Charmander", answer: "Charizard", triggers: "[\"Charizard\"]", times_guessed: 7, times_answered: 4},
  {table_id: 3, hint: "Bulbasaur", answer: "Venasaur", triggers: "[\"Venasaur\"]", times_guessed: 7, times_answered: 6},
  {table_id: 3, hint: "Mewtwo", answer: "Mewtwo", triggers: "[\"Mewtwo\"]", times_guessed: 7, times_answered: 4},
  {table_id: 3, hint: "Sandshrew", answer: "Sandslash", triggers: "[\"Sandslash\"]", times_guessed: 7, times_answered: 4},
  {table_id: 3, hint: "Gastly", answer: "Gengar", triggers: "[\"Gengar\"]", times_guessed: 7, times_answered: 4}
])
Quiz.create!([
  {author_id: 1, description: "Fill in the lyrics to the Lana Del Rey song.", time_limit: "0:10", title: "Summertime Sadness", input_type: "typing", category: "Just For Fun"},
  {author_id: 1, description: "Match the starters for the Dallas Mavericks with their respective position", time_limit: "1:00", title: "Mixed Up Mavericks", input_type: "typing", category: "Just For Fun"},
  {author_id: 1, description: "Match each Pokemon with it's evolved form.", time_limit: "1:30", title: "Pokemon Parentage", input_type: "clicking", category: "Gaming"}
])
QuizPlay.create!([
  {quiz_id: 1, score: 2, num_plays: 8, user_id: 1},
  {quiz_id: 1, score: 3, num_plays: 12, user_id: 1},
  {quiz_id: 1, score: 0, num_plays: 19, user_id: 1},
  {quiz_id: 2, score: 0, num_plays: 0, user_id: 1},
  {quiz_id: 2, score: 1, num_plays: 0, user_id: 1},
  {quiz_id: 2, score: 2, num_plays: 0, user_id: 1},
  {quiz_id: 2, score: 3, num_plays: 0, user_id: 1},
  {quiz_id: 2, score: 4, num_plays: 0, user_id: 1},
  {quiz_id: 2, score: 5, num_plays: 1, user_id: 1},
  {quiz_id: 3, score: 0, num_plays: 0, user_id: 1},
  {quiz_id: 3, score: 3, num_plays: 0, user_id: 1},
  {quiz_id: 1, score: 1, num_plays: 15, user_id: 1},
  {quiz_id: 3, score: 4, num_plays: 0, user_id: 1},
  {quiz_id: 3, score: 5, num_plays: 0, user_id: 1},
  {quiz_id: 3, score: 2, num_plays: 2, user_id: 1},
  {quiz_id: 1, score: 4, num_plays: 66, user_id: 1},
  {quiz_id: 3, score: 6, num_plays: 4, user_id: 1},
  {quiz_id: 3, score: 1, num_plays: 1, user_id: 1}
])
QuizTable.create!([
  {quiz_id: 1, hint_header: "Preceding Lyrics", answer_header: "Current Lyric"},
  {quiz_id: 2, hint_header: "Position", answer_header: "Player"},
  {quiz_id: 3, hint_header: "Pokemon", answer_header: "Evolved Form"}
])
