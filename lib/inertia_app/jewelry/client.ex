
defmodule InertiaApp.Jewelry.Client do
  use Ecto.Schema
  import Ecto.Changeset

  schema "clients" do
    field :name, :string
    field :email, :string
    field :phone, :string
    field :address, :string
    field :notes, :string

    has_many :bookings, InertiaApp.Jewelry.Booking
    has_many :tasks, InertiaApp.Jewelry.Task
    has_many :photos, InertiaApp.Jewelry.Photo

    timestamps()
  end

  @doc false
  def changeset(client, attrs) do
    client
    |> cast(attrs, [:name, :email, :phone, :address, :notes])
    |> validate_required([:name])
  end
end
