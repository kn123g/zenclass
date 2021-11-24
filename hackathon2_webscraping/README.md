# Backend
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
## change backend base URL in below path before build
frontend/src/constants/external_api.js file

## Build frontend
npm run build

## Build base path after build
frontend/build/
