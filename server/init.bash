# sequelize model:generate --name user --attributes firstName:string,lastName:string,email:string

# sequelize migration:create --name addUserColumn
# sequelize db:migrate:undo
# sequelize db:migrate


# --- Examples of generating seed data for a table ---
# sequelize seed:generate --name users
# sequelize seed:generate --name categories
# sequelize seed:generate --name posts
# sequelize seed:generate --name comments

# --- Migrate Seed Command ---
# sequelize db:seed:all
