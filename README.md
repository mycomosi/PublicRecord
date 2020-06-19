# Public Record

A configurable shared public record of ui environment managed console logging
### Linked script example:
<pre><code>
let level = 'info';
let options = {};
publicRecord.setOptions(options);
publicRecord.logMessage(level, 'This is %s message #%d', 'dynamic', 1);
// Outputs: This is dynamic message #1
</code></pre>

### ES Module Usage:
<pre><code>
import {publicCreate} from "../../dist/publicCreate";
let options = {};
let publicRecord = publicCreate(options);
let level = 'info';

publicRecord.logMessage(level, 'This is %s message #%d', 'dynamic', 1);
// Outputs: This is dynamic message #1
</code></pre>


## Getting Started
To begin, clone this project and run
<pre><code>
npm install
npm run release
</code></pre>
Then, run a web server such as http-server
Go to the root of the project to read the documentation
