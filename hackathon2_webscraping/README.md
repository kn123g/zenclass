# Backend
BASE URL &emsp; https://webscraper-zenclass.herokuapp.com/
<br />
Backend API Path
<br/>
GET &emsp; /categories/
<br/>
GET &emsp; /categories/<search_key> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; /categories/m
<br/>
GET &emsp; /countproducts/<category_name> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; /countproducts/books
<br/>
GET &emsp; /products/<category_name>/<page_number> &emsp; /products/books/1
<br/>
GET &emsp; /products/products &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; /products

## Add Database details into process environment
MONGO_ATLAS_CLUSTER		&emsp;		<cluster_hostname>
<br />
MONGO_ATLAS_DATABASE	&emsp;		<database_name>
<br />
MONGO_ATLAS_USERNAME	&emsp;		<database_username>
<br />
MONGO_ATLAS_PASSWORD	&emsp;		<database_password>
<br />


## Heruko deployment process environment
NODE_OPTIONS 			&emsp;		--max_old_space_size=1024
<br />
PROJECT_PATH 			&emsp;		backend

# Frontend
https://zenclass-hackathon2.netlify.app/
## change backend base URL in below path before build
frontend/src/constants/external_api.js file

## Build frontend
npm run build

## Build base path after build
frontend/build/
