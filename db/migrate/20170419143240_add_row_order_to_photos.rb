class AddRowOrderToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :row_order, :integer
  end
end
