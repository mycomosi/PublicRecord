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
import {createPublicRecord} from "../../dist/createPublicRecord";
let options = {};
let publicRecord = createPublicRecord(options);
let level = 'info';

publicRecord.logMessage(level, 'This is %s message #%d', 'dynamic', 1);
// Outputs: This is dynamic message #1
</code></pre>


## Demos
- [Linked to index.html](../demo/iife/)
- [Es6 module](../demo/es/)
