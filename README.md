# What is this?

An encoder or decoder for Erdem Gokel's morse based numeric alphabet.

# Installation

`npm i @erdemgoksel/mneme`

Then:

```

let Mneme = require('@erdemgoksel/mneme')


let encoded = Mneme('encode','hello world');
// returns "40101120112003 12003011101120012"


let decoded = Mneme('decode',encoded);
// returns "hello world"

```

