# Secret alphabet

- There is a secret way to sort the alphabet (it's secret, so you don't know it)
- Each letter will have a score from 1 to 26 (depending on its position in the secret order)
- A word's score is the sum of the individual score of its letters
- This web app calculates the maximum possible score of a word, without knowing the secret order

## Deployment

This web app is deployed at [https://secret-alphabet.vercel.app/](https://secret-alphabet.vercel.app/)

## Example

- Alphabet in ascending order: **Z** score would be 26 and **A** score would be 1
- **ZA** word score would be 27

## Usage

- Just enter a word and click `GO!`
- If you want to test another word, just click `Another word!`

## Run Locally

Clone the project

```bash
  git clone https://github.com/cristianblar/secret-alphabet
```

Go to the project directory

```bash
  cd secret-alphabet
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Author

- [@cristianblar](https://github.com/cristianblar)

## License

[MIT](https://choosealicense.com/licenses/mit/)
