const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
// const settings = require(path.join(__dirname, "./../../g10.settings.json"));
const settings = require(path.join(__dirname, "../gen10.settings.json"));

const internalSettings = require("../geninit.settings.json");
class Cli {
  getArgs() {
    return {
      type: process.argv[2],
      options: process.argv[3],
      name: process.argv[4],
      testOptions: process.argv[5],
    };
  }

  generateTests(testOptions, name) {
    const data = {
      name,
    };
    if (testOptions) {
      switch (testOptions.toLowerCase()) {
        case "i":
          ejs.renderFile(
            path.join(__dirname, "./templates/Tests/Test.ejs"),
            data,
            (err, str) => {
              fs.promises
                .mkdir(
                  `${path.join(
                    __dirname,
                    settings.testDir
                  )}/tests/integration/`,
                  { recursive: true }
                )
                .then(() => {
                  fs.writeFile(
                    `${path.join(
                      __dirname,
                      settings.testDir
                    )}/tests/integration/${name.toLowerCase()}.spec.ts`,
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
        case "u":
          ejs.renderFile(
            path.join(__dirname, "./templates/Tests/Test.ejs"),
            data,
            (err, str) => {
              fs.promises
                .mkdir(
                  `${path.join(__dirname, settings.testDir)}/tests/unit/`,
                  { recursive: true }
                )
                .then(() => {
                  fs.writeFile(
                    `${path.join(
                      __dirname,
                      settings.testDir
                    )}/tests/unit/${name.toLowerCase()}.spec.ts`,
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
        case "ui":
          ejs.renderFile(
            path.join(__dirname, "./templates/Tests/Test.ejs"),
            data,
            (err, str) => {
              fs.promises
                .mkdir(
                  `${path.join(__dirname, settings.testDir)}/tests/unit/`,
                  { recursive: true }
                )
                .then(() => {
                  fs.writeFile(
                    `${path.join(
                      __dirname,
                      settings.testDir
                    )}/tests/unit/${name.toLowerCase()}.spec.ts`,
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
            path.join(__dirname, "./templates/Tests/Test.ejs"),
            data,
            (err, str) => {
              fs.promises
                .mkdir(
                  `${path.join(
                    __dirname,
                    settings.testDir
                  )}/tests/integration/`,
                  { recursive: true }
                )
                .then(() => {
                  fs.writeFile(
                    `${path.join(
                      __dirname,
                      settings.testDir
                    )}/tests/integration/${name.toLowerCase()}.spec.ts`,
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
          case "iu":
            ejs.renderFile(
              path.join(__dirname, "./templates/Tests/Test.ejs"),
              data,
              (err, str) => {
                fs.promises
                  .mkdir(
                    `${path.join(__dirname, settings.testDir)}/tests/unit/`,
                    { recursive: true }
                  )
                  .then(() => {
                    fs.writeFile(
                      `${path.join(
                        __dirname,
                        settings.testDir
                      )}/tests/unit/${name.toLowerCase()}.spec.ts`,
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
              path.join(__dirname, "./templates/Tests/Test.ejs"),
              data,
              (err, str) => {
                fs.promises
                  .mkdir(
                    `${path.join(
                      __dirname,
                      settings.testDir
                    )}/tests/integration/`,
                    { recursive: true }
                  )
                  .then(() => {
                    fs.writeFile(
                      `${path.join(
                        __dirname,
                        settings.testDir
                      )}/tests/integration/${name.toLowerCase()}.spec.ts`,
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
          break;
      }
    }
  }

  generateRoute(name, options, testOptions) {
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
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
        this.generateTests(testOptions, name);
        break;
    }
  }
  generateModel(name) {
    const data = {
      name,
    };
    ejs.renderFile(
      path.join(__dirname, "./templates/Model.ejs"),
      data,
      (err, str) => {
        fs.promises
          .mkdir(`${path.join(__dirname, settings.modelDir)}${name}/`, {
            recursive: true,
          })
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
            console.log(err);
            throw new Error(err);
          });
      }
    );
  }
  generateTemplate() {
    const { name, type, options, testOptions } = this.getArgs();
    switch (type) {
      case "r":
        this.generateRoute(name, options, testOptions);
        break;
      case "m":
        this.generateModel(options);
      case 't':
        this.generateTests(options, name);
      default:
        break;
    }
  }
}

module.exports = {
  Cli,
};
