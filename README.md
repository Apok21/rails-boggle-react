# Rails-Boggle-React

Simple Boggle word game with Ruby on Rails and React JS.

**Note**: This application was created on Windows 10 OS.


## Built with

- Ruby 2.6.6p146

- Rails 5.1.7

- Node : v14.1.0 

- Yarn : 1.22.4

- React JS: 16.13.1

## Quick Start

Open up a gitbash/powersshell and navigate to a location where you would like to download this project.
Then, enter the given commands sequentially

Clone the project to you local directory using `HTTPS`

```
https://github.com/Apok21/rails-boggle-react.git
```

Navigate inside the downloaded project

```
cd rails-boggle-react
```
Install all back-end dependencies

```
bundle install
```

Install all front-end dependencies

```
yarn install
```

Run rails server

```
rails s
```

By default,  the server tries to run on port 3000.
So if you want to run it on a different port:

```
rails s -p <port>
```

Open up your browser and access the app via url `http://localhost:<port>`

## Testing the Rails APIs

To run controller unit tests:

```
rake test
```

**Note**

This project uses https://developer.oxforddictionaries.com  api to validate if a word is valid.

## Credits and References

- [ROR-React-boggle](https://github.com/Rabin-Lama/ROR-React-boggle)
- [Chuks Opia](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend)