defmodule InertiaApp.Repo.Migrations.CreateClients do
  use Ecto.Migration

  def change do
    create table(:clients) do
      add :name, :string
      add :email, :string
      add :phone, :string
      add :address, :text
      add :notes, :text

      timestamps()
    end
  end
end