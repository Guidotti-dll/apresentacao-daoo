/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('users', 'UsersController.store')

Route.post('forgot-password', 'ForgotPasswordsController.store')
Route.patch('reset-password/:token', 'ForgotPasswordsController.update')

Route.get('confirm-account/:id', 'SessionsController.confirmAccount')
Route.post('sessions', 'SessionsController.store')

Route.group(() => {
  Route.resource('users', 'UsersController').apiOnly().except(['store'])
  Route.resource('roles', 'RolesController').apiOnly()
  Route.put('users/:id/attach', 'UsersController.attach').as('users.attach')
  Route.put('users/:id/detach', 'UsersController.detach').as('users.detach')
  Route.put('roles/:id/attach', 'RolesController.attach').as('roles.attach')
  Route.put('roles/:id/detach', 'RolesController.detach').as('roles.detach')
  Route.get('users/:user_id/bets', 'BetsController.showBetsByPlayer').as('users.show.bets')
  Route.resource('permissions', 'PermissionsController').apiOnly()
  Route.resource('games', 'GamesController').apiOnly()
  Route.resource('bets', 'BetsController').apiOnly().paramFor('bets', 'bet')
}).middleware(['auth', 'can'])
