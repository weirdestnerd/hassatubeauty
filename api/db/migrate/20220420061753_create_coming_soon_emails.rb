class CreateComingSoonEmails < ActiveRecord::Migration[6.1]
  def change
    create_table :coming_soon_emails do |t|
      t.string :email
      t.boolean :confirmation_email_sent

      t.timestamps
    end
  end
end
