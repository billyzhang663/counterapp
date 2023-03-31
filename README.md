
### To build

1. Clone the repo

```sh
git clone git@github.com:billyzhang663/counterapp.git
```

2. Change into the project directory you'd like to run

3. Install the dependencies

```sh
npm install
```

4. Start a local Solana node

```sh
solana-test-validator
```

5. Build the anchor project

```sh
anchor build
```

6. Fetch the project ID for the build:

```sh
solana address -k target/deploy/<programname>-keypair.json
```

6. Update the project ID in the Rust program located at __projectname/programs/src/programname.rs__ with the output from above.

7. Run the tests

```sh
anchor test --skip-local-validator
```

8. Change into the __app__ directory and install the dependencies:

```sh
cd app && npm install
``` 

9. Run the client-side app

```sh
npm start
```
