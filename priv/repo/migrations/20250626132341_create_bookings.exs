defmodule InertiaApp.Repo.Migrations.CreateBookings do
  use Ecto.Migration

  def change do
    create table(:bookings) do
      add :scheduled_at, :utc_datetime
      add :status, :string
      add :notes, :text
      add :client_id, references(:clients, on_delete: :delete_all)
      add :service_id, references(:services, on_delete: :delete_all)

      timestamps()
    end
  end
end