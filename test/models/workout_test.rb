# == Schema Information
#
# Table name: workouts
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  title         :string           not null
#  body          :text
#  distance      :integer
#  distance_uom  :string
#  duration      :integer
#  elevation     :integer
#  elevation_uom :string
#  date          :datetime         not null
#  activity      :string           not null
#  subactivity   :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class WorkoutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
