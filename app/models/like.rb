

class Like < ApplicationRecord

  belongs_to :postable, polymorphic: true

end
