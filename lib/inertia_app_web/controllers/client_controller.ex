defmodule InertiaAppWeb.ClientController do
  use InertiaAppWeb, :controller

  alias InertiaApp.Jewelry
  alias InertiaApp.Jewelry.Client

  def index(conn, _params) do
    clients = Jewelry.list_clients()
    render(conn, "Clients/Index", %{clients: clients})
  end

  def show(conn, %{"id" => id}) do
    client = Jewelry.get_client_with_associations!(id)
    render(conn, "Clients/Show", %{client: client})
  end

  def new(conn, _params) do
    changeset = Jewelry.change_client(%Client{})
    render(conn, "Clients/New", %{changeset: changeset})
  end

  def create(conn, %{"client" => client_params}) do
    case Jewelry.create_client(client_params) do
      {:ok, client} ->
        conn
        |> put_flash(:info, "Client created successfully.")
        |> redirect(to: ~p"/clients/#{client}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "Clients/New", %{changeset: changeset})
    end
  end

  def edit(conn, %{"id" => id}) do
    client = Jewelry.get_client!(id)
    changeset = Jewelry.change_client(client)
    render(conn, "Clients/Edit", %{client: client, changeset: changeset})
  end

  def update(conn, %{"id" => id, "client" => client_params}) do
    client = Jewelry.get_client!(id)

    case Jewelry.update_client(client, client_params) do
      {:ok, client} ->
        conn
        |> put_flash(:info, "Client updated successfully.")
        |> redirect(to: ~p"/clients/#{client}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "Clients/Edit", %{client: client, changeset: changeset})
    end
  end

  def delete(conn, %{"id" => id}) do
    client = Jewelry.get_client!(id)
    {:ok, _client} = Jewelry.delete_client(client)

    conn
    |> put_flash(:info, "Client deleted successfully.")
    |> redirect(to: ~p"/clients")
  end
end