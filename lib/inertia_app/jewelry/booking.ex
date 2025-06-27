
defmodule InertiaApp.Jewelry.Booking do
  use Ecto.Schema
  import Ecto.Changeset

  schema "bookings" do
    field :scheduled_at, :utc_datetime
    field :status, :string
    field :notes, :string

    belongs_to :client, InertiaApp.Jewelry.Client
    belongs_to :service, InertiaApp.Jewelry.Service
    has_many :photos, InertiaApp.Jewelry.Photo

    timestamps()
  end

  @doc false
  def changeset(booking, attrs) do
    booking
    |> cast(attrs, [:scheduled_at, :status, :notes, :client_id, :service_id])
    |> validate_required([:scheduled_at, :status, :client_id, :service_id])
  end
end
