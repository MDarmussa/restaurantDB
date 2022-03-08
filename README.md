npx sequelize-cli model:generate --name restaurant --attributes name:string,address:string,category:string

npx sequelize-cli model:generate --name reviewer --attributes name:string,email:string,karma:integer

npx sequelize-cli model:generate --name review --attributes reviewer_id:integer,stars:integer,title:string,review:string,restaurant_id:integer


 ------- (add extra files to migration to connect the foreign keys) ---------
- run (1)
npx sequelize-cli migration:generate --name addconstraints //addconstraints can be any name
- run
npx sequelize-cli db:migrate 
-run (2)
- npx sequelize-cli migration:generate --name restaurants2 
-run //
npx sequelize-cli db:migrate 
------------------------------------------------------
