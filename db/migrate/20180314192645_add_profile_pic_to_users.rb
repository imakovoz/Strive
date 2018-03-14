class AddProfilePicToUsers < ActiveRecord::Migration[5.1]
  def up
    remove_column :users, :prof_pic_id, :integer
    add_attachment :users, :profile_pic
  end

  def down
    add_column :users, :prof_pic_id, :integer
    remove_attachment :users, :profile_pic
  end
end
