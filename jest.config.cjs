module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Para mapear caminhos .js, se necessário
  },
  // Incluir diretórios que devem ser processados
  include: ["src/**/*"],
};
