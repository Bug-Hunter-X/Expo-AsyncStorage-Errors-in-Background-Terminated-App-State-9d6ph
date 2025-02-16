To solve the problem, use a more robust asynchronous storage solution.  MMKV is a great option.

First, install MMKV:
```bash
expo install mmkv-storage
```
Then, replace AsyncStorage usage with MMKV:
```javascript
import { MMKVStorage } from 'mmkv-storage';

const mmkv = new MMKVStorage.Loader().initialize();

// Set value
await mmkv.setStringAsync('myKey', 'myValue');

// Get value
const value = await mmkv.getStringAsync('myKey');
console.log(value); // Output: myValue
```
MMKV is asynchronous and is designed to work reliably even in background processes.