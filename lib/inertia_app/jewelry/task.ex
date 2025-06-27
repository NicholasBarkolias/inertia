
defmodule InertiaApp.Jewelry.Task do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tasks" do
    field :title, :string
    field :description, :string
    field :category, :string
    field :priority, :string
    field :status, :string
    field :due_date, :date

    belongs_to :client, InertiaApp.Jewelry.Client
    has_many :photos, InertiaApp.Jewelry.Photo

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :category, :priority, :status, :due_date, :client_id])
    |> validate_required([:title, :category, :priority, :status])
  end
end
