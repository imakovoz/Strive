class Authortouser < ActiveRecord::Migration[5.1]
  def change
    rename_column :posts, :author_id, :user_id
  end
end
