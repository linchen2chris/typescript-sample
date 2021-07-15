require("esbuild")
  .build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outdir: "./output",
    target: "esnext",
  })
  .catch(() => process.exit(1));
