# Gen10 (Module/Controller & Model Generator) For AnubisBaseAPI
---

Gen10-Generator is a project specific package for the AnubisBaseAPI. It generates Routes (Module/Controller) which must be registered manually as of version 1.0.

## Setup
---

In the projects root directory add a file named g10.settings.json. This file contains the paths to where the models/controllers/modules will be created. These could change depending on OS currently. 

```json
  {
    "controllerDir": "../../src/src/Controllers/",
    "modelDir": "../../src/src/Models/",
  }
```

Creating a run script:

```json
  "scripts" : {
    "gen10": "node ./Gen10-Generator/index.js"
  }
```

## Use
---

Creating routes:

```bash
yarn gen10 r [Option] [Name]
```

Generating a Model:

```bash
yarn gen10 m [Name]
```

Name should start with a capital letter "Home"


### Options
---

|   Option  | CRUD initialization                                                                |
| ----------| ---------------------------------------------------------------------------------- |
|     S     | Simple (Default) Route with an index endpoint setup (Get)                          |
|     C     | Route with an index and Create endpoint (Get) (Post)                               |
|     R     | Route with an index and Read endpoint (Get) (Get/:id)                              |
|     U     | Route with an index and Update endpoint (Get) (Patch) (Put)                        |
|     D     | Route with an index and Delete endpoint (Get) (Delete)                             |
|    CR     | Route with an index, Create, and Read (Get) (Post) (Get/:id)                       |
|    CD     | Route with an index, Create, and Delete (Get) (Post) (Delete)                      |
|    CU     | Route with an index, Create, and Update (Get) (Post) (Patch) (Put)                 |
|    CRU    | Route with an index, Create, Read, and Update (Get) (Post) (Get/:id) (Patch) (Put) |
|    CRUD   | Route with an index, Read, Update, Delete (Get) (Get/:id) (Patch) (Put) (Delete)   |
|    RU     | Route with an index, Update, and Read (Get) (Get/:id) (Patch) (Put)                |
|    UD     | Route with an index, Update, and Delete (Get) (Patch) (Put) (Delete)               |


### Async Options
---

|   Option  | CRUD initialization                                                                 |
| ----------| ----------------------------------------------------------------------------------- |
|     AS     | Simple (Default) Route with an index endpoint setup (Get)                          |
|     AC     | Route with an index and Create endpoint (Get) (Post)                               |
|     AR     | Route with an index and Read endpoint (Get) (Get/:id)                              |
|     AU     | Route with an index and Update endpoint (Get) (Patch) (Put)                        |
|     AD     | Route with an index and Delete endpoint (Get) (Delete)                             |
|    ACR     | Route with an index, Create, and Read (Get) (Post) (Get/:id)                       |
|    ACD     | Route with an index, Create, and Delete (Get) (Post) (Delete)                      |
|    ACU     | Route with an index, Create, and Update (Get) (Post) (Patch) (Put)                 |
|    ACRU    | Route with an index, Create, Read, and Update (Get) (Post) (Get/:id) (Patch) (Put) |
|    ACRUD   | Route with an index, Read, Update, Delete (Get) (Get/:id) (Patch) (Put) (Delete)   |
|    ARU     | Route with an index, Update, and Read (Get) (Get/:id) (Patch) (Put)                |
|    AUD     | Route with an index, Update, and Delete (Get) (Patch) (Put) (Delete)               |