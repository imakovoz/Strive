# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  userid           :integer          not null
#  body             :text             not null
#  commentable_type :string
#  commentable_id   :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#



class Comment < ApplicationRecord

  belongs_to :commentable, polymorphic: true

end
