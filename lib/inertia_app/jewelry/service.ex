
defmodule InertiaApp.Jewelry.Service do
  use Ecto.Schema
  import Ecto.Changeset

  schema "services" do
    field :name, :string
    field :description, :string
    field :duration, :integer
    field :price, :decimal
    field :active, :boolean, default: true

    has_many :bookings, InertiaApp.Jewelry.Booking

    timestamps()
  end

  @doc false
  def changeset(service, attrs) do
    service
    |> cast(attrs, [:name, :description, :duration, :price, :active])
    |> validate_required([:name, :duration, :price])
  end
end
