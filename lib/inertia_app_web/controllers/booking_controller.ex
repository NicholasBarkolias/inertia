defmodule InertiaAppWeb.BookingController do
  use InertiaAppWeb, :controller

  alias InertiaApp.Jewelry
  alias InertiaApp.Jewelry.Booking

  def index(conn, _params) do
    bookings = Jewelry.list_bookings()
    render(conn, "Bookings/Index", %{bookings: bookings})
  end

  def show(conn, %{"id" => id}) do
    booking = Jewelry.get_booking!(id)
    render(conn, "Bookings/Show", %{booking: booking})
  end

  def new(conn, _params) do
    changeset = Jewelry.change_booking(%Booking{})
    clients = Jewelry.list_clients()
    services = Jewelry.list_services()
    render(conn, "Bookings/New", %{
      changeset: changeset,
      clients: clients,
      services: services
    })
  end

  def create(conn, %{"booking" => booking_params}) do
    case Jewelry.create_booking(booking_params) do
      {:ok, booking} ->
        conn
        |> put_flash(:info, "Booking created successfully.")
        |> redirect(to: ~p"/bookings/#{booking}")

      {:error, %Ecto.Changeset{} = changeset} ->
        clients = Jewelry.list_clients()
        services = Jewelry.list_services()
        render(conn, "Bookings/New", %{
          changeset: changeset,
          clients: clients,
          services: services
        })
    end
  end

  def edit(conn, %{"id" => id}) do
    booking = Jewelry.get_booking!(id)
    changeset = Jewelry.change_booking(booking)
    clients = Jewelry.list_clients()
    services = Jewelry.list_services()
    render(conn, "Bookings/Edit", %{
      booking: booking,
      changeset: changeset,
      clients: clients,
      services: services
    })
  end

  def update(conn, %{"id" => id, "booking" => booking_params}) do
    booking = Jewelry.get_booking!(id)

    case Jewelry.update_booking(booking, booking_params) do
      {:ok, booking} ->
        conn
        |> put_flash(:info, "Booking updated successfully.")
        |> redirect(to: ~p"/bookings/#{booking}")

      {:error, %Ecto.Changeset{} = changeset} ->
        clients = Jewelry.list_clients()
        services = Jewelry.list_services()
        render(conn, "Bookings/Edit", %{
          booking: booking,
          changeset: changeset,
          clients: clients,
          services: services
        })
    end
  end

  def delete(conn, %{"id" => id}) do
    booking = Jewelry.get_booking!(id)
    {:ok, _booking} = Jewelry.delete_booking(booking)

    conn
    |> put_flash(:info, "Booking deleted successfully.")
    |> redirect(to: ~p"/bookings")
  end
end