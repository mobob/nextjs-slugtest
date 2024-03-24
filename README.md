Created with

```bash
npx create-next-app@latest
```

And choosing all defaults. Then deleted lots of stuff.

Setup to play with nested routes and various slug libraries / capabilities.

Would probably go with this library to generate the slugs, seems pretty crispy and well troden:

https://www.npmjs.com/package/slugify

Then, when either CREATING or updating the IDENTIFIER of the thing that needs to be slugged;

- in the database i'd have a pk that is a UUID that never ever changes
- an IDENTIFIER that _can_ change
- and would generate a slug based on the above via a method that would catch collisions and retry
- the slug must be a unique index in the db, much like the pk - it needs to do the work of ensuring uniqueness however...
- if the data model like suggested here is such that the lesson is always in a given collection, then its uniqueness needs are less.

Could also go with something like this to add randomness, but it makes all urls look less good:

https://stackoverflow.com/questions/47477695/generating-a-collision-immune-obfuscating-slug-manually

However, if you want to set a max size to your slugs of say 8 chars, adding a few random bytes at the end isn't a bad thing, kinda better than 01, 02, 03 which does reveal some internals in a sloppyish way.
