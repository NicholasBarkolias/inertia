defmodule InertiaAppWeb.TaskController do
  use InertiaAppWeb, :controller

  alias InertiaApp.Jewelry
  alias InertiaApp.Jewelry.Task

  def index(conn, _params) do
    tasks = Jewelry.list_tasks()
    render(conn, "Tasks/Index", %{tasks: tasks})
  end

  def show(conn, %{"id" => id}) do
    task = Jewelry.get_task!(id)
    render(conn, "Tasks/Show", %{task: task})
  end

  def new(conn, _params) do
    changeset = Jewelry.change_task(%Task{})
    clients = Jewelry.list_clients()
    render(conn, "Tasks/New", %{
      changeset: changeset,
      clients: clients
    })
  end

  def create(conn, %{"task" => task_params}) do
    case Jewelry.create_task(task_params) do
      {:ok, task} ->
        conn
        |> put_flash(:info, "Task created successfully.")
        |> redirect(to: ~p"/tasks/#{task}")

      {:error, %Ecto.Changeset{} = changeset} ->
        clients = Jewelry.list_clients()
        render(conn, "Tasks/New", %{
          changeset: changeset,
          clients: clients
        })
    end
  end

  def edit(conn, %{"id" => id}) do
    task = Jewelry.get_task!(id)
    changeset = Jewelry.change_task(task)
    clients = Jewelry.list_clients()
    render(conn, "Tasks/Edit", %{
      task: task,
      changeset: changeset,
      clients: clients
    })
  end

  def update(conn, %{"id" => id, "task" => task_params}) do
    task = Jewelry.get_task!(id)

    case Jewelry.update_task(task, task_params) do
      {:ok, task} ->
        conn
        |> put_flash(:info, "Task updated successfully.")
        |> redirect(to: ~p"/tasks/#{task}")

      {:error, %Ecto.Changeset{} = changeset} ->
        clients = Jewelry.list_clients()
        render(conn, "Tasks/Edit", %{
          task: task,
          changeset: changeset,
          clients: clients
        })
    end
  end

  def delete(conn, %{"id" => id}) do
    task = Jewelry.get_task!(id)
    {:ok, _task} = Jewelry.delete_task(task)

    conn
    |> put_flash(:info, "Task deleted successfully.")
    |> redirect(to: ~p"/tasks")
  end
end