const fs = require("fs");
const path = require("path");
const ejs = require('ejs');
const SETTINGS = require('../settings.json');
const settings = JSON.parse(SETTINGS);
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
    }
    switch (options.toUpperCase()) {
      case "S":
        ejs.renderFile('./templates/controllers/Simple.ejs', data, (err, str) => {
          fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true },
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir,
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  },
                );
              })
              .catch( err => {
                throw new Error(err);
              });
        });
        ejs.renderFile('./templates/Modules/Simple.ejs', data, (err, str) => {
          fs.promises
              .mkdir(
                `${path.join(__dirname, settings.controllerDir)}${name}/`,
                { recursive: true },
              )
              .then(() => {
                fs.writeFile(
                  `${path.join(
                    __dirname,
                    settings.controllerDir,
                  )}${name}/${name.toLowerCase()}.module.ts`,
                  str,
                  (err) => {
                    if (err) throw new Error(error);
                  },
                );
              })
              .catch( err => {
                throw new Error(err);
              });
        });
        break;
      case "C":
       
        break;
      case "CR":
       
        break;
      case "CRU":
       
        break;
      case "CD":
       
        break;
      case "CU":
       
        break;
      case "CRUD":
        
        break;
      case "R":
        
        break;
      case "RU":
       
        break;
      case "UD":
        
        break;
      case "U":
        
        break;
      case "D":
       
        break;
      case "AS": // async
        
        break;
      case "AC":
        
        break;
      case "ACR":
        
        break;
      case "ACRU":
        
        break;
      case "ACD":
       
        break;
      case "ACU":
        
        break;
      case "ACRUD":
       
        break;
      case "AR":
        
        break;
      case "ARU":
        
        break;
      case "AUD":
        
        break;
      case "AU":
        
        break;
      case "AD":
       
        break;
      default:
       
        break;
    }
    // if (moduleTemplate && controllerTemplate) {
    //   fs.promises
    //     .mkdir(
    //       `${path.join(__dirname, "../../src/src/Controllers/")}${name}/`,
    //       { recursive: true },
    //     )
    //     .then(() => {
    //       fs.writeFile(
    //         `${path.join(
    //           __dirname,
    //           "../../src/src/Controllers/",
    //         )}${name}/${name.toLowerCase()}.module.ts`,
    //         moduleTemplate,
    //         (err) => {
    //           if (err) throw new Error(error);
    //         },
    //       );
    //       fs.writeFile(
    //         `${path.join(
    //           __dirname,
    //           "../../src/src/Controllers/",
    //         )}${name}/${name.toLowerCase()}.controller.ts`,
    //         controllerTemplate,
    //         (err) => {
    //           if (err) throw new Error(error);
    //         },
    //       );
    //       console.warn(
    //         "WARNING: all modules must be registered under Registry/module.registry.ts in order to be considered routes. As of Version 1.0",
    //       );
    //     })
    //     .catch((err) => {
    //       throw new Error(err);
    //     });
    // }
  }
  generateTemplate() {
    const { name, type, options } = this.getArgs();
    switch (type) {
      case "r":
        this.generateRoute(name, options);
        break;
      default:
        break;
    }
  }
}

module.exports = {
  Cli,
};
