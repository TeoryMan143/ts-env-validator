# Zod and TS validation for env variables

Load your `.env` file to generate the zod validation code and typescript autocompletion.

## Example

### .env file

```env
DB_USER=admin
DB_PASSWORD=123
```

### Generated typescript code

```ts
import { z } from 'zod';

const envSchema = z.object({
  DB_USE: z.string(),
  DB_PASSWOR: z.string(),
});

envSchema.parse(process.env);

namespace NodeJS {
  interface ProcessEnv extends z.infer<typeof envSchema> {}
}
```
