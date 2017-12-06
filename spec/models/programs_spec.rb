require 'rails_helper'

RSpec.describe Program, type: :model do
  it { should have_valid(:title).when('Bobs Burgers') }
  it { should have_valid(:year).when('1945') }
  it { should have_valid(:rated).when('TV-MA') }
  it { should have_valid(:run_time).when('24 min') }
  it { should have_valid(:genre).when('horror') }
  it { should have_valid(:actor).when('bob') }
  it { should have_valid(:plot).when('Bob maken dem burgers') }
  it { should have_valid(:award).when('78 emmys') }
  it { should have_valid(:poster_url).when('www.pic.com') }
  it { should have_valid(:imdb_id).when('TT123456') }
  it { should have_valid(:total_seasons).when(3) }
  it { should have_valid(:user_id).when(1) }
  it { should belong_to(:user) }
  it { should have_many(:reviews) }
  it { should have_many(:programgenres) }
  it { should have_many(:genres), through: :programgenres }
end
