# == Schema Information
#
# Table name: likes
#
#  id            :integer          not null, primary key
#  userid        :integer          not null
#  postable_type :string
#  postable_id   :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#



class Like < ApplicationRecord

  belongs_to :postable, polymorphic: true

end
