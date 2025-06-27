
defmodule InertiaApp.Jewelry.Photo do
  use Ecto.Schema
  import Ecto.Changeset

  schema "photos" do
    field :filename, :string
    field :original_filename, :string
    field :content_type, :string
    field :file_size, :integer
    field :description, :string

    belongs_to :client, InertiaApp.Jewelry.Client
    belongs_to :booking, InertiaApp.Jewelry.Booking
    belongs_to :task, InertiaApp.Jewelry.Task

    timestamps()
  end

  @doc false
  def changeset(photo, attrs) do
    photo
    |> cast(attrs, [:filename, :original_filename, :content_type, :file_size, :description, :client_id, :booking_id, :task_id])
    |> validate_required([:filename, :original_filename, :content_type, :file_size])
  end
end
