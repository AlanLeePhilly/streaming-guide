FactoryBot.define do
  factory :user do
    first_name 'chris'
    last_name 'fo'
    user_name 'chrisf'
    password 'passwordchris'

    sequence(:email) { |n| "chris#{n}@gmail.com" }
  end
end
