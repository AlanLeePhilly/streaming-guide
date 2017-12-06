require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should have_valid(:program_id).when(1) }
  it { should have_valid(:user_id).when(1) }
  it { should have_valid(:headline).when("This review rocks") }
  it { should have_valid(:body).when("this review is pretty bad") }
  it { should have_valid(:rating).when(0) }
  it { should have_valid(:vote_count).when(0) }
  it { should belong_to(:user)}
  it { should belong_to(:program)}

end
