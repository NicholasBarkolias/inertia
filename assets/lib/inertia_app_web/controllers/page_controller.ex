defmodule InertiaAppWeb.PageController do
  use InertiaAppWeb, :controller

  def home(conn, _params) do
    render_inertia(conn, "Home")
  end
end
