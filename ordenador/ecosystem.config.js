module.exports = {
  apps: [
    {
      name: "front-antonio",
      script: "npm",
      args: "start",
      cwd: "./frontend",
      interpreter: "none",
    },
    {
      name: "back-antonio",
      script: "php",
      args: "artisan serve",
      cwd: "./backend",
    },
  ],
};
