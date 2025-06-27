
defmodule InertiaApp.Jewelry do
  @moduledoc """
  The Jewelry context.
  """

  import Ecto.Query, warn: false
  alias InertiaApp.Repo

  alias InertiaApp.Jewelry.Client
  alias InertiaApp.Jewelry.Service
  alias InertiaApp.Jewelry.Booking
  alias InertiaApp.Jewelry.Task
  alias InertiaApp.Jewelry.Photo

  # Client functions
  def list_clients do
    Repo.all(Client)
  end

  def get_client!(id), do: Repo.get!(Client, id)

  def get_client_with_associations!(id) do
    Client
    |> Repo.get!(id)
    |> Repo.preload([:bookings, :tasks, :photos])
  end

  def create_client(attrs \\ %{}) do
    %Client{}
    |> Client.changeset(attrs)
    |> Repo.insert()
  end

  def update_client(%Client{} = client, attrs) do
    client
    |> Client.changeset(attrs)
    |> Repo.update()
  end

  def delete_client(%Client{} = client) do
    Repo.delete(client)
  end

  def change_client(%Client{} = client, attrs \\ %{}) do
    Client.changeset(client, attrs)
  end

  # Service functions
  def list_services do
    Repo.all(Service)
  end

  def get_service!(id), do: Repo.get!(Service, id)

  def create_service(attrs \\ %{}) do
    %Service{}
    |> Service.changeset(attrs)
    |> Repo.insert()
  end

  def update_service(%Service{} = service, attrs) do
    service
    |> Service.changeset(attrs)
    |> Repo.update()
  end

  def delete_service(%Service{} = service) do
    Repo.delete(service)
  end

  def change_service(%Service{} = service, attrs \\ %{}) do
    Service.changeset(service, attrs)
  end

  # Booking functions
  def list_bookings do
    Booking
    |> Repo.all()
    |> Repo.preload([:client, :service])
  end

  def get_booking!(id) do
    Booking
    |> Repo.get!(id)
    |> Repo.preload([:client, :service, :photos])
  end

  def create_booking(attrs \\ %{}) do
    %Booking{}
    |> Booking.changeset(attrs)
    |> Repo.insert()
  end

  def update_booking(%Booking{} = booking, attrs) do
    booking
    |> Booking.changeset(attrs)
    |> Repo.update()
  end

  def delete_booking(%Booking{} = booking) do
    Repo.delete(booking)
  end

  def change_booking(%Booking{} = booking, attrs \\ %{}) do
    Booking.changeset(booking, attrs)
  end

  # Task functions
  def list_tasks do
    Task
    |> Repo.all()
    |> Repo.preload([:client])
  end

  def get_task!(id) do
    Task
    |> Repo.get!(id)
    |> Repo.preload([:client, :photos])
  end

  def create_task(attrs \\ %{}) do
    %Task{}
    |> Task.changeset(attrs)
    |> Repo.insert()
  end

  def update_task(%Task{} = task, attrs) do
    task
    |> Task.changeset(attrs)
    |> Repo.update()
  end

  def delete_task(%Task{} = task) do
    Repo.delete(task)
  end

  def change_task(%Task{} = task, attrs \\ %{}) do
    Task.changeset(task, attrs)
  end

  # Photo functions
  def list_photos do
    Photo
    |> Repo.all()
    |> Repo.preload([:client, :booking, :task])
  end

  def get_photo!(id) do
    Photo
    |> Repo.get!(id)
    |> Repo.preload([:client, :booking, :task])
  end

  def create_photo(attrs \\ %{}) do
    %Photo{}
    |> Photo.changeset(attrs)
    |> Repo.insert()
  end

  def update_photo(%Photo{} = photo, attrs) do
    photo
    |> Photo.changeset(attrs)
    |> Repo.update()
  end

  def delete_photo(%Photo{} = photo) do
    Repo.delete(photo)
  end

  def change_photo(%Photo{} = photo, attrs \\ %{}) do
    Photo.changeset(photo, attrs)
  end
end
