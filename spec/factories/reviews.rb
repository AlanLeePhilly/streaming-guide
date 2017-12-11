FactoryBot.define do
  factory :review do
    program
    user
    headline 'Just OK'
    body 'Didn\'t hate it'
    rating 3
  end
end
