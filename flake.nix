{
  inputs = {
    nixpkgs.url = "github:cachix/devenv-nixpkgs/rolling";
    systems.url = "github:nix-systems/default";
    devenv.url = "github:cachix/devenv";
    devenv.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs =
    {
      self,
      nixpkgs,
      devenv,
      systems,
      ...
    }@inputs:
    let
      forEachSystem = nixpkgs.lib.genAttrs (import systems);
    in
    {
      packages = forEachSystem (system: {
        devenv-up = self.devShells.${system}.default.config.procfileScript;
      });

      devShells = forEachSystem (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        {
          default = devenv.lib.mkShell {
            inherit inputs pkgs;
            modules = [
              {
                packages = [
                  pkgs.nodejs
                  pkgs.pnpm
                  pkgs.eslint_d
                  pkgs.prettierd
                ];

                enterShell = ''
                  echo "node: "$(node --version)
                  echo "pnpm: "$(pnpm --version)
                  echo "eslint_d: "$(eslint_d --version)
                  echo "prettierd: "$(prettierd --version)
                '';
              }
            ];
          };
        }
      );
    };
}
