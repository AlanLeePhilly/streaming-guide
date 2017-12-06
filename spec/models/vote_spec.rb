require 'rails_helper'

RSpec.describe Vote, type: :model do
  it { should have_valid(:review_id).when(1) }
  it { should have_valid(:user_id).when(1) }
  it { should have_valid(:value).when(0) }
  it { should belong_to(:user) }
  it { should belong_to(:review) }
end
