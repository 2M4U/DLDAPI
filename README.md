[![npm installinfo](https://nodei.co/npm/dldapi.png?downloads=true&stars=true)](https://www.npmjs.com/package/dldapi)<br>
[![npm version](https://img.shields.io/npm/v/dldapi.svg?maxAge=3600)](https://www.npmjs.com/package/dldapi)
[![npm downloads](https://img.shields.io/npm/dt/dldapi.svg?maxAge=3600)](https://www.npmjs.com/package/dldapi)


The Unofficial API Module For **Discord Lists Development** in JavaScript.
#### Installation

Using **npm**

`npm i dldapi`

Using **yarn**

`yarn add dldapi`
<hr>

#### Methods
- .postStats()
- *More coming soon*
<hr>

#### Example(s)

Methods usage:
```js
const DLDAPI = require('dldapi');
const dld = new DLDAPI('BOT_ID','API_KEY');
```

-  .postStats()
```js
dld.postStats('SERVER_COUNT').then(console.log);
```

#### Basic Example

```js
const DLDAPI = require('dldapi');
module.exports = (client) => {
    const dld = new DLDAPI(client.user.id, "EXAMPLE");
    dld.postStats(client.guilds.cache.size).then((r) => {
        console.log(r);
    }).catch((err) => {
        console.log(err);
    });
};
```

**__OR__**

```js
const DLDAPI = require('dldapi');
module.exports = async (client) => {
    const dld = new DLDAPI(client.user.id, "EXAMPLE");
    let res = await dld.postStats(client.guilds.cache.size);
    console.log(res);
};
```