defmodule InertiaApp.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :title, :string
      add :description, :text
      add :category, :string
      add :priority, :string
      add :status, :string
      add :due_date, :date
      add :client_id, references(:clients, on_delete: :delete_all)

      timestamps()
    end
  end
end