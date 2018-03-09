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

class Workout < ApplicationRecord

  validates :user, :title, :date, presence: true

  belongs_to :user

end
