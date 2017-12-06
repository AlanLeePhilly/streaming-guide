require 'rails_helper'

RSpec.describe Programgenre, type: :model do
  it { should have_valid(:genre_id).when(1) }
  it { should have_valid(:program_id).when(1) }
end
