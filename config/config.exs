# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :inertia_app,
  ecto_repos: [InertiaApp.Repo],
  generators: [timestamp_type: :utc_datetime]

# Configures the endpoint
config :inertia_app, InertiaAppWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: InertiaAppWeb.ErrorHTML, json: InertiaAppWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: InertiaApp.PubSub,
  live_view: [signing_salt: "ZhMwFjNJ"]

# Configure inertia
config :inertia,
  endpoint: InertiaAppWeb.Endpoint,
  static_paths: ["/assets/app.js"],
  default_version: "1",
  camelize_props: true,
  history: [encrypt: false],
  ssr: false,
  raise_on_ssr_failure: config_env() != :prod

# Configure esbuild (the version is managed by the esbuild dependency in mix.exs)
config :esbuild,
  version: "0.21.5",
  inertia_app: [
    args:
      ~w(js/app.jsx --bundle --target=es2020 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# Configure tailwind (the version is managed by the tailwind dependency in mix.exs)
config :tailwind,
  version: "3.4.3",
  inertia_app: [
    args: ~w(
      --config=tailwind.config.js
      --input=css/app.css
      --output=../priv/static/assets/css/app.css
    ),
    cd: Path.expand("../assets", __DIR__)
  ]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
