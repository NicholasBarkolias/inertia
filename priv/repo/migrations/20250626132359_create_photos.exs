defmodule InertiaApp.Repo.Migrations.CreatePhotos do
  use Ecto.Migration

  def change do
    create table(:photos) do
      add :filename, :string
      add :original_filename, :string
      add :content_type, :string
      add :file_size, :integer
      add :description, :text
      add :client_id, references(:clients, on_delete: :delete_all)
      add :booking_id, references(:bookings, on_delete: :delete_all)
      add :task_id, references(:tasks, on_delete: :delete_all)

      timestamps()
    end
  end
end