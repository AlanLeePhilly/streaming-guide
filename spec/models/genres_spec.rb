require 'rails_helper'

RSpec.describe Genre, type: :model do
  it { should have_valid(:name).when('horror') }
end
