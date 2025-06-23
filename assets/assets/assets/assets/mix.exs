defmodule Assets.MixProject do
  use Mix.Project

  def project do
    [
      app: :assets,
      version: "0.1.0",
      elixir: "~> 1.15",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      {:tailwind, "~> 0.3.4", runtime: Mix.env() == :dev},
      {:esbuild, "~> 0.9", runtime: Mix.env() == :dev},
      {:vite, "~> 0.7", runtime: Mix.env() == :dev}
    ]
  end
end
