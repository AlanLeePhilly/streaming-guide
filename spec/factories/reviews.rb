FactoryBot.define do
  factory :review do
    program
    user
    username 'secondjlee'
    headline 'Just OK'
    body 'Didn\'t hate it'
    rating 3
  end
end
