class CreateClickLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :click_logs do |t|
      t.integer :user_id
      t.integer :ad_id
      t.integer :click

      t.timestamps
    end
  end
end
