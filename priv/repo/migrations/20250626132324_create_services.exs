defmodule InertiaApp.Repo.Migrations.CreateServices do
  use Ecto.Migration

  def change do
    create table(:services) do
      add :name, :string
      add :description, :text
      add :duration, :integer
      add :price, :decimal
      add :active, :boolean, default: true

      timestamps()
    end
  end
end