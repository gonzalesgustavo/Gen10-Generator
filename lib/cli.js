const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const settings = require(path.join(__dirname, "./../../g10.settings.json"));
const internalSettings = require("../geninit.settings.json");
class Cli {
  getArgs() {
    return {
      type: process.argv[2],
      options: process.argv[3],
      name: process.argv[4],
    };
  }
  generateRoute(name, options) {
    const data = {
      fileName: name,
      regMsg: internalSettings.registryMessage,
    };
    switch (options.toUpperCase()) {
      case "S":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/Simple.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Simple.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "C":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/Create.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Create.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "CR":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/CreateRead.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/CreateRead.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "CRU":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/CreateReadUpdate.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/CreateReadUpdate.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "CD":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/CreateDelete.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/CreateDelete.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "CU":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/CreateUpdate.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/CreateUpdate.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "CRUD":
        ejs.renderFile(
          path.join(
            __dirname,
            "./templates/Controllers/CreateReadUpdateDelete.ejs"
          ),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(
            __dirname,
            "./templates/Modules/CreateReadUpdateDelete.ejs"
          ),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "R":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/Read.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Read.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "RU":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/ReadUpdate.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/ReadUpdate.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "UD":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/UpdateDelete.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/UpdateDelete.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "U":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/Update.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Update.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "D":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/Delete.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Delete.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "AS": // async
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/async/Simple.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Simple.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "AC":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/async/Create.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Create.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "ACR":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/async/Simple.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Simple.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "ACRU":
        ejs.renderFile(
          path.join(
            __dirname,
            "./templates/Controllers/async/CreateReadUpdate.ejs"
          ),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/CreateReadUpdate.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "ACD":
        ejs.renderFile(
          path.join(
            __dirname,
            "./templates/Controllers/async/CreateDelete.ejs"
          ),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/CreateDelete.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "ACU":
        ejs.renderFile(
          path.join(
            __dirname,
            "./templates/Controllers/async/CreateUpdate.ejs"
          ),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/CreateUpdate.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "ACRUD":
        ejs.renderFile(
          path.join(
            __dirname,
            "./templates/Controllers/async/CreateReadUpdateDelete.ejs"
          ),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(
            __dirname,
            "./templates/Modules/CreateReadUpdateDelete.ejs"
          ),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "AR":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/async/Read.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Read.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "ARU":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/async/ReadUpdate.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/ReadUpdate.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "AUD":
        ejs.renderFile(
          path.join(
            __dirname,
            "./templates/Controllers/async/UpdateDelete.ejs"
          ),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/UpdateDelete.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "AU":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/async/Update.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Update.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      case "AD":
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/async/Delete.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Delete.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
      default:
        ejs.renderFile(
          path.join(__dirname, "./templates/Controllers/Simple.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.controller.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        ejs.renderFile(
          path.join(__dirname, "./templates/Modules/Simple.ejs"),
          data,
          (err, str) => {
            fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true }
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  }
                );
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );
        break;
    }
  }
  generateModel(name){
    const data = {
      name
    }
    ejs.renderFile(
      path.join(__dirname, "./templates/Model.ejs"),
      data,
      (err, str) => {
        fs.promises
          .mkdir(
            `${path.join(__dirname, settings.modelDir)}${name}/`,
            { recursive: true }
          )
          .then(() => {
            fs.writeFile(
              `${path.join(
                __dirname,
                settings.modelDir
              )}${name}/${name.toLowerCase()}.model.ts`,
              str,
              (err) => {
                if (err) throw new Error(err);
              }
            );
          })
          .catch((err) => {
            console.log(err)
            throw new Error(err);
          });
      }
    );
  }
  generateTemplate() {
    const { name, type, options } = this.getArgs();
    switch (type) {
      case "r":
        this.generateRoute(name, options);
        break;
      case "m":
        this.generateModel(options);
      default:
        break;
    }
  }
}

module.exports = {
  Cli,
};
