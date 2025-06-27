defmodule InertiaAppWeb.ServiceController do
  use InertiaAppWeb, :controller

  alias InertiaApp.Jewelry
  alias InertiaApp.Jewelry.Service

  def index(conn, _params) do
    services = Jewelry.list_services()
    render(conn, "Services/Index", %{services: services})
  end

  def show(conn, %{"id" => id}) do
    service = Jewelry.get_service!(id)
    render(conn, "Services/Show", %{service: service})
  end

  def new(conn, _params) do
    changeset = Jewelry.change_service(%Service{})
    render(conn, "Services/New", %{changeset: changeset})
  end

  def create(conn, %{"service" => service_params}) do
    case Jewelry.create_service(service_params) do
      {:ok, service} ->
        conn
        |> put_flash(:info, "Service created successfully.")
        |> redirect(to: ~p"/services/#{service}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "Services/New", %{changeset: changeset})
    end
  end

  def edit(conn, %{"id" => id}) do
    service = Jewelry.get_service!(id)
    changeset = Jewelry.change_service(service)
    render(conn, "Services/Edit", %{service: service, changeset: changeset})
  end

  def update(conn, %{"id" => id, "service" => service_params}) do
    service = Jewelry.get_service!(id)

    case Jewelry.update_service(service, service_params) do
      {:ok, service} ->
        conn
        |> put_flash(:info, "Service updated successfully.")
        |> redirect(to: ~p"/services/#{service}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "Services/Edit", %{service: service, changeset: changeset})
    end
  end

  def delete(conn, %{"id" => id}) do
    service = Jewelry.get_service!(id)
    {:ok, _service} = Jewelry.delete_service(service)

    conn
    |> put_flash(:info, "Service deleted successfully.")
    |> redirect(to: ~p"/services")
  end
end